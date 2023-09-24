import React from "react";
import LeftArrowIcon from "@/public/images/left-arrow.svg";
import EditIcon from "@/public/images/edit.svg";
import ProfileImage from "@/public/images/profile.png";
import Image from "next/image";

const ApplicationSetting = () => (
  <div className="md:w-1/2 mb-4">
    <div className="bg-gray-200 p-4">
      <div className="flex justify-between items-center">
        <span className="font-semibold text-black-100 leading-[22px]">
          Application Settings
        </span>
        <Image
          src={EditIcon.src}
          alt="Edit Icon"
          width={18}
          height={18}
          className="h-[18px] w-[18px] cursor-pointer"
        />
      </div>
    </div>

    <div className="bg-white border border-gray-300  text-xs/[17px] p-4">
      <p className="text-gray-400 mb-2">Receive job applications via</p>

      <label className="flex items-center space-x-2 mb-2">
        <input
          id="dashboard-only"
          type="radio"
          name="notification"
          className="form-radio text-green border-green focus:ring-green"
          checked
          readOnly
        />
        <label htmlFor="dashboard-only" className="text-black-100">
          Only on my dashboard
        </label>
      </label>

      <label className="flex items-center space-x-2 mb-4">
        <input
          id="email-dashboard"
          type="radio"
          name="notification"
          className="form-radio text-green border-green focus:ring-green"
          readOnly
        />
        <label htmlFor="email-dashboard" className="text-black-100">
          Email and on my dashboard
        </label>
      </label>

      <p className="mb-3">
        *Please note, this setting will not impact your old job postings
      </p>
    </div>
  </div>
);

export default ApplicationSetting;
