import Link from "next/link";
const TrendingCategory = () => {
  return (
    <div className="bg-trending max-w-full py-4 px-12 flex flex-col items-start gap-3 mt-[176px]">
      <div className="flex gap-1 text-white font-lato font-bold text-[10px] leading-4">
        <Link href={"/"}>Home</Link>
        <span>/</span>
        <span>.io Games</span>
      </div>
      <h3 className="font-lato font-bold text-[28px] leading-[39.2px] text-white">
        .io Games
      </h3>
      <p className="font-lato font-normal text-sm leading-[22.4px] text-white mb-[150px]">
        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
        Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
        mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
        tellus. Nullam quis. Lorem ipsum dolor sit amet consectetur adipiscing
        elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
        sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
        vitae mattis tellus. Nullam quis.{" "}
      </p>
    </div>
  );
};

export default TrendingCategory;
