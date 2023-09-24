import React from "react";
import HpLogo from "@/public/images/hp.png";
import DashboardIcon from "@/public/images/dashboard.svg";
import JobsIcon from "@/public/images/jobs.svg";
import ApplicationIcon from "@/public/images/profiles.svg";
import FollowersIcon from "@/public/images/followers.svg";
import EnterpriseIcon from "@/public/images/enterprise.svg";
import CollaborationIcon from "@/public/images/collaboration.svg";
import ConversationIcon from "@/public/images/conversation.svg";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useSelector } from "react-redux";
import Image from "next/image";

const SIDEBAR_MENU = [
  {
    title: "Dashboard",
    image: DashboardIcon,
  },
  {
    title: "Jobs",
    image: JobsIcon,
  },
  {
    title: "Applications",
    image: ApplicationIcon,
  },
  {
    title: "Followers",
    image: FollowersIcon,
  },
  {
    title: "My Inventory",
    image: EnterpriseIcon,
  },
  {
    title: "Company Profile",
    image: EnterpriseIcon,
  },
  {
    title: "All Users",
    image: CollaborationIcon,
  },
  {
    title: "My Account",
    image: ConversationIcon,
    isActive: true,
  },
];

const Sidebar = () => {
  const { isSidebarVisible } = useSelector((state) => state.home);

  return (
    <aside className="md:fixed z-20">
      {isSidebarVisible && <WebSidebar />}
      <MobileSidebar />
    </aside>
  );
};

const MobileSidebar = () => (
  <div className="md:hidden w-full bg-white shadow-md z-20">
    <nav className="p-2 text-gray-400">
      <ul className="flex justify-between items-center">
        {SIDEBAR_MENU.slice(-4).map((item, index) => {
          const separator = index > 0 ? <span className="mx-2">|</span> : null;
          return (
            <React.Fragment key={index}>
              {separator}
              <a
                href="#"
                className={`text-xs ${
                  item.isActive ? "text-green" : ""
                } whitespace-nowrap`}
              >
                {item.title}
              </a>
            </React.Fragment>
          );
        })}
      </ul>
    </nav>
  </div>
);

const WebSidebar = () => (
  <div className="hidden md:flex md:flex-col w-64 bg-black-200 top-20 h-screen">
    <div className="p-4 pb-0 flex items-center">
      <Image
        src={HpLogo.src}
        alt="Logo"
        width={48}
        height={48}
        className="h-12 w-12 rounded-full"
      />
      <div className="ml-1">
        <h1 className="font-light text-white text-4xl leading-11">Hello,</h1>
      </div>
    </div>
    <div className="p-4 py-0 flex justify-between items-center">
      <p className="font-light text-white text-2xl leading-7 truncate">
        Hewlett Packard Enterprises
      </p>
      <KeyboardArrowRightIcon sx={{ color: "#99CA3B" }} />
    </div>
    <nav className="mt-6">
      <ul>
        {SIDEBAR_MENU.map((item, index) => (
          <li
            key={index}
            className={`flex items-center space-x-4 p-2 ml-2 ${
              item.isActive ? "border-l-6 border-green bg-black-300" : ""
            } hover:bg-black-300 hover:border-l-6 hover:border-green hover:text-green`}
          >
            <Image
              src={item.image.src}
              alt={item.title}
              width={16}
              height={16}
              className="h-4 w-4"
            />
            <span
              className={`leading-6 ${
                item.isActive ? "text-green" : "text-gray-400"
              } hover:text-green`}
            >
              {item.title}
            </span>
          </li>
        ))}
      </ul>
    </nav>
    <div className="mt-36 p-4 text-xs leading-17 text-green">
      <p className="font-semibold">Contact Us -</p>
      <p className="">Email: admin@jobsforher.com</p>
    </div>
  </div>
);

export default Sidebar;
