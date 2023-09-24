import React from "react";
import LeftArrowIcon from "../../public/images/left-arrow.svg";
import EditIcon from "../../public/images/edit.svg";
import ProfileImage from "../../public/images/profile.png";
import Image from "next/image";

const AccountSetting = () => (
  <div className="md:w-1/2 mb-4">
    <div className="bg-gray-200 p-4">
      <div className="flex justify-between items-center">
        <span className="font-semibold text-black-100 leading-[22px]">
          My Account Settings
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

    <div className="bg-white border border-gray-300 p-4 mb-4 text-sm/[19px] hidden md:block">
      <div className="flex mb-6">
        <div className="flex-grow">
          <div>
            <p className="text-xs/[17px] text-gray-400">Full Name*</p>
            <p>Divya Chatterjee</p>
          </div>
        </div>
        <div className="flex-grow">
          <div className="ml-12">
            <p className="text-xs/[17px] text-gray-400">Designation</p>
            <p>Assistant Manager - HR</p>
          </div>
        </div>
      </div>

      <div className="flex mb-4">
        <div className="flex-grow">
          <div>
            <p className="text-xs/[17px] text-gray-400">Phone / Landline*</p>
            <p>7012248563</p>
          </div>
        </div>
        <div className="flex-grow">
          <div className="ml-8 mt-4">
            <a href="#" className="font-semibold text-blue">
              Change Password
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-white border border-gray-300 p-4 mb-4 text-sm/[19px] md:hidden">
      <div className="mb-6">
        <div className="text-left">
          <p className="text-xs/[17px] text-gray-400">Full Name*</p>
          <p>Divya Chatterjee</p>
        </div>
      </div>
      <div className="mb-6">
        <div className="text-left">
          <p className="text-xs/[17px] text-gray-400">Designation</p>
          <p>Assistant Manager - HR</p>
        </div>
      </div>
      <div className="mb-4">
        <div className="text-left">
          <p className="text-xs/[17px] text-gray-400">Phone / Landline*</p>
          <p>7012248563</p>
        </div>
      </div>
      <div className="text-right">
        <a href="#" className="font-semibold text-blue">
          Change Password
        </a>
      </div>
    </div>
  </div>
);

export default AccountSetting;
