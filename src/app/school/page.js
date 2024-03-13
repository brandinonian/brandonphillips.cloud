export default function SchoolHome() {

  const courses = [
    {
      title: 'JavaScript Programming I',
      link: '/school/SDEV2110',
    },
    {
      title: 'Mobile Development (React Native)',
      link: '/school/SDEV2730',
    },
    {
      title: 'Work in progress...',
      link: '#',
    },
  ]

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="bg-slate-700 p-8 rounded-lg">
        <p className="text-6xl">Davis Technical College</p>

        <div className="flex flex-col gap-4 bg-slate-700 mt-16 p-8 rounded-lg">
          <div className="pb-8 text-2xl text-center">Courses</div>
          {courses.map((course) => (
            <div className="bg-slate-800 rounded-lg p-8">
              <a className="text-xl p-8" href={course.link}>{course.title}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}