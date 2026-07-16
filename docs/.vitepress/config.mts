import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
    
  title: "Downrest's Portfolio",
  transformPageData(pageData) {
    pageData.titleTemplate = "Downrest's Portfolio"
  },

  description: "Meow",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: `Downrest's Portfolio`,
    logo: `/logo.png`,

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'roblox', link: 'https://www.roblox.com/users/1470601882/profile' },
      { icon: 'robloxstudio', link: 'https://devforum.roblox.com/u/downrest' },
      { icon: 'github', link: 'https://github.com/Downrest' }
    ]
  }
})
