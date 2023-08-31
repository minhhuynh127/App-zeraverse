import iconBack from "@/public/left-white.png";
import iconRight from "@/public/right.png";
import Image from "next/image";
import Link from "next/link";
import {
  purchaseHistoryAvatar,
  purchaseHistoryCover,
} from "@/src/app/(userProfileLayout)/user-profile/data/images";
import priceImage from "@/public/images/shops/price.png";
import AvatarPunchase from "@/src/app/components/PunchaseHistory/AvatarPunchase/app.avatar-punchase";
import CoverPunchase from "@/src/app/components/PunchaseHistory/CoverPunchase/app.cover-punchase";

const PurchaseHistoryPage = () => {
  return (
    <div className="flex flex-col justify-between gap-6 w-full h-full">
      <div className="mt-28 w-full h-auto bg-black/50 rounded-[10px] flex flex-col justify-center items-center gap-8">
        <div className="w-full h-[74px] px-[20px] py-0 bg-pink-500 rounded-tl-[10px] rounded-tr-[10px]  flex justify-between items-center">
          <Link
            href={"/user-profile"}
            className="flex justify-center items-center text-white gap-[5px] w-[41px] h-[22px]"
          >
            <div>
              <Image src={iconBack} alt="" className="w-[5px] h-[10px]" />
            </div>
            Back
          </Link>
          <h3 className="flex-1 text-center font-nunito font-bold text-[32px] leading-[43.65px] text-white">
            Purchase history
          </h3>
        </div>

        <div className="w-full px-7 pb-[500px] flex flex-col gap-10">
          <AvatarPunchase itemsPerPage={8} />
          <CoverPunchase itemsPerPage={8} />
        </div>
      </div>
    </div>
  );
};

export default PurchaseHistoryPage;
