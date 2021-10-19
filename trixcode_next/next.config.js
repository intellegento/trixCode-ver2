const path = require('path')
const withSass = require('@zeit/next-sass');
module.exports = withSass({
/* bydefault config  option Read For More Optios
here https://github.com/vercel/next-plugins/tree/master/packages/next-sass*/
cssModules: true
})
module.exports = {
/* Add Your Scss File Folder Path Here */
sassOptions: {
includePaths: [path.join(__dirname, 'styles')],
},
}

const withSvgr = require("next-svgr");
 
module.exports = withSvgr({
  // your config for other plugins or the general next.js here...
});

const withImages = require('next-images')
module.exports = withImages({
  exclude: path.resolve(__dirname, 'src/images/'),
  webpack(config, options) {
    return config
  }
})