import { BiSolidDonateHeart } from "react-icons/bi";
import { CodlerSvg, CurvelineSvg } from "../../assets/svg";
// import birdsflyingPng from "../../assets/img/birdsflying.png";
import cloudcityPng from "../../assets/img/cloud-city.png";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { PrimaryButton } from "../../components/buttons";

const NavItem = ({ title }) => {
  return (
    <a
      href="/"
      className="group relative font-fricolage px-3 py-2.5 min-w-10 cursor-pointer hover:text-violet-600 transition-colors duration-300"
    >
      {title}
      <span className="absolute inset-x-4 bottom-0 h-full bg-gradient-to-t from-violet-500/20 to-transparent blur rounded-t-full opacity-0 transition-opacity group-hover:opacity-100 duration-300" />
    </a>
  );
};

const Navbar = () => {
  return (
    <div className="flex gap-x-1 items-center h-10 rounded-full bg-white/75 bg-gradient-to-r from-pink-200/40 via-violet-200/40 to-indigo-200/40 border border-white/50 px-3 text-sm font-medium text-gray-800 shadow-lg shadow-gray-800/5 ring-1 ring-gray-800/[.075] backdrop-blur-xl">
      <NavItem title={"Articles"} />
      <NavItem title={"Docs"} />
      <NavItem title={"Partners"} />
      <NavItem title={"Community"} />
      <NavItem title={"About"} />
    </div>
  );
};

const HeaderLogo = () => {
  return (
    <a className="flex items-center w-36" href="/">
      <img src="./logo.png" alt="logo" className="w-10 h-10" />
      <h2 className="font-fragment ml-3 text-xl font-bold ">Fly.org</h2>
    </a>
  );
};

const HeaderDonateButton = () => {
  return (
    <div className="w-36 flex items-center justify-between h-10 rounded-full bg-white/75 bg-gradient-to-r from-pink-200/40 via-violet-200/40 to-indigo-200/40 border border-white/50 text-sm font-medium text-gray-800 shadow-lg shadow-gray-800/5 ring-1 ring-gray-800/[.075] backdrop-blur-xl">
      <a
        href="/"
        className="flex justify-center items-center font-fricolage flex-none group relative text-base sm:text-sm ml-1 flex-grow my-1 bg-clip-padding rounded-l-[20px] rounded-r-[8px] border h-8 pl-3 pr-[10px] bg-white/40 border-white/90 shadow hover:text-violet-600 hover:bg-violet-50/40 transition-colors duration-300"
      >
        Donate
      </a>
      <a
        href="/"
        className="text-white bg-purple-primary bg-violet-600 flex justify-center items-center font-fricolage flex-none group relative text-base sm:text-sm mx-1 my-1 bg-clip-padding rounded-r-[20px] rounded-l-[8px] border h-8 pl-3 pr-[10px] bg-white/40 border-white/90 shadow transition-colors duration-300"
      >
        <BiSolidDonateHeart />
      </a>
    </div>
  );
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: "-60px", opacity: 0 }} // Start above the viewport
      animate={{ y: 0, opacity: 1 }} // Drop to the initial position
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`sticky top-0 p-4 flex items-center justify-between z-10 ${
        isScrolled ? "backdrop-blur-sm" : "backdrop-blur-0"
      }`}
    >
      <HeaderLogo />
      <Navbar />
      <HeaderDonateButton />
    </motion.header>
  );
};

const Heading = () => {
  return (
    <div className="relative container lg:max-w-3xl mx-auto">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
        className="text-6xl font-mackinac text-center text-[#281950]"
      >
        Join Us Protecting Our{" "}
        <em>
          Precious{" "}
          <span className="relative">
            Birds <CurvelineSvg className="absolute bottom-0 left-0 w-full" />
          </span>
        </em>
      </motion.h2>
      <motion.p
        initial={{ y: "30px", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
        className="font-fricolage text-lg text-[#281950] mt-8 mx-10 text-center"
      >
        <b>Over 3 billion birds </b>
        <span className="opacity-75">
          have been lost since the 1970s due to habitat destruction, pollution,
          and climate change. This alarming decline threatens ecosystems and
          biodiversity. Join us in protecting these precious species and
          ensuring their survival for future generations. Your support matters!
        </span>
      </motion.p>
      <motion.div
        initial={{ y: "30px", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
        className="flex justify-center mt-10"
      >
        <PrimaryButton>Join the Community</PrimaryButton>
      </motion.div>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="w-full relative pt-20">
      <Heading />
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
        alt="cloud-city"
        src={cloudcityPng}
        className=""
      />
    </section>
  );
};

const BirdsChirping = () => {
  return (
    <section className="container mx-auto py-24 xl:py-32 px-4 sm:px-6 lg:px-8 grid gap-20 items-center">
      <div>
        <h2>BirdsChirping</h2>
      </div>
      <div></div>
    </section>
  );
};

const Home = () => {
  return (
    <>
      <CodlerSvg className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 w-full h-auto" />
      <Header />
      <Hero />
      <BirdsChirping />
    </>
  );
};

export default Home;
