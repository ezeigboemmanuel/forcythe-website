import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-[#030516] px-24 h-[100px] backdrop-blur-md">
      <div className="flex space-x-16 items-center">
        <Link href="/">
          <Image
            src="/assets/forcythelogo.svg"
            alt="logo"
            width={150}
            height={150}
          />
        </Link>
        <ul className="flex space-x-4">
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/services">
            <li>Services</li>
          </Link>
          <Link href="/services#portfolio">
            <li>Portfolio</li>
          </Link>
          <Link href="/studio">
            <li>Studio</li>
          </Link>
          <Link href="/foundation">
            <li>Foundation</li>
          </Link>
        </ul>
      </div>

      <div className="group">
        <div className="w-[134px] h-12 border border-dashed border-white relative rounded-full  group-hover:border-[#0066cc]"></div>
        <button className="absolute top-5 right-[90px] font-semibold text-black bg-white w-[134px] h-12 rounded-full group-hover:bg-[#0066cc] group-hover:text-white">
          Book a Call
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
