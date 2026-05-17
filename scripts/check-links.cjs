const fs = require("fs");
const path = require("path");

const CONTENT_DIR = path.resolve(__dirname, "..", "content");
const WIKI_LINK_RE = /(?<!!)\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g;
const SKIP_DIRS = new Set(["SageTower"]);
const NAV_HUBS = new Set(["index.md", "persona.md"]);

function findMDFiles(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!SKIP_DIRS.has(entry.name)) files.push(...findMDFiles(full));
    } else if (entry.name.endsWith(".md")) {
      files.push(full);
    }
  }
  return files;
}

function toRel(absPath) {
  return path.relative(CONTENT_DIR, absPath).replace(/\\/g, "/");
}

function isSageTower(relPath) {
  return relPath.startsWith("SageTower/");
}

function resolveTarget(rawTarget, sourceRel) {
  let t = rawTarget.trim();
  if (t.includes("/")) {
    if (!t.endsWith(".md")) t += ".md";
    return path.posix.join(CONTENT_DIR, t);
  }
  if (t === "index.md" || t === "index") {
    return path.join(CONTENT_DIR, "index.md");
  }
  if (t === "persona.md") {
    return path.join(CONTENT_DIR, "persona.md");
  }
  if (!t.endsWith(".md")) t += ".md";
  const sourceDir = path.dirname(path.join(CONTENT_DIR, sourceRel));
  return path.join(sourceDir, t);
}

function extractWikiLinks(content, sourceRel) {
  const links = [];
  const broken = [];
  let m;
  while ((m = WIKI_LINK_RE.exec(content)) !== null) {
    const resolved = resolveTarget(m[1], sourceRel);
    const resolvedRel = toRel(resolved);
    if (fs.existsSync(resolved)) {
      links.push(resolvedRel);
    } else {
      broken.push({ target: m[1], resolvedRel });
    }
  }
  return { links, broken };
}

function buildGraph() {
  const outbound = {};
  const allBroken = [];
  const files = findMDFiles(CONTENT_DIR);

  for (const file of files) {
    const rel = toRel(file);
    const content = fs.readFileSync(file, "utf-8");
    const { links, broken } = extractWikiLinks(content, rel);
    outbound[rel] = links;
    allBroken.push(...broken.map((b) => ({ source: rel, ...b })));
  }

  const inbound = {};
  for (const [src, targets] of Object.entries(outbound)) {
    for (const t of targets) {
      if (!inbound[t]) inbound[t] = [];
      inbound[t].push(src);
    }
  }

  return { outbound, inbound, allFiles: files.map((f) => toRel(f)), allBroken };
}

function main() {
  console.log("Scanning wiki links in content/ ...\n");
  const { outbound, inbound, allFiles, allBroken } = buildGraph();

  console.log("--- Broken Links ---");
  if (allBroken.length === 0) {
    console.log("  (none)");
  } else {
    for (const b of allBroken) {
      console.log(`  ${b.source} -> ${b.resolvedRel} (from [[${b.target}]])`);
    }
  }

  console.log("\n--- Missing Reverse Links ---");
  let missingCount = 0;
  for (const [src, targets] of Object.entries(outbound)) {
    const srcName = path.basename(src);
    if (NAV_HUBS.has(srcName)) continue;
    for (const tgt of targets) {
      const tgtName = path.basename(tgt);
      if (NAV_HUBS.has(tgtName)) continue;
      if (isSageTower(tgt)) continue;
      const revLinks = inbound[src] || [];
      if (!revLinks.includes(tgt)) {
        console.log(`  ${src}\n    -> ${tgt}`);
        missingCount++;
      }
    }
  }

  if (missingCount === 0) {
    console.log("  (none)");
  }

  console.log("\n=== Summary ===");
  console.log(`  Files scanned: ${allFiles.length}`);
  console.log(`  Missing reverse links: ${missingCount}`);
  console.log(`  Broken links: ${allBroken.length}`);

  if (missingCount === 0 && allBroken.length === 0) {
    console.log("  All clear! No issues found.");
  }
}

main();
