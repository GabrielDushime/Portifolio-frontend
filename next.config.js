/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone', 
  images: {
    domains: [],
  },
  transpilePackages: [
    'antd',
    '@ant-design',
    '@rc-component',
    'rc-util',
    'rc-pagination',
    'rc-picker',
    'rc-field-form',
    'rc-input',
    'rc-trigger',
    'rc-resize-observer',
    'rc-virtual-list',
    'rc-overflow',
  ],
  experimental: {
    esmExternals: true,
  },
}

module.exports = nextConfig;