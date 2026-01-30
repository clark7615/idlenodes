import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "閒逸神諭所 - Idle Oracles",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    baseUrl: "idlenodes.vercel.app",
    ignorePatterns: ["private", "templates"],
    defaultDateType: "created",
    locale: "zh-TW",
    googleSiteVerification: "Xo7GmRfXWhOt9cqpMqyZ7sbNLCvIrFPRhxnFPRBJSt4",
    googleAdsense: "ca-pub-3656812861576469",
    theme: {
      typography: {
        header: "Outfit",
        body: "JetBrains Mono",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#eff1f5",
          lightgray: "#e6e9ef",
          gray: "#9ca0b0",
          darkgray: "#6c6f85",
          dark: "#4c4f69",
          secondary: "#1e66f5",
          tertiary: "#179287",
          highlight: "rgba(30, 102, 245, 0.15)",
          textHighlight: "rgba(30, 102, 245, 0.15)",
        },
        darkMode: {
          light: "#1e1e2e",
          lightgray: "#313244",
          gray: "#6c7086",
          darkgray: "#a6adc8",
          dark: "#cdd6f4",
          secondary: "#89b4fa",
          tertiary: "#94e2d5",
          highlight: "rgba(137, 180, 250, 0.15)",
          textHighlight: "rgba(137, 180, 250, 0.15)",
        },
      },
      cdnCaching: true,
      fontOrigin: "googleFonts",
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.TableOfContents(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"], // you can add 'git' here for last modified from Git but this makes the build slower
      }),
      Plugin.SyntaxHighlighting(),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
    ],
  },
}

export default config
