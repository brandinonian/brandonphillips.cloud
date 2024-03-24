import CourseContent from "@/app/componenets/school/CourseContent";
import CourseInfo from "@/app/componenets/school/CourseInfo";
import Image from "next/image";

const screenshots = [
  {
    path: 'screenshots/2730/final_login.png',
    alt: 'Final project login screen',
  },
  {
    path: 'screenshots/2730/final_add.png',
    alt: 'Final project add new hike screen',
  },
  {
    path: 'screenshots/2730/final_home.png',
    alt: 'Home screen showing list of hikes',
  },
  {
    path: 'screenshots/2730/final_details.png',
    alt: 'Hike details page',
  },
  {
    path: 'screenshots/2730/fav_places.png',
    alt: 'Favorite places screenshot',
  },
  {
    path: 'screenshots/2730/fast_food.png',
    alt: 'Fast food order app',
  },
  {
    path: 'screenshots/2730/',
    alt: '',
  },
]

export default function SDEV2730Home() {
  return (
    <div className="flex flex-col gap-32 pb-64 min-h-screen bg-blue-500">
      <CourseInfo
        id="SDEV 2730"
        title="Mobile Development"
        description="This course introduces students to programming technologies, design and development related to mobile applications.
        Topics include accessing device capabilities, industry standards, operating systems, and programming for mobile applications.
        Students will work on multiple projects producing professional-quality mobile applications."
        narrative="Work in progress..."
      />

      <div>
        {screenshots.map((screenshot) => {
          <Image src={screenshot.path} alt={screenshot.alt} />
        })}
      </div>

    </div>
  );
}