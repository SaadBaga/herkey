import React, { useState } from "react";
import LeftArrowIcon from "@/public/images/left-arrow.svg";
import EditIcon from "@/public/images/edit.svg";
import ProfileImage from "@/public/images/profile.png";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const ProfileDetails = () => {
  const [isProfileEdit, setIsProfileEdit] = useState(false);
  const [designationValue, setDesignationValue] = useState(
    "Assistant Manager - HR"
  );
  const [companyValue, setCompanyValue] = useState("XXY Company Name");
  const [aboutValue, setAboutValue] = useState(
    "Microsoft enables digital transformation for the era of an intelligent cloud and an intelligent edge. Its mission is to empower every person and every organization on the planet to achieve more. Microsoft set up its India operations in 1990. Microsoft in India offers its global cloud services from local data centers to accelerate digital transformation across Indian start-ups, businesses, and government agencies."
  );

  const onSave = () => {
    setIsProfileEdit(false);
  };

  return (
    <div className="md:p-4">
      <div className="bg-gray-200 p-4">
        <div className="flex justify-between items-center">
          <span className="font-semibold text-black-100 leading-[22px]">
            My Profile
          </span>
          <Image
            onClick={() => setIsProfileEdit(!isProfileEdit)}
            src={EditIcon.src}
            alt="Edit Icon"
            width={18}
            height={18}
            className="h-[18px] w-[18px] cursor-pointer"
          />
        </div>
      </div>

      <div className="bg-white border border-gray-300 p-4 mb-4">
        <div className="flex items-center mb-4">
          <div className="relative h-[76px] w-[76px] md:h-[118px] md:w-[118px] mr-4">
            <div className="rounded-full overflow-hidden border border-gray-800 h-[76px] w-[76px] md:h-[118px] md:w-[118px]">
              <Image
                src={ProfileImage.src}
                alt="Profile Pic"
                className="object-cover"
                height={118}
                width={118}
              />
            </div>
            <div className="absolute right-0 bottom-0 p-2 border bg-white rounded-full cursor-pointer">
              <Image
                src={EditIcon.src}
                alt="Edit Icon"
                width={11}
                height={11}
                className="h-[11px] w-[11px] md:h-[18px] md:w-[18px]"
              />
            </div>
          </div>
          <div className="flex flex-col text-sm/[19px] text-black-200">
            <p className="font-semibold text-[22px]/[30px] whitespace-nowrap">
              Divya Chatterjee
            </p>

            {isProfileEdit ? (
              <TextField
                className="my-2"
                value={designationValue}
                id="outlined-basic"
                noValidate
                autoComplete="off"
                label="Designation"
                variant="outlined"
                onChange={(e) => setDesignationValue(e.target.value)}
              />
            ) : (
              <>
                <p className="text-xs/[17px] text-gray-400 mt-3">Designation</p>
                <p className="mb-3">{designationValue}</p>
              </>
            )}

            {isProfileEdit ? (
              <TextField
                className="my-2"
                value={companyValue}
                id="outlined-basic"
                noValidate
                autoComplete="off"
                label="Company Name"
                variant="outlined"
                onChange={(e) => setCompanyValue(e.target.value)}
              />
            ) : (
              <>
                <p className="text-xs/[17px] text-gray-400">Company Name</p>
                <p>{companyValue}</p>
              </>
            )}
          </div>
        </div>

        <div className="mb-4 text-left">
          <p className="text-xs/[17px] text-gray-400 mb-1">About Me</p>
          <p className="text-sm/[19px] text-black-200">{aboutValue}</p>
        </div>
        {isProfileEdit ? (
          <button
            onClick={() => onSave()}
            className="bg-green w-32 h-12 rounded"
          >
            Save
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ProfileDetails;
