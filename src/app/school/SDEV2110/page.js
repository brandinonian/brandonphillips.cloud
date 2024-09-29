import CourseInfo from "@/app/componenets/school/CourseInfo";
import Link from "next/link";

export default function SDEV2110Home() {

  const projects = [
    {
      name: 'Changing Images',
      link: '/school/SDEV2110/changing_images',
    },
    // {
    //   name: 'Country Info',
    //   link: '',
    // },
    {
      name: 'Dropdown Menu',
      link: '/school/SDEV2110/dropdown_menu',
    },
    {
      name: 'Free Advice',
      link: '/school/SDEV2110/free_advice',
    },
    // {
    //   name: 'Movie Info',
    //   link: '/school/SDEV2110/movie_info',
    // },
    {
      name: 'Tabbed Content',
      link: '/school/SDEV2110/tabbed_content',
    },
    {
      name: 'Ninja Quiz',
      link: '/school/SDEV2110/jsquiz',
    },
    {
      name: 'Final Project',
      link: '/school/SDEV2110/final_project',
    },
    // {
    //   name: 'Clock/Calendar',
    //   link: '',
    // },
  ]

  return (
    <div className="flex flex-col justify-center items-center pb-8">
      <CourseInfo
        id="SDEV 2110"
        title="JavaScript Programming I"
        description="This JavaScript course exposes students to the modern JavaScript language and the Document Object Model
        (DOM) of web pages. During the course, you will create functional web pages incorporating JavaScript to
        make them interactive and dynamic."
        narrative="Work in progress...the goal is to have my JS projects accessible from this page"
      />
      <div className="flex flex-col text-center gap-8">
        <div className="py-16 text-5xl text-grey-200">Live Projects</div>
        {projects.map((project) => (
          <LinkButton
            key={project.name}
            link={project.link}
            text={project.name}
          />
        ))}
      </div>
    </div>
  );
}

function LinkButton({ link, text }) {
  return (
    <div className="p-4">
      <Link href={link}>
        {text}
      </Link>
    </div>
  )
}