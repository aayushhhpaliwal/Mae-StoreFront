// const { withFramworkConfig } = require('./framework/common/config')


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

module.exports = {
  i18n:{
      locales:["en-US", "es"], 
      defaultLocales:"en-US"
  }
}

console.log("next.config.js", JSON.stringify(module.exports, null))
