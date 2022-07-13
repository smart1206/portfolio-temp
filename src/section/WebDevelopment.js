import React, { useContext } from "react";
import ImageDark from "../assets/images/web-devlopment-dark-image.png";
import ImageLight from "../assets/images/web-devlopment-light-image.png";
import { ThemeContext } from "../context/themeContext";
import { SectionTitle } from "../components";
const WebDevelopment = () => {
  const { theme } = useContext(ThemeContext);

  const dataList = [
    "Website designing",
    "Angular Development",
    "React Development",
    "Node.js Development",
    ".net Development",
    "PHP Development",
  ];
  return (
    <div
      className={`webdevlopment-bg ${
        theme === "dark" ? "dark" : "light"
      } py-20 `}
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 items-center">
          <div className="text-right ">
            <img src={theme === "dark" ? ImageDark : ImageLight} alt="" />
          </div>
          <div className="flex md:justify-end">
            <div>
              <SectionTitle text="WEB DEVELOPMENT" center={false} />
              <ul className="mt-10">
                {dataList.map((val, i) => (
                  <li
                    className="uppercase p-2 grid grid-flow-col justify-start gap-x-2"
                    key={i}
                  >
                    <p>•</p>
                    <p className=" ">{val}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;
