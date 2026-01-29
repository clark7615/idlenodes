const fs = require('fs');
const path = require('path');

const contentDir = '/Users/kedaidai/Project/idlenodes/content';

const renameMap = {
    'OB 套件表.md': 'obsidian-plugins.md',
    '玩具箱.md': 'toy-box.md',
    '角色卡.md': 'persona.md',
    'Quests/使用 GCP 免費方案建立 Obsidian 圖床（含 Cloud Run API）尚未驗證.md': 'Quests/obsidian-image-hosting-gcp.md',
    'Quests/自我程式碼品質管理系統.md': 'Quests/code-quality-management.md',
    'Grimoires/Git 配置秘笈.md': 'Grimoires/git-configuration.md',
    'Grimoires/Swagger多站據合UI.md': 'Grimoires/swagger-multi-site-ui.md',
    'Grimoires/AI提示詞完全攻略：有效引導大型語言模型.md': 'Grimoires/ai-prompts-guide.md',
    'Grimoires/AI與提示詞工程學：高效使用GPT的策略.md': 'Grimoires/gpt-prompt-engineering.md',
    'Grimoires/IntelliJ DevContainer 設定教學手冊.md': 'Grimoires/intellij-devcontainer-guide.md',
    'Grimoires/SMART 原則是什麼？.md': 'Grimoires/smart-principles.md',
    'Grimoires/ART 原則是什麼？.md': 'Grimoires/art-principles.md',
    'Grimoires/Docker 容器資源限制說明文件.md': 'Grimoires/docker-resource-limits.md',
    'Grimoires/Docker MCP Toolkit.md': 'Grimoires/docker-mcp-toolkit.md',
    'Grimoires/2000年後員工如何管理以及帶領.md': 'Grimoires/managing-post-2000s-employees.md',
    'Grimoires/讓每位員工都能把對話變成果.md': 'Grimoires/effective-conversations.md',
    'Grimoires/如何策略性動怒，展現溝通水平與高度？.md': 'Grimoires/strategic-anger-communication.md',
    'Grimoires/後端 CSD 架構.md': 'Grimoires/backend-csd-architecture.md',
    'Grimoires/Scrum 敏捷式開發的優秀框架.md': 'Grimoires/scrum-agile-framework.md',
    'Grimoires/高效會議方法論.md': 'Grimoires/efficient-meeting-methodology.md',
    'Grimoires/當領導感覺時間不夠，如何做好時間管理？.md': 'Grimoires/leadership-time-management.md',
    'Grimoires/跨部門推進項目受阻應該怎麼辦？.md': 'Grimoires/cross-department-project-obstacles.md',
    'Grimoires/工作上怎麼復盤.md': 'Grimoires/work-review-methodology.md',
    'Grimoires/八種不同的員工類型.md': 'Grimoires/eight-types-of-employees.md',
    'Grimoires/UI 設計入門：從基礎到實作.md': 'Grimoires/ui-design-basics.md',
    'Grimoires/Java Container JVM 高效設置法.md': 'Grimoires/java-container-jvm-settings.md',
    'Grimoires/使用 Newman 在 CICD 中執行自動化測試.md': 'Grimoires/newman-cicd-testing.md',
    'SageTower/理財規劃與實務.md': 'SageTower/financial-planning-practice.md',
    'SageTower/個人行銷與形象管理.md': 'SageTower/personal-branding-management.md',
    'Forge/VS Code 字體及套件設定指南 (macOS & Windows).md': 'Forge/vscode-setup-guide.md',
    'Forge/IntelliJ IDEA 設定建議.md': 'Forge/intellij-idea-settings.md'
};

