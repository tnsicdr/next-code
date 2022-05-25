const withMarkdoc = require('@markdoc/next.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = withMarkdoc(nextConfig)({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md'],
});
