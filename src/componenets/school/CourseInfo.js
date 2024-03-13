export default function CourseInfo({ id, title, description }) {
  return (
    <div className="flex min-h-screen bg-slate-800 p-8">
      <div className="bg-slate-700 p-8 rounded-lg">
        <div className="flex flex-row gap-4 bg-slate-800 justify-center p-8 mb-12 rounded-lg">
          <div className="text-4xl text-white">{id}</div>
          <div className="text-4xl text-white">{title}</div>
        </div>
        <div className="bg-slate-800 p-8 rounded-lg">
          <div className="text-2xl text-white">{description}</div>
        </div>
      </div>
    </div>
  )
}