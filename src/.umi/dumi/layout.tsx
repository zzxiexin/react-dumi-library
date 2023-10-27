// @ts-nocheck
import apis from '@@/dumi/apis';
import config from '@@/dumi/config';
import demos from '@@/dumi/demos';
import React from 'react';
import Layout from '/Users/yasinyuan/Desktop/react-dumi-library/node_modules/.pnpm/@umijs+preset-dumi@1.1.54_react-dom@18.2.0_react-router@6.3.0_react@18.2.0_typescript@5.2.2_umi@3.5.41/node_modules/@umijs/preset-dumi/lib/theme/layout';

export default (props) => (
  <Layout {...props} config={config} demos={demos} apis={apis} />
);
