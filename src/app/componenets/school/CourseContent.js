import Image from "next/image";

export default function CourseContent({ description, leftSRC, leftAlt, leftWidth, rightSRC, rightAlt, rightWidth }) {
  return (
    <div className="flex flex-row bg-grey-300 rounded justify-center py-16 gap-32">
      {description && <div>{description}</div>}
      {/* Alts need real values here, just trying to get this to build for now */}
      {leftSRC && <Image src={leftSRC} alt={leftAlt} width={leftWidth} height={200} />}
      <Image src={rightSRC} alt={rightAlt} width={rightWidth} height={200} />
    </div>
  );
}