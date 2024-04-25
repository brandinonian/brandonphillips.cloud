import CourseContent from "@/app/componenets/school/CourseContent";
import CourseInfo from "@/app/componenets/school/CourseInfo";

const screenshots = [
  {
    leftPath: '/screenshots/2730/final_login.png',
    alt: 'Final project login screen',
    rightPath: '/screenshots/2730/final_add.png',
    key: 1
  },
  {
    leftPath: '/screenshots/2730/final_home.png',
    alt: 'Final project login screen',
    rightPath: '/screenshots/2730/final_details.png',
    key: 2
  },
  {
    leftPath: '/screenshots/2730/fav_places.png',
    alt: 'Final project login screen',
    rightPath: '/screenshots/2730/fast_food.png',
    key: 3
  },
];

export default function SDEV2730Home() {
  return (
    <div className="flex flex-col justify-center gap-16 p-48 pt-20 min-h-screen bg-grey-400">
      <CourseInfo
        id="SDEV 2730"
        title="Mobile Development"
        description="This course introduces students to programming technologies, design and development related to mobile applications.
        Topics include accessing device capabilities, industry standards, operating systems, and programming for mobile applications.
        Students will work on multiple projects producing professional-quality mobile applications."
        narrative="Work in progress..."
      />

      <div className="flex flex-col gap-32 justify-center">
        {
          screenshots.map(screenshot => (
            <CourseContent
              key={screenshot.key}
              leftSRC={screenshot.leftPath}
              rightSRC={screenshot.rightPath}
            />
          ))
        }
      </div>

    </div>
  );
}