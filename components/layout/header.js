import Logo from "../../public/images/logo.png";
import ForeverIcon from "../../public/images/forever.png";
import MenuIcon from "@mui/icons-material/Menu";
import { Grid } from "@mui/material";
import Image from "next/image";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="sticky top-0 bg-white shadow-md py-4 px-6 text-black z-10">
      {mobileHeader()}
      {deskTopHeader(toggleSidebar)}
    </header>
  );
};

const mobileHeader = () => (
  <div className="flex justify-between items-center md:hidden">
    <MenuIcon className="cursor-pointer" />
    <Image src={Logo.src} alt="Herkey Logo" width={98} height={26} />
    <Image
      src={ForeverIcon.src}
      alt="Profile Icon"
      width={34}
      height={34}
      className="h-[34px] w-[34px] rounded-full"
    />
  </div>
);

const deskTopHeader = (toggleSidebar) => (
  <div className="hidden md:flex items-center">
    <Grid
      container
      justifyContent={"left"}
      flex
      flexGrow
      alignItems={"center"}
      spacing={4}
    >
      <Grid item xs="auto">
        <div className="flex justify-between items-center w-52">
          <Image src={Logo.src} alt="Herkey Logo" width={130} height={35} />
          <MenuIcon className="cursor-pointer" onClick={toggleSidebar} />
        </div>
      </Grid>
      {["DASHBOARD", "PACKAGES", "EVENTS", "BLOGS"].map((text, index) => (
        <Grid key={text} item xs="auto">
          {text}
        </Grid>
      ))}
    </Grid>
    <div className="rounded-full h-12 w-12 flex items-center justify-center ml-auto">
      <Image
        src={ForeverIcon.src}
        alt="Rounded Icon"
        width={34}
        height={34}
        className="h-[34px] w-[34px] rounded-full"
      />
    </div>
  </div>
);

export default Header;
