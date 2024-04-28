import CourseInfo from "@/app/componenets/school/CourseInfo";
import Image from "next/image";

const screenshots = [
  {
    path: '/screenshots/2521/',
    alt: '',
    key: 1
  },
  {
    path: '/screenshots/2521/',
    alt: '',
    key: 2
  },
  {
    path: '/screenshots/2521/',
    alt: '',
    key: 3
  },
  {
    path: '/screenshots/2521/',
    alt: '',
    key: 4
  },
  {
    path: '/screenshots/2521/',
    alt: '',
    key: 5
  },
  {
    path: '/screenshots/2521/',
    alt: '',
    key: 6
  },
];

export default function SDEV2521Home() {
  return (
    <div className="flex flex-col justify-center gap-16 pt-20 min-h-screen">
      <CourseInfo
        id="SDEV 2521"
        title="PHP and MySQL"
        description="This course combines the elements of software development (programming), web 
        development, and relational database management to create and manage dynamic web-based content. 
        Students will develop and implement PHP programs using the open-source MySQL relational database, 
        structured query language (SQL), and PHP5 to create dynamic web pages. Topics include: form objects, 
        database connections, and PHP server-side programming."
        narrative="Work in progress..."
      />

      <div className="flex flex-row flex-wrap gap-10 justify-center">
        {screenshots.map(screenshot => (
          <Image
            key={screenshot.key}
            src={screenshot.path}
            alt={screenshot.alt}
            height={500}
            width={300}
          />))
        }
      </div>

    </div>
  );
}