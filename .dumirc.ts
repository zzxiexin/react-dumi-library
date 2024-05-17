import { defineConfig } from 'dumi';

export default defineConfig({
  base: '/yxhooks/',
  publicPath: '/yxhooks/',
  outputPath: 'docs-dist',
  jsMinifierOptions: {
    target: ['chrome80', 'es2020'],
  },
  themeConfig: {
    name: 'yxhooks',
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
