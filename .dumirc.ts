import { defineConfig } from 'dumi';

export default defineConfig({
  base: '/yhooks/',
  publicPath: '/yhooks/',
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'yhooks',
  },
  resolve: {
    atomDirs: [
      { type: 'component', dir: './src/components' },
      { type: 'hook', dir: './src/hooks' },
      { type: 'util', dir: './src/utils' },
    ],
    codeBlockMode: 'passive',
  },
});
