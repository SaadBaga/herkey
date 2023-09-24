import { useState } from "react";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import { updateHomepageData } from "@/store/home-slice";
import { useSelector, useDispatch } from "react-redux";

function App({ children }) {
  const dispatch = useDispatch();
  const { isSidebarVisible } = useSelector((state) => state.home);
  const handleClick = () => {
    dispatch(
      updateHomepageData([
        { key: "isSidebarVisible", value: !isSidebarVisible },
      ])
    );
  };
  return (
    <div
      style={{ flexDirection: "column" }}
      className="layout flex flex-col min-h-screen bg-gray-200"
    >
      <Header toggleSidebar={() => handleClick(!isSidebarVisible)} />
      <div className="md:flex">
        <Sidebar />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
