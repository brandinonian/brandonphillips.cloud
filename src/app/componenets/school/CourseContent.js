import Image from "next/image";

export default function CourseContent({ description, leftSRC, rightSRC }) {
  return (
    <div className="flex flex-row justify-center gap-32">
      {description && <div>{description}</div>}
      {/* Alts need real values here, just trying to get this to build for now */}
      {leftSRC && <Image src={leftSRC} alt="Content Image" width={300} height={200} />}
      <Image src={rightSRC} alt="Content Image" width={300} height={200} />
    </div>
  );
}