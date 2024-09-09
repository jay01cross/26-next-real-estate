import { navLinks } from "@/constant/constant";
import Link from "next/link";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNavbar = ({ showNav, closeNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div className="">
      {/* overlay */}
      <div
        className={`transform ${navOpen} fixed transition-all duration-500 inset-0 z-[1000] bg-black/70 w-full h-screen`}
      />

      {/* navlinks */}
      <div
        className={`text-white ${navOpen} transform transition-all duration-500 delay-300 fixed flex flex-col justify-center h-full w-[80%] sm:w-[60%] bg-[#c1205e] space-y-6 z-[10000]`}
      >
        {navLinks.map((navLink) => (
          <Link key={navLink.id} href={navLink.url}>
            <p className="text-[20px] sm:text-[30px] ml-12 border-b-[1.5px] pb-1 w-fit border-white font-medium hover:text-yellow-300">
              {navLink.label}
            </p>
          </Link>
        ))}

        {/* close btn */}
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:size-8 size-6 text-white"
        />
      </div>
    </div>
  );
};

export default MobileNavbar;
