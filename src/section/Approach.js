import React, { useContext } from "react";
import { SectionTitle } from "../components";
import Card1Dark from "../assets/images/approach-card-light1.svg";
import Card1light from "../assets/images/approach-card-dark1.svg";
import Card2Dark from "../assets/images/approach-card-light2.svg";
import Card2light from "../assets/images/approach-card-dark2.svg";
import Card3Dark from "../assets/images/approach-card-light3.svg";
import Card3light from "../assets/images/approach-card-dark3.svg";
import Card4Dark from "../assets/images/approach-card-light4.svg";
import Card4light from "../assets/images/approach-card-dark4.svg";
import Card5Dark from "../assets/images/approach-card-light5.svg";
import Card5light from "../assets/images/approach-card-dark5.svg";
import { ThemeContext } from "../context/themeContext";

const cardList = [
  {
    title: "Innovation and ideation",
    desc: "Continuously identify relevant use cases and Collaborate with clients to evaluate existing processes, pain points, and goals to brainstorm project.",
    iconLight: Card1Dark,
    iconDark: Card1light,
  },
  {
    title: "Strategy development",
    desc: "Craft comprehensive business cases to enable executive buy-in to drive business, technology, integration, talent, and consortium operating models Develop strategies to pilot and implement solutions for prioritized/selected use cases.",
    iconLight: Card2Dark,
    iconDark: Card2light,
  },
  {
    title: "Prototyping",
    desc: "Define an iterative and flexible approach to match the rapid changes in the ecosystem",
    iconLight: Card3Dark,
    iconDark: Card3light,
  },
  {
    title: "Product development",
    desc: "Now, our the development team starts developing the solution according to the design and prototype. And we use our pre developed libraries and inidividual tested code to reduce time in development.",
    iconLight: Card4Dark,
    iconDark: Card4light,
  },
  {
    title: "Testing and Delivery",
    desc: "In testing phase, we test every component to make sure that our solution fits the requirement. After testing we make delivery for the solution and assist our clients to control and administer solution.",
    iconLight: Card5Dark,
    iconDark: Card5light,
  },
];

const Approach = () => {
  return (
    <div className="py-20" id="approach">
      <div className="container">
        <SectionTitle />
        <div className="mt-20 grid gap-y-8">
          {cardList.map((val, i) => (
            <React.Fragment key={i}>
              <ApproachCard data={val} i={i} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Approach;

const ApproachCard = ({ data, i }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="">
      <div className=" bg-light-400 shadow-xl dark:bg-dark-400 w-full max-w-3xl p-6  md:pl-20 mx-auto rounded-lg md:rounded-r-lg relative flex-col md:flex-row flex items-center">
        <div className="text-white md:shadow-2xl bg-transparent approach  bg-gradient-blue w-20 md:w-24 md:border-4 border-white h-20 md:h-24 md:absolute left-0 top-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2  flex justify-center items-center rounded-full text-3xl font-extrabold">
          0{i + 1}
        </div>
        <div className="  md:pr-20 order-3 mt-5 md:order-2">
          <h2 className="text-2xl mb-2">{data.title}</h2>
          <p className=" text-gray-400">{data.desc}</p>
        </div>
        <div className="order-2 mt-6 md:order-3">
          <img
            src={theme === "dark" ? data.iconLight : data.iconDark}
            alt=""
            className="w-28 md:w-56"
          />
        </div>
      </div>
    </div>
  );
};
