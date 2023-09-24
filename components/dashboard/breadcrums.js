import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "next/link";

const BreadcrumbDashboard = () => (
  <Breadcrumbs
    className="text-xs mb-4 hidden md:block"
    separator="|"
    aria-label="breadcrumb"
  >
    <Link underline="hover" className="text-gray-700" href="/">
      Dashboard
    </Link>
    <Link underline="hover" className="text-blue font-semibold" href="#">
      My Account
    </Link>
  </Breadcrumbs>
);

export default BreadcrumbDashboard;
