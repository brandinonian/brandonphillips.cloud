/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/school/SDEV2110/test',
        destination: '/SDEV2110/test.html',
        permanent: true,
      },
      {
        source: '/school/SDEV2110/final_project',
        destination: '/SDEV2110/final_project/index.html',
        permanent: true,
      },
      {
        source: '/school/SDEV2110/tabbed_content',
        destination: '/SDEV2110/tabbed_content/index.html',
        permanent: true,
      },
      {
        source: '/school/SDEV2110/jsquiz',
        destination: '/SDEV2110/jsquiz/index.html',
        permanent: true,
      },
    ]
  }
};

export default nextConfig;
