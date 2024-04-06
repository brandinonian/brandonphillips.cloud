import CourseInfo from "@/app/componenets/school/CourseInfo";

export default function SDEV2110Home() {

  const projects = [
    {
      name: 'Changing Images',
      link: '',
    },
    {
      name: 'Country Info',
      link: '',
    },
    {
      name: 'Dropdown Menu',
      link: '',
    },
    {
      name: 'Free Advice',
      link: '',
    },
    {
      name: 'Movie Info',
      link: '',
    },
    {
      name: 'Tabbed Content',
      link: '',
    },
    {
      name: 'Ninja Quiz',
      link: '',
    },
    {
      name: 'Final Project',
      link: '/school/SDEV2110/final/index.html',
    },
    {
      name: 'Clock/Calendar',
      link: '',
    },
    {
      name: '',
      link: '',
    },
  ]

  return (
    <div>
      <CourseInfo
        id="SDEV 2110"
        title="JavaScript Programming I"
        description="This JavaScript course exposes students to the modern JavaScript language and the Document Object Model
        (DOM) of web pages. During the course, you will create functional web pages incorporating JavaScript to
        make them interactive and dynamic."
        narrative="Work in progress...the goal is to have my JS projects accessible from this page"
      />
      <div>
        <div className="text-xl text-grey-100">Live Projects</div>
        {projects.map((project) => (
          <div key={project.name}>
            <a href={project.link}>{project.name}</a>
          </div>
        ))}
      </div>
    </div>
  );
}