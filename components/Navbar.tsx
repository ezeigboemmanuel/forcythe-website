import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-[#030516]">
      <div>
        <Image
          src="/assets/forcythelogo.svg"
          alt="logo"
          width={150}
          height={150}
        />
        <ul className="text-sm">
          <li>About</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Studio</li>
          <li>Foundation</li>
        </ul>
      </div>

      <div></div>
    </nav>
  );
};

export default Navbar;
