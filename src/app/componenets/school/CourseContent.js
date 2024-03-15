import Image from "next/image";

export default function CourseContent({ description, leftSRC, rightSRC }) {
  return (
    <div className="flex flex-row justify-center gap-8">
      {description && <div>{description}</div>}
      {/* Alts need real values here, just trying to get this to build for now */}
      {leftSRC && <Image src={leftSRC} alt="Content Image"/>}
      <Image src={rightSRC} alt="Content Image" />
    </div>
  );
}