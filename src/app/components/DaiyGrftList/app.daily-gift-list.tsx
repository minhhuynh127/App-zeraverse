import React from "react";
import DailygiftItem from "../DailyGiftItem/app.daily-gift-item";

const DailyGiftList = () => {
  return (
    <>
      <DailygiftItem day="Day 1" count="+1" className="" />
      <DailygiftItem day="Day 2" count="+2" className="" />
      <DailygiftItem day="Day 3" count="+3" className="" />
      <DailygiftItem day="Day 4" count="+5" className="" />
      <DailygiftItem day="Day 5" count="+6" className="" />
      <DailygiftItem day="Day 6" count="+7" className="" />
      <DailygiftItem day="Day 7" count="+10" className="flex-1 mb-6" />
    </>
  );
};

export default DailyGiftList;
