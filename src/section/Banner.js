import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import BannerImage from "../assets/images/Hero-image.svg";
import Gif from "../assets/images/rocket.gif";
const Banner = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={` min-h-screen pb-20 ${theme === "dark" ? "banner-bg-dark" : " banner-bg-light"
        }`}
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 items-center pt-40">
          <div className=" ">
            <h1 className=" text-4xl md:text-5xl font-medium leading-snug banner-title">
              <p className="banner-title">We deliver your work</p>
              <p>
                <span className=" font-extrabold gradient-text ">
                  3X FASTER
                </span>{" "}
                <span className="banner-title">THAN Others</span>
              </p>
            </h1>
            <p>
              We deliver Blockchain and full-stack development solutions to you
              with 3X Speed and we never compromise in security and quality of
              our products.
            </p>
            <div className="hidden md:block">
              <QueryElement />
            </div>
          </div>
          <div>
            <div className="flex md:justify-end justify-center mt-6">
              <img src={BannerImage} alt="" className=" w-7/12 md:w-auto" />
            </div>
            <div className=" mt-16 md:hidden">
              <QueryElement />
            </div>
          </div>
        </div>
        <div>
          <div className="relative max-w-max mx-auto">
            <BannerBottomElement />
            <div className="hidden md:block overflow-hidden h-20 w-20 rounded-full -rotate-90 absolute bottom-0 -translate-x-2/3 translate-y-2/3 ">
              <img src={Gif} alt="" />
            </div>
          </div>
          <a
            href="#projects"
            className="mx-auto block mt-6 max-w-max bg-gradient-primary py-2.5 px-6 rounded-md text-white"
          >
            Checkout projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;

const QueryElement = () => {
  return (
    <div className="mt-6 grid md:grid-flow-col justify-center gap-x-6 md:justify-start items-center">
      <div className=" bg-white max-w-md w-auto sm:w-80 rounded-md overflow-hidden shadow-xl">
        <input
          type="text"
          className="w-full h-full py-2.5 focus:outline-none px-4 text-black"
          name=""
          id=""
        />
      </div>
      <a
        href="#contact"
        className=" max-w-max mt-4 md:mt-0 mx-auto bg-gradient-primary py-2.5 px-6 rounded-md text-white"
      >
        Send query
      </a>
    </div>
  );
};

const list = [
  {
    title: "100+",
    desc: "Successful projects",
  },
  {
    title: "60+",
    desc: "Blockchain Projects delivered",
  },
  {
    title: "200+",
    desc: "Token Launched",
  },
  {
    title: "40+",
    desc: "Web/Mobile App project delivered",
  },
];

const BannerBottomElement = () => {
  return (
    <div className="mt-28 md:mt-60 relative z-10">
      <div className="dark:bg-dark-400 dark:text-white bg-white text-gray-500 rounded-md px-6 md:px-8  max-w-max md:max-w-4xl py-4 grid grid-cols-1 md:grid-cols-4 gap-4 mx-auto shadow-2xl">
        {list.map((val, i) => (
          <div key={i} className="text-center">
            <h3 className=" text-4xl md:text-5xl font-extrabold">
              {val.title}
            </h3>
            <p className=" capitalize mt-2">{val.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
