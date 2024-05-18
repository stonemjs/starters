// Stone.js Configuration Namespace
// Define the configuration options for Stone.js below.
export default {

  // Build Configuration Namespace
  // Configure modules here to build and load automatically.
  autoload: {

    // Modules Pattern Used at Build Time
    // This pattern is used to transpile and bundle the application code.
    // It is also used to load transpiled modules at runtime.
    modules: {
      app: 'app/**/*.mjs',
      options: 'config/*.mjs',
      commands: 'commands/*.mjs'
    },

    // Modules to Exclude from Final Bundle
    // Generally, these are development and CLI modules.
    exclude: ['commands']
  },

  // Dotenv Files Options
  dotenv: {
    // Rollup Plugin-Replace Options
    // For more details, see: https://www.npmjs.com/package/@rollup/plugin-replace#options
    replace: {
      preventAssignment: true
    },

    // Dotenv and dotenv-expand options.
    // For more details, see: https://www.npmjs.com/package/dotenv#options
    // For more details, see: https://www.npmjs.com/package/dotenv-expand#options
    options: {
      debug: false,
      expand: true,
      override: false,
      ignoreProcessEnv: false
    },

    // Set Private .env Files Here
    // These files will not be embedded in the final bundle.
    private: {
      path: ['.env']
    },

    // Set Public .env Files Here
    // These files will be embedded in the final bundle.
    public: {
      override: true,
      path: ['.env.public']
    }
  }
}