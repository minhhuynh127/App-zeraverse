import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const CategoryItem = () => {
  const [dataCategory, setData] = useState<any[]>([]);
  useEffect(() => {
    fetch(
      `https://user-api.zeraverse.io/api/v1/game/categories?page=1&limit=40`
    )
      .then((response) => {
        // Check if the response status is OK (status code 200)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // Parse the JSON response
        return response.json();
      })
      .then((categories) => {
        setData(categories.data);
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error:", error);
      });
  }, []);

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
        "w-[50%]",
        "rounded-bl-[10px]",
        "h-full"
      );
      item.children[0].classList.add("w-full", "rounded-tr-[10px]");
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemRef.current]);
  if (dataCategory === null) {
    return <div className="text-[40px] text-red-400">Loading...</div>;
  }
  return (
    <div
      ref={parentRef}
      className="w-full grid grid-cols-11 grid-flow-dense gap-4"
    >
      {dataCategory?.map((cate, index) => (
        <div
          key={index}
          className="flex justify-center items-center bg-white rounded-[10px] col-span-2 gap-2 overflow-hidden"
        >
          <div className="w-[50%] h-full rounded-tl-[10px] rounded-bl-[10px]">
            <Image
              ref={imageRef}
              width={500}
              height={500}
              src={cate?.thumbnail}
              alt="catePicture"
              className={`w-full h-full ${index}`}
            />
          </div>

          <span className="text-violet-900 text-base font-semibold py-2 block w-full text-center">
            {cate?.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CategoryItem;
