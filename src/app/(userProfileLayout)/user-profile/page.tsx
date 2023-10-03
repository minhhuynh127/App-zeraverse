"use client";
import ActivitiesProfile from "../../components/Profile/app.activities";
import RewardsProfile from "../../components/Profile/app.rewards";
import StatusProfile from "../../components/Profile/app.status";
import { useAuthContext } from "../../context/AuthProvider";
const UserProfilePage = () => {
  const { userInfo } = useAuthContext();

  return (
    <div className="mt-28 w-full h-auto flex items-start gap-[18px]">
      <div className="w-[40%] flex flex-col gap-4">
        <StatusProfile info={userInfo} />
        <RewardsProfile info={userInfo} />
      </div>
      <div className="w-[60%]">
        <ActivitiesProfile info={userInfo} />
      </div>
    </div>
  );
};

export default UserProfilePage;
