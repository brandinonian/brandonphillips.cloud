import CourseInfo from "@/app/componenets/school/CourseInfo";
import Image from "next/image";

const screenshots = [
  {
    path: '/screenshots/2410/',
    alt: '',
    key: 1
  },
  {
    path: '/screenshots/2410/',
    alt: '',
    key: 2
  },
  {
    path: '/screenshots/2410/',
    alt: '',
    key: 3
  },
  {
    path: '/screenshots/2410/',
    alt: '',
    key: 4
  },
  {
    path: '/screenshots/2410/',
    alt: '',
    key: 5
  },
  {
    path: '/screenshots/2410/',
    alt: '',
    key: 6
  },
];

export default function SDEV2410Home() {
  return (
    <div className="flex flex-col justify-center gap-16 p-48 pt-20 min-h-screen bg-blue-500">
      <CourseInfo
        id="SDEV 2410"
        title="C# Programming I"
        description="This course introduces students to the C# programming language and the .NET platform 
        using the Visual Studio development environment. Students will practice critical thinking, problem 
        solving skills, and basic testing processes. During this course, students will explore selection and 
        repetition controls, arrays, classes and methods, inheritance, polymorphism, exception handling, and 
        GUI programming."
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