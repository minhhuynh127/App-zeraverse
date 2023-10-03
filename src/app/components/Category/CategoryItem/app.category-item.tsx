"use client";
import { data } from "@/src/app/(OnlyTopBar)/user/achievements/images";
import { useAuthContext } from "@/src/app/context/AuthProvider";
import { getGameByCategorySlug } from "@/src/app/services/game-service";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const CategoryItem = () => {
  const { dataCategories }: { dataCategories: Array<any> } = useAuthContext();

  const parentRef = useRef<HTMLDivElement | null>(null);
  const itemRef = useRef<HTMLDivElement[]>([]);
  const imageRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    if (parentRef.current) {
      itemRef.current = Array.from(
        parentRef.current.children
      ) as HTMLDivElement[];
    }

    const itemLargeIndex = [0, 1, 2, 3, 4];

    const itemLargeList = itemRef.current.filter((item, index) => {
      // console.log(itemLargeIndex.includes(index));
      return itemLargeIndex.includes(index);
    });
    const itemCategoryImage = itemRef.current.filter((item, index) => {
      // console.log(itemLargeIndex.includes(index));
      return itemLargeIndex.includes(index);
    });

    itemLargeList.forEach((item) => {
      item.classList.remove("rounded-bl-[10px]");
      item.classList.add("row-span-2", "flex-col", "rounded-tr-[10px]");
    });
    itemCategoryImage.forEach((item) => {
      // console.log(item.children[0]);

      item.children[0].classList.remove(
        "w-[94px]",
        "rounded-bl-[10px]",
        "h-[94px]",
        "row-span-1"
      );
      item.children[0].classList.add("w-full", "h-full", "rounded-tr-[10px]");
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemRef.current]);
  // console.log("data", dataCategories);
  return (
    <div
      ref={parentRef}
      className="w-full grid grid-cols-11 grid-flow-dense gap-4"
    >
      {dataCategories?.map((cate, index) => (
        <Link
          href={`/game/categories/${cate?.slug}`}
          key={index}
          className="flex justify-center items-center bg-white rounded-[10px] col-span-2 row-span-1 gap-2 overflow-hidden cursor-pointer max-h-[204px]"
        >
          <div className="w-[94px] h-[94px] rounded-tl-[10px] rounded-bl-[10px] overflow-hidden">
            <Image
              priority={true}
              ref={imageRef}
              width={500}
              height={500}
              src={cate?.thumbnail}
              alt="catePicture"
              className={`${index} object-fill hover:scale-110 transition-all`}
            />
          </div>

          <span className="text-violet-900 text-base font-semibold py-2 block w-full text-center flex-1">
            {cate?.label}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default CategoryItem;
