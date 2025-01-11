import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between space-x-4 items-center bg-[#030516] px-12 lg:px-24 h-[105px] backdrop-blur-md">
      <Link href="/" className="md:hidden">
        <Image
          src="/assets/forcythelogo.svg"
          alt="logo"
          width={150}
          height={150}
        />
      </Link>
      <div className="md:hidden"></div>

      <div className="hidden md:flex space-x-16 items-center">
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

      <div className="hidden md:inline-block group">
        <div className="w-[134px] h-12 border border-dashed border-white relative rounded-full  group-hover:border-[#0066cc]"></div>
        <button className="absolute right-[42px] top-6 lg:right-[90px] font-semibold text-black bg-white w-[134px] h-12 rounded-full group-hover:bg-[#154b81] group-hover:text-white transition ease-in-out delay-150">
          Book a Call
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
