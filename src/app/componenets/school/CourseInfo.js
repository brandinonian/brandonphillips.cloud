export default function CourseInfo({ id, title, description, narrative }) {
  return (
    <div className="flex p-8">
      <div>
        <div className="flex flex-row gap-6 justify-center p-8 mb-12 rounded-lg">
          <div className="text-6xl text-grey-100">{id}</div>
          <div className="text-6xl text-grey-100">{title}</div>
        </div>
        <div className="flex flex-col gap-4 p-8">
          <div className="text-2xl font-bold text-grey-100">Course Description:</div>
          <div className="text-xl text-grey-100">{description}</div>
        </div>
        <div className="p-8">
          <div className="text-xl text-grey-100">{narrative}</div>
        </div>
      </div>
    </div>
  );
}