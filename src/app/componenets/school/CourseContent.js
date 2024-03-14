import Image from "next/image";

export default function CourseContent({ description, leftSRC, rightSRC }) {
  return (
    <div className="flex flex-row justify-center gap-8">
      {description && <div>{description}</div>}
      {leftSRC && <Image src={leftSRC} />}
      <Image src={rightSRC} />
    </div>
  );
}