async function main() {
    const entries = Object.entries(renameMap);

    // 1. Rename files and update their own permalink
    for (const [oldPath, newPath] of entries) {
        const absoluteOldPath = path.join(contentDir, oldPath);
        const absoluteNewPath = path.join(contentDir, newPath);

        if (fs.existsSync(absoluteOldPath)) {
            console.log(`Renaming: ${oldPath} -> ${newPath}`);
            fs.renameSync(absoluteOldPath, absoluteNewPath);

            // Update permalink in the file itself
            let content = fs.readFileSync(absoluteNewPath, 'utf8');
            // Regex to find permalink field
            const permalinkRegex = /^permalink:.*$/m;
            const newPermalink = `permalink: "/${newPath.replace('.md', '').split('/').pop()}"`;

            if (permalinkRegex.test(content)) {
                content = content.replace(permalinkRegex, newPermalink);
            } else {
                // If no permalink exists, maybe add it? Or skip. 
                // Quartz usually works without explicit permalink if file name is clean, 
                // but user asked for permalink update.
                // Insert after ---
                const frontmatterEnd = content.indexOf('---', 4);
                if (frontmatterEnd !== -1) {
                    content = content.slice(0, frontmatterEnd) + `${newPermalink}\n` + content.slice(frontmatterEnd);
                }
            }
            fs.writeFileSync(absoluteNewPath, content, 'utf8');
        } else {
            console.warn(`File not found, skipping rename: ${oldPath}`);
        }
    }

    // 2. Update links in ALL markdown files
    // We need to construct a mapping of "Possible Link Text" -> "New Link Target"
    // Since links can be [[folder/filename]] or [[filename]], we need to handle variations.

    const allFiles = getAllFiles(contentDir);

    for (const file of allFiles) {
        if (!file.endsWith('.md')) continue;

        let content = fs.readFileSync(file, 'utf8');
        let originalContent = content;

        for (const [oldPathRel, newPathRel] of entries) {
            // Extract pure filename without extension
            const oldName = path.basename(oldPathRel, '.md');
            const newName = path.basename(newPathRel, '.md');

            // Construct likely link forms

            // Case A: [[Grimoires/Old Name]] -> [[Grimoires/New Name|Old Name]]
            // We escape special regex chars in oldPathRel (minus extension)
            const oldPathNoExt = oldPathRel.replace('.md', '');
            const newPathNoExt = newPathRel.replace('.md', ''); // Full relative path without ext

            // Regex for [[oldPathNoExt]] or [[oldPathNoExt|Label]]
            // We need to be careful about matching. 
            // e.g. [[Grimoires/AI...]]

            const strategies = [
                {
                    // Full Relative Path Match
                    // [[Grimoires/Data...]]
                    regex: new RegExp(`\\[\\[${escapeRegExp(oldPathNoExt)}(\\|(.*?))?\\]\\]`, 'g'),
                    replacement: (match, p1, p2) => {
                        const label = p2 ? p2 : oldName; // Use old filename as label if none provided, or keep existing label
                        return `[[${newPathNoExt}|${label}]]`;
                    }
                },
                {
                    // Filename only match (Obsidian lazy linking)
                    // [[Data...]]
                    regex: new RegExp(`\\[\\[${escapeRegExp(oldName)}(\\|(.*?))?\\]\\]`, 'g'),
                    replacement: (match, p1, p2) => {
                        const label = p2 ? p2 : oldName;
                        // For Quartz/Obsidian, if we rename the file, we should point to the new path.
                        // Ideally we use the full relative path if we know it, or just the new filename if usage was just filename.
                        // Let's safe bet on full relative path for clarity, OR just new filename if it was just filename.
                        // The user request suggests preserving "Chinese in link" which implies we want `|Chinese Name`

                        // If it was [[OldName]], `p2` is undefined. We return [[NewRelativePath|OldName]]
                        // If it was [[OldName|Label]], `p2` is Label. We return [[NewRelativePath|Label]]

                        return `[[${newPathNoExt}|${label}]]`;
                    }
                }
            ];

            for (const strat of strategies) {
                content = content.replace(strat.regex, strat.replacement);
            }
        }

        if (content !== originalContent) {
            console.log(`Updating links in: ${file}`);
            fs.writeFileSync(file, content, 'utf8');
        }
    }
}

function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);
    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
        } else {
            arrayOfFiles.push(path.join(dirPath, file));
        }
    });

    return arrayOfFiles;
}

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

main();
