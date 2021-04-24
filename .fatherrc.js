const options = {
  // cssModules: true,
  extractCSS: true,
  esm: 'babel',
  cjs: 'babel',
  umd: {
    name: 'my_ui',
    sourcemap: true,
    globals: {
      react: 'React',
      antd: 'antd'
    },
  },
  extraBabelPlugins: [
    ['babel-plugin-import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
  ],
  entry: 'src/index.tsx',
  lessInBabelMode: true,
  runtimeHelpers: true,
  doc: {
    base: '/my_ui',
  },
  autoprefixer: {
    browsers: ['ie>9', 'Safari >= 6'],
  },
};

export default options;