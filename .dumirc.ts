import { defineConfig } from 'dumi';

export default defineConfig({
  base: '/react-dumi-library/',
  publicPath: '/react-dumi-library/',
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'react-ui-library',
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
