import { defineConfig } from 'astro/config'; // 

import mdx from "@astrojs/mdx";
import react from "@astrojs/react";


// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: 'one-dark-pro',
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      langs: ['py', 'js','sh', 'html', 'css'],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true
    }
  },
  integrations: [mdx(), react()]
  // integrations: [mdx(), react(), image()]
});