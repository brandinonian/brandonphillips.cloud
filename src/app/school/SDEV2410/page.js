import CourseContent from "@/app/componenets/school/CourseContent";
import CourseInfo from "@/app/componenets/school/CourseInfo";

const screenshots = [
  {
    rightSRC: '/screenshots/2410/M5Competency.png',
    rightAlt: 'Module 5 competency project',
    rightWidth: 600,
    key: 1
  },
  {
    rightSRC: '/screenshots/2410/M4Competency.png',
    rightAlt: 'Module 4 competency project',
    rightWidth: 600,
    key: 2
  },
  {
    rightSRC: '/screenshots/2410/M3Competency.png',
    rightAlt: 'Module 3 competency project',
    rightWidth: 600,
    key: 3
  },
  // {
  //   path: '/screenshots/2410/',
  //   alt: '',
  //   key: 4
  // },
  // {
  //   path: '/screenshots/2410/',
  //   alt: '',
  //   key: 5
  // },
  // {
  //   path: '/screenshots/2410/',
  //   alt: '',
  //   key: 6
  // },
];

export default function SDEV2410Home() {
  return (
    <div className="flex flex-col justify-center gap-16 pt-20 min-h-screen">
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

      <div className="flex flex-col gap-10 justify-center">
        {screenshots.map(screenshot => (
          <CourseContent
            key={screenshot.key}
            rightSRC={screenshot.rightSRC}
            rightAlt={screenshot.rightAlt}
            rightWidth={screenshot.rightWidth}
          />))
        }
      </div>

    </div>
  );
}