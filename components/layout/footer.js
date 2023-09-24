import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white p-4 flex justify-between items-center border border-gray-600 ml-0 md:ml-60 text-gray-900 text-xs sm:text-sm">
      <div>
        <p>{currentYear} &copy; Jobsforher</p>
      </div>
      <div className="space-x-4">
        <Link href="#">About Us</Link>
        <Link href="#">Pricing</Link>
        <Link href="#">FAQs</Link>
      </div>
    </footer>
  );
};

export default Footer;
