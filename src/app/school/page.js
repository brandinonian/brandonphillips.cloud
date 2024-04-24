import Image from "next/image";
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
      title: 'C# Programming I',
      link: '/school/SDEV2410',
      id: 3,
    },
    {
      title: 'C# Programming II',
      link: '/school/SDEV2420',
      id: 4,
    },
    {
      title: 'PHP and MySQL',
      link: '/school/SDEV2521',
      id: 5,
    },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="p-8 pt-20">
        <div className="flex flex-col gap-8 items-center justify-center">
          <p className="text-6xl">Davis Technical College</p>
          <p className="text-xl">550 East 300 South<br></br>Kaysville, UT 84037</p>
        </div>
        <Image
          src="/images/dtc.jpg"
          alt="Davis Tech exterior photo"
          width={850}
          height={600}
          className="my-20 rounded-md"
        />
        <div className="flex flex-col gap-6 mt-16 p-8 rounded-lg">
          <div className="pb-8 text-4xl text-center">Courses</div>
          <div className="w-full h-1 bg-grey-100"></div>
          {courses.map((course) => (
            <Link key={course.id} href={course.link}>
              <div className="bg-blue-400 items-center justify-center rounded flex hover:bg-blue-300">
                <div className="text-xl p-8">
                  {course.title}
                </div>
              </div>
            </Link>
          ))}
          <div className="w-full h-1 bg-grey-100"></div>
        </div>
      </div>
    </div>
  );
}