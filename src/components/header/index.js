import { useContext, useState } from "react";
import Logo from "../../assets/images/LOGO.svg";
import LogoDark from "../../assets/images/LOGO_DARK.svg";
import { ThemeContext } from "../../context/themeContext";
import { MdClose } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";
// import { GrFormClose } from "react-icons/gr";

const Header = () => {
  const { theme } = useContext(ThemeContext);
  const [show, setShow] = useState(false);

  const showHandler = () => {
    setShow((prev) => !prev);
  };
  return (
    <div className=" fixed w-full z-50 py-2 bg-headerLight dark:bg-headerDark shadow-md transition-all duration-200  ">
      <div className="container flex justify-between items-center">
        <Link to="/">
          <img width={70} height={40} src={theme === "dark" ? Logo : LogoDark} alt="" />
        </Link>
        <ul className=" hidden  items-center  lg:flex">
          {linkList.map((val, i) => (
            <li className="" key={i}>
              <a href={val.link} className="p-4 uppercase font-medium">
                {val.text}
              </a>
            </li>
          ))}
        </ul>
        {/* <div className="">
          <button
            className=" text-2xl dark:text-primary-500 transition-all  flex items-center justify-center"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <MdWbSunny /> : <IoIosMoon />}
          </button>
        </div> */}
        {/* <a
          href="#contact"
          className="hidden lg:block bg-gradient-orange py-2 px-6 rounded-md text-white"
        >
          Contact
        </a> */}

        <div className="lg:hidden  text-2xl" onClick={showHandler}>
          <HiMenuAlt3 />
        </div>
      </div>

      <div
        className={`lg:hidden mobile-menu overflow-hidden ${show && "active"} ${theme === "dark" ? "dark" : "light"
          } `}
      >
        <div className="py-10 px-10">
          <button
            className=" absolute right-5 text-3xl top-4 "
            onClick={showHandler}
          >
            <span className="dark:text-white">
              <MdClose />
            </span>
          </button>
          <ul className=" lg:hidden  text-center ">
            {linkList.map((val, i) => (
              <li className="" key={i}>
                <a
                  href={val.link}
                  onClick={showHandler}
                  className="py-2 border-b border-white block uppercase font-medium"
                >
                  {val.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

const linkList = [
  {
    text: "Approach",
    link: "#approach",
  },
  {
    text: "Services",
    link: "#services",
  },
  {
    text: "Projects",
    link: "#projects",
  },
  // {
  //   text: "Reviews",
  //   link: "#reviews",
  // },
  {
    text: "Team",
    link: "#team",
  },
];
