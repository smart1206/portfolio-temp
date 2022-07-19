import React, { useContext } from "react";
import { SectionTitle } from "../components";

import John from "../assets/images/John.jfif";
import Jackson from "../assets/images/Jackson.jpg";
import { AiFillStar, } from "react-icons/ai";
import { FaLinkedinIn, } from "react-icons/fa";
import { ThemeContext } from "../context/themeContext";

const OurTeam = () => {

  return (
    <div className=" py-16 md:py-20" id="team">
      <div className="container team">
        <SectionTitle text="OUR TEAM" />
        <div className="mt-14 px-8 md:px-20 grid grid-cols-2 gap-4">
          {teamList.map((val, i) => (
            <TeamCard data={val} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;

const TeamCard = ({ data }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`team-card ${theme === "dark" ? "dark" : "light"
        }  py-10 relative text-center`}
    >
      <div className="">
        <div
          className={` ${theme === "dark" ? "" : "outline outline-blue-400"
            } w-24 h-24 flex justify-center items-center mx-auto  overfolw-hidden rounded-full border-4 border-white`}
        >
          <img src={data.img} alt="" className="teamImage" />
        </div>
        <p className="mt-4">{data.name}</p>
        <h1 className="mt-2">{data.title}</h1>

        <div
          className={`flex justify-center items-center my-2 text-yellow-400`}
        >
          <span>
            <AiFillStar />
          </span>
          <span>
            <AiFillStar />
          </span>
          <span>
            <AiFillStar />
          </span>
          <span>
            <AiFillStar />
          </span>
          <span>
            <AiFillStar />
          </span>
        </div>
      </div>
    </div>
  );
};

const teamList = [
  {
    name: "John Wang",
    title: "Founder & CEO",
    img: John,
    socialList: [
      {
        icon: FaLinkedinIn,
        link: "https://www.linkedin.com/in/yogesh-jakhar-26482abc259/",
      },
    ],
  },
  {
    name: "Jackson Piao",
    title: "CTO",
    img: Jackson,
    socialList: [
      {
        icon: FaLinkedinIn,
        link: "https://www.linkedin.com/in/swapnil-swami-9a938b193",
      },
    ],
  },
];
