import Link from "next/link";

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
        <div className="flex flex-col gap-6 mt-16 p-8 rounded-lg">
          <div className="pb-8 text-2xl text-center">Courses</div>
          {courses.map((course) => (
            <Link href={course.link}>
              <div key={course.id} className="bg-blue-400 rounded-lg flex items-center justify-center shadow-lg p-8 hover:bg-blue-300">
                {course.title}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}