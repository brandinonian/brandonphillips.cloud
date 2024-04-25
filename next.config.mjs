/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/school/SDEV2110/test',
        destination: '/SDEV2110/test.html',
        permanent: true,
      },
      // {
      //   source: '',
      //   destination: '',
      //   permanent: true,
      // },
      // {
      //   source: '',
      //   destination: '',
      //   permanent: true,
      // },
      // {
      //   source: '',
      //   destination: '',
      //   permanent: true,
      // },
    ]
  }
};

export default nextConfig;
