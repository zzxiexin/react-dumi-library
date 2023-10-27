// @ts-nocheck
import { plugin } from './plugin';
import { ApplyPluginsType } from '/Users/yasinyuan/Desktop/react-dumi-library/node_modules/.pnpm/@umijs+runtime@3.5.41_react@16.14.0/node_modules/@umijs/runtime';

export function getRoutes() {
  const routes = [
    {
      path: '/~demos/:uuid',
      layout: false,
      wrappers: [require('../dumi/layout').default],
      component: (props) => {
        const React = require('react');
        const {
          default: getDemoRenderArgs,
        } = require('/Users/yasinyuan/Desktop/react-dumi-library/node_modules/.pnpm/@umijs+preset-dumi@1.1.54_react-dom@18.2.0_react-router@6.3.0_react@18.2.0_typescript@5.2.2_umi@3.5.41/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
        const {
          default: Previewer,
        } = require('dumi-theme-default/es/builtins/Previewer.js');
        const { usePrefersColor, context } = require('dumi/theme');

        const { demos } = React.useContext(context);
        const [renderArgs, setRenderArgs] = React.useState([]);

        // update render args when props changed
        React.useLayoutEffect(() => {
          setRenderArgs(getDemoRenderArgs(props, demos));
        }, [
          props.match.params.uuid,
          props.location.query.wrapper,
          props.location.query.capture,
        ]);

        // for listen prefers-color-schema media change in demo single route
        usePrefersColor();

        switch (renderArgs.length) {
          case 1:
            // render demo directly
            return renderArgs[0];

          case 2:
            // render demo with previewer
            return React.createElement(Previewer, renderArgs[0], renderArgs[1]);

          default:
            return `Demo ${props.match.params.uuid} not found :(`;
        }
      },
    },
    {
      path: '/_demos/:uuid',
      redirect: '/~demos/:uuid',
    },
    {
      __dumiRoot: true,
      layout: false,
      path: '/',
      wrappers: [
        require('../dumi/layout').default,
        require('/Users/yasinyuan/Desktop/react-dumi-library/node_modules/.pnpm/dumi-theme-default@1.1.24_@umijs+preset-dumi@1.1.54_react-dom@18.2.0_react@18.2.0/node_modules/dumi-theme-default/es/layout.js')
          .default,
      ],
      routes: [
        {
          path: '/components/button',
          component:
            require('/Users/yasinyuan/Desktop/react-dumi-library/src/Components/Button/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/Components/Button/index.md',
            updatedTime: 1698412891267,
            componentName: 'Button',
            title: '按钮',
            description: '按钮',
            keywords: ['按钮'],
            demo: {
              cols: 2,
            },
            slugs: [
              {
                depth: 1,
                value: '按钮',
                heading: '按钮',
              },
            ],
            group: {
              path: '/components',
              title: 'Components',
            },
          },
          title: '按钮 - react-ui-dumi-library',
        },
        {
          path: '/hooks/use-query/doc/idnex',
          component:
            require('/Users/yasinyuan/Desktop/react-dumi-library/src/Hooks/useQuery/doc/idnex.md')
              .default,
          exact: true,
          meta: {
            filePath: 'src/Hooks/useQuery/doc/idnex.md',
            updatedTime: 1698418325706,
            slugs: [],
            group: {
              path: '/hooks/use-query/doc',
              title: 'Hooks',
            },
            title: 'Idnex',
          },
          title: 'Idnex - react-ui-dumi-library',
        },
        {
          path: '/',
          component:
            require('/Users/yasinyuan/Desktop/react-dumi-library/docs/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'docs/index.md',
            updatedTime: 1698407788000,
            hero: {
              title: 'library',
              description: 'A react library developed with dumi',
              actions: [
                {
                  text: '组件',
                  link: '/component',
                },
                {
                  text: 'Hooks',
                  link: '/hooks',
                },
              ],
            },
            features: [
              {
                title: 'Hello',
                emoji: '💎',
                description: 'Put hello description here',
              },
              {
                title: 'World',
                emoji: '🌈',
                description: 'Put world description here',
              },
              {
                title: '!',
                emoji: '🚀',
                description: 'Put ! description here',
              },
            ],
            slugs: [],
            title: 'Index',
          },
          title: 'Index - react-ui-dumi-library',
        },
        {
          path: '/guide',
          component:
            require('/Users/yasinyuan/Desktop/react-dumi-library/docs/Guide/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'docs/Guide/index.md',
            updatedTime: 1698407788000,
            slugs: [
              {
                depth: 1,
                value: '介绍',
                heading: '介绍',
              },
              {
                depth: 2,
                value: '特性',
                heading: '特性',
              },
              {
                depth: 2,
                value: '安装',
                heading: '安装',
              },
              {
                depth: 2,
                value: '使用',
                heading: '使用',
              },
              {
                depth: 2,
                value: '💻 在线体验',
                heading: '-在线体验',
              },
            ],
            title: '介绍',
            group: {
              path: '/guide',
              title: 'Guide',
            },
          },
          title: '介绍 - react-ui-dumi-library',
        },
        {
          path: '/guide/upgrade',
          component:
            require('/Users/yasinyuan/Desktop/react-dumi-library/docs/Guide/upgrade.md')
              .default,
          exact: true,
          meta: {
            filePath: 'docs/Guide/upgrade.md',
            updatedTime: 1698421921792,
            slugs: [
              {
                depth: 2,
                value: 'v2 to v3',
                heading: 'v2-to-v3',
              },
              {
                depth: 2,
                value: '升级建议',
                heading: '升级建议',
              },
              {
                depth: 2,
                value: '全新的 useRequest',
                heading: '全新的-userequest',
              },
              {
                depth: 3,
                value: '详细变更',
                heading: '详细变更',
              },
              {
                depth: 2,
                value: 'SSR 支持',
                heading: 'ssr-支持',
              },
              {
                depth: 2,
                value: 'DOM 类 Hooks 支持 target 动态变化',
                heading: 'dom-类-hooks-支持-target-动态变化',
              },
              {
                depth: 2,
                value: '避免闭包问题',
                heading: '避免闭包问题',
              },
              {
                depth: 2,
                value: '支持严格模式',
                heading: '支持严格模式',
              },
              {
                depth: 2,
                value: '支持 react-refresh（HMR）模式',
                heading: '支持-react-refreshhmr模式',
              },
              {
                depth: 2,
                value: '更多变更',
                heading: '更多变更',
              },
              {
                depth: 3,
                value: '新增 Hooks',
                heading: '新增-hooks',
              },
              {
                depth: 3,
                value: 'Breaking Changes',
                heading: 'breaking-changes',
              },
              {
                depth: 3,
                value: '优化',
                heading: '优化',
              },
              {
                depth: 2,
                value: 'FAQ',
                heading: 'faq',
              },
              {
                depth: 3,
                value: 'useRequest 被删除的能力如何兼容？',
                heading: 'userequest-被删除的能力如何兼容',
              },
            ],
            title: 'v2 to v3',
            group: {
              path: '/guide',
              title: 'Guide',
            },
          },
          title: 'v2 to v3 - react-ui-dumi-library',
        },
        {
          path: '/guide/blog/test',
          component:
            require('/Users/yasinyuan/Desktop/react-dumi-library/docs/Guide/blog/test.md')
              .default,
          exact: true,
          meta: {
            filePath: 'docs/Guide/blog/test.md',
            updatedTime: 1698422261387,
            group: {
              title: '基础',
              order: 1,
              __fallback: true,
              path: '/guide/blog',
            },
            slugs: [
              {
                depth: 1,
                value: '我是测试文档',
                heading: '我是测试文档',
              },
            ],
            title: '我是测试文档',
          },
          title: '我是测试文档 - react-ui-dumi-library',
        },
        {
          path: '/components',
          meta: {},
          exact: true,
          redirect: '/components/button',
        },
        {
          path: '/hooks/use-query/doc',
          meta: {},
          exact: true,
          redirect: '/hooks/use-query/doc/idnex',
        },
        {
          path: '/guide/blog',
          meta: {
            order: 1,
            __fallback: true,
          },
          exact: true,
          redirect: '/guide/blog/test',
        },
      ],
      title: 'react-ui-dumi-library',
      component: (props) => props.children,
    },
  ];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
