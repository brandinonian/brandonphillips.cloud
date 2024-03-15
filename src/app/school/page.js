export default function SchoolHome() {

  const courses = [
    {
      title: 'JavaScript Programming I',
      link: '/school/SDEV2110',
      id: 1,
    },
    {
      title: 'Mobile Development (React Native)',
      link: '/school/SDEV2730',
      id: 2,
    },
    {
      title: 'Work in progress...',
      link: '#',
      id: 3,
    },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="p-8">
        <p className="text-6xl">Davis Technical College</p>
        <div className="flex flex-col gap-6 bg-blue-400 mt-16 p-8 rounded-lg">
          <div className="pb-8 text-2xl text-center">Courses</div>
          {courses.map((course) => (
            <div key={course.id} className="bg-blue-300 rounded-lg shadow-lg shadow-white p-8 hover:bg-blue-200">
              <a className="text-xl p-8" href={course.link}>{course.title}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}