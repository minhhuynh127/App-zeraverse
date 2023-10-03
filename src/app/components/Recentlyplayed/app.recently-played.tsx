import Image from "next/image";
import { useAuthContext } from "../../context/AuthProvider";
const RecentlyPlayed = () => {
  const { dataRecentPlayed } = useAuthContext();
  return (
    <div className="w-full overflow-x-auto btn-list">
      <div className="w-fit flex gap-4 items-center overflow-hidden">
        {dataRecentPlayed?.length > 0 &&
          dataRecentPlayed?.map((item: any, index: number) => (
            <div
              key={index}
              className="w-[94px] h-[94px] rounded-[10px] group relative cursor-pointer"
            >
              {item?.thumbnail && (
                <Image
                  priority={true}
                  key={index}
                  src={item?.thumbnail}
                  width={500}
                  height={500}
                  alt=""
                  className="rounded-[10px] w-full h-full object-cover transition-all group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 justify-center items-end px-[8px] pb-[2px] hidden group-hover:flex transition-all">
                <span className="text-white font-bold text-base whitespace-nowrap truncate ">
                  {item?.title}
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RecentlyPlayed;
