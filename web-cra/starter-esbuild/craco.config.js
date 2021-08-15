const CracoEsbuildPlugin = require('craco-esbuild');

module.exports = {
  plugins: [{ plugin: CracoEsbuildPlugin,
      options: {
        esbuildLoaderOptions: {
          loader: 'tsx', // Set the value to 'tsx' if you use typescript
          target: 'es2015',
        },
        skipEsbuildJest: false, // Optional. Set to true if you want to use babel for jest tests
      }
 }],
};
