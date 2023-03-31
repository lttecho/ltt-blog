const config = {
  mode: 'site',
  title: `Li`,
  description: 'Blog',
  base: '/ltt-blog/',
  publicPath: '/ltt-blog/',
  favicon: './favicon.ico',
  logo: 'http://img.mrsingsing.com/node-guidebook-favicon.svg',
  exportStatic: {},
  // dynamicImport: {},
  theme: {
    '@c-primary': '#3d8e96',
  },
  navs: [
    null,
    {
      title: 'Github',
      path: 'https://github.com/tsejx/node-guidebook',
    },
  ],
};

if (process.env.NODE_ENV !== 'development') {
  config.ssr = {};
}

export default config;
