import CourseInfo from "@/app/componenets/school/CourseInfo";
import Image from "next/image";

const screenshots = [
  {
    path: '/screenshots/2420/',
    alt: '',
    key: 1
  },
  {
    path: '/screenshots/2420/',
    alt: '',
    key: 2
  },
  {
    path: '/screenshots/2420/',
    alt: '',
    key: 3
  },
  {
    path: '/screenshots/2420/',
    alt: '',
    key: 4
  },
  {
    path: '/screenshots/2420/',
    alt: '',
    key: 5
  },
  {
    path: '/screenshots/2420/',
    alt: '',
    key: 6
  },
];

export default function SDEV2420Home() {
  return (
    <div className="flex flex-col justify-center gap-16 pt-20 min-h-screen">
      <CourseInfo
        id="SDEV 2420"
        title="C# Programming II"
        description="This course gives students more experience in intermediate C# programming language and 
        object-oriented programming constructs. During this course, students explore files and stream processing, 
        searching, sorting, data structures, generics and collections, and LINQ."
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