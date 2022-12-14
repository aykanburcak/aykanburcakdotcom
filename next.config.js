/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate");

module.exports = nextTranslate(
  {
    images: {
      domains: ['localhost', 'res.cloudinary.com'],
    },
    i18n: {
      // These are all the locales you want to support in
      // your application
      locales: ['en-US', 'tr'],
      // This is the default locale you want to be used when visiting
      // a non-locale prefixed path e.g. `/hello`
      defaultLocale: 'tr',
    },
  }
)
