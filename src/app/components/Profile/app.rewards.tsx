import React, { useEffect, useState } from "react";
import { getUserReward } from "../../services/user-service";
import {
  abbreviateNumber,
  getBetweenTwoDate,
  toUpperCaseFirstLetter,
} from "../../utils/helper";

const RewardsProfile = ({ info }: { info: object | any }) => {
  const [rewards, setRewards] = useState<any[]>([]);
  const getRewardUser = async () => {
    try {
      if (info) {
        const res = await getUserReward(info?.username);
        setRewards(res?.data?.rows);
      }
    } catch (e) {
      throw e;
    }
  };
  useEffect(() => {
    if (info.username) {
      getRewardUser();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [info.username]);

  return (
    <div className="w-full max-h-[600px] pb-10 bg-black/50 rounded-[20px] overflow-hidden flex flex-col justify-between items-center">
      <div className="w-full min-h-[75px] bg-pink-500 pl-4 flex justify-start items-center">
        <h3 className="font-nunito text-[28px] font-bold text-white ">
          Rewards
        </h3>
      </div>
      <div className="w-full h-full px-4 pt-4 text-white text-[20px] pl-[28px] pb-[108px] flex flex-col gap-[35px] overflow-y-scroll hide-scrollbar">
        {rewards?.length > 0 ? (
          <div className="px-8">
            {rewards.map((item, index) => (
              <div key={index} className="mt-[34px] ">
                <div className="w-full">
                  {item?.type?.includes("BUY_AVATAR") ||
                  item?.type?.includes("BUY_COVER_PAGE") ||
                  item?.type?.includes("BUY_TIME") ? (
                    <span>Spend </span>
                  ) : (
                    <span>Earn </span>
                  )}
                  <span>
                    &nbsp;{abbreviateNumber(+item?.zera_amount)}&nbsp;
                  </span>

                  <span>ZERA from</span>
                  <span>
                    {" "}
                    {toUpperCaseFirstLetter(item?.type?.replaceAll("_", " "))}
                  </span>
                </div>
                <div className="opacity-60 text-base mt-1">
                  {getBetweenTwoDate(item?.created_at)}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>No data</div>
        )}
      </div>
    </div>
  );
};

export default RewardsProfile;
