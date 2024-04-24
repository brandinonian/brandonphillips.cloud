import CourseInfo from "@/app/componenets/school/CourseInfo";
import Image from "next/image";

const screenshots = [
  {
    path: '/screenshots/2730/final_login.png',
    alt: 'Final project login screen',
    key: 1
  },
  {
    path: '/screenshots/2730/final_add.png',
    alt: 'Final project add new hike screen',
    key: 2
  },
  {
    path: '/screenshots/2730/final_home.png',
    alt: 'Home screen showing list of hikes',
    key: 3
  },
  {
    path: '/screenshots/2730/final_details.png',
    alt: 'Hike details page',
    key: 4
  },
  {
    path: '/screenshots/2730/fav_places.png',
    alt: 'Favorite places screenshot',
    key: 5
  },
  {
    path: '/screenshots/2730/fast_food.png',
    alt: 'Fast food order app',
    key: 6
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

      <div className="flex flex-row flex-wrap gap-10 justify-center">
        {screenshots.map(screenshot => (
          <Image
            key={screenshot.key}
            src={screenshot.path}
            alt={screenshot.alt}
            height={500}
            width={300}
            className="rounded"
          />))
        }
      </div>

    </div>
  );
}