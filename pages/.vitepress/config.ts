import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/vulkan_guide/',
  lang: 'en-US',
  title: 'Vulkan Guide',
  description: 'A modern guide to Vulkan (with Rust as the source language), along with a collection of modern graphics topics/examples.',
  appearance: true, // Enable dark theme by default (this is true by default but I want to be explicit)
  lastUpdated: true, // Display the last updated time based on git timestamp
  themeConfig: {
    sidebar: [
      {
        text: 'Home',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Getting Started', link: '/getting-started' },
        ]
      }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Andrew Mitchell'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/realandrew/vulkan_guide' }
    ]
  }
})