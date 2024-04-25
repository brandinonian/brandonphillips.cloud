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
      {
        source: '/school/SDEV2110/changing_images',
        destination: '/SDEV2110/changing_images/index.html',
        permanent: true,
      },
      {
        source: '/school/SDEV2110/dropdown_menu',
        destination: '/SDEV2110/dropdown_menu/index.html',
        permanent: true,
      },
      {
        source: '/school/SDEV2110/free_advice',
        destination: '/SDEV2110/free_advice/index.html',
        permanent: true,
      },
      {
        source: '/school/SDEV2110/movie_info',
        destination: '/SDEV2110/movie_info/index.html',
        permanent: true,
      },
    ]
  }
};

export default nextConfig;
