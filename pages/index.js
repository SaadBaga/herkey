import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import LeftArrowIcon from "../public/images/left-arrow.svg";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import BreadcrumbDashboard from "../components/dashboard/breadcrums";
import ProfileDetails from "../components/dashboard/profiledetails";
import AccountSetting from "../components/dashboard/accountsetting";
import ApplicationSetting from "../components/dashboard/applicationSetting";
import Image from "next/image";

const Dashboard = () => {
  const { isSidebarVisible } = useSelector((state) => state.home);

  return (
    <main
      className={`flex-1 p-8 ml-0 md:ml-${
        isSidebarVisible ? "60" : "0"
      } md:mt-0 mt-2`}
    >
      <BreadcrumbDashboard />
      <div className="bg-white shadow-lg">
        <div className="border-b border-gray-300 p-4">
          <div className="flex items-center">
            <Image
              src={LeftArrowIcon.src}
              alt="Icon"
              width={18}
              height={18}
              className="h-[18px] w-[18px] mr-4"
            />
            <span className="text-xs/[19px] md:text-base font-semibold text-black-100">
              My Account
            </span>
          </div>
        </div>
        <div className="md:p-4">
          <ProfileDetails />
          <div className="md:flex md:space-x-4">
            <AccountSetting />
            <ApplicationSetting />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
