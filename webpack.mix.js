const sourceDir = './src';
const destinationDir = './public/';
const projectURL = 'typhoon.test';

const mix = require('laravel-mix');

require('laravel-mix-twig-to-html');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 */

// source ==> production
mix.js(`${sourceDir}/js/global.js`, `${destinationDir}/global.js`);
mix.sass(`${sourceDir}/scss/global.scss`, `${destinationDir}/global.css`, {
  sassOptions: {
    outputStyle: 'compressed',
  },
});

// This is so it works with Zeit. This will not be final production
mix.copy('index.html', 'public/index.html');
mix.copy('public/global.css', 'public/public/global.css');
mix.copy('public/global.js', 'public/public/global.js');

// browsersync
mix.browserSync({
  proxy: projectURL,
  files: [`${destinationDir}/*`, `public/index.html`],
  injectChanges: false,
  browser: 'google chrome',
});

// Sourcemaps workaround
if (!mix.inProduction()) {
  mix.sourceMaps(true, 'source-map');
}

// CSS vender autoprefixes
mix.options({
  postCss: [require('autoprefixer')],
});

// disable build notification on success
mix.disableSuccessNotifications();

// Twig compiling
mix.twigToHtml({
  files: 'src/templates/**/*.{twig,html}',
  fileBase: 'src/templates',
});

// Full API
// mix.js(src, output);
// mix.react(src, output); <-- Identical to mix.js(), but registers React Babel compilation.
// mix.preact(src, output); <-- Identical to mix.js(), but registers Preact compilation.
// mix.coffee(src, output); <-- Identical to mix.js(), but registers CoffeeScript compilation.
// mix.ts(src, output); <-- TypeScript support. Requires tsconfig.json to exist in the same folder as webpack.mix.js
// mix.extract(vendorLibs);
// mix.sass(src, output);
// mix.less(src, output);
// mix.stylus(src, output);
// mix.postCss(src, output, [require('postcss-some-plugin')()]);
// mix.browserSync('my-site.test');
// mix.combine(files, destination);
// mix.babel(files, destination); <-- Identical to mix.combine(), but also includes Babel compilation.
// mix.copy(from, to);
// mix.copyDirectory(fromDir, toDir);
// mix.minify(file);
// mix.sourceMaps(); // Enable sourcemaps
// mix.version(); // Enable versioning.
// mix.disableNotifications();
// mix.setPublicPath('path/to/public');
// mix.setResourceRoot('prefix/for/resource/locators');
// mix.autoload({}); <-- Will be passed to Webpack's ProvidePlugin.
// mix.webpackConfig({}); <-- Override webpack.config.js, without editing the file directly.
// mix.babelConfig({}); <-- Merge extra Babel configuration (plugins, etc.) with Mix's default.
// mix.then(function () {}) <-- Will be triggered each time Webpack finishes building.
// mix.override(function (webpackConfig) {}) <-- Will be triggered once the webpack config object has been fully generated by Mix.
// mix.dump(); <-- Dump the generated webpack config object to the console.
// mix.extend(name, handler) <-- Extend Mix's API with your own components.
// mix.options({
//   extractVueStyles: false, // Extract .vue component styling to file, rather than inline.
//   globalVueStyles: file, // Variables file to be imported in every component.
//   processCssUrls: true, // Process/optimize relative stylesheet url()'s. Set to false, if you don't want them touched.
//   purifyCss: false, // Remove unused CSS selectors.
//   terser: {}, // Terser-specific options. https://github.com/webpack-contrib/terser-webpack-plugin#options
//   postCss: [] // Post-CSS options: https://github.com/postcss/postcss/blob/master/docs/plugins.md
// });
