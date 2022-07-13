import React, { useContext } from "react";
import { SectionTitle } from "../components";
import { ThemeContext } from "../context/themeContext";
import Icon1 from "../assets/images/service/Icon1.js";
import Icon2 from "../assets/images/service/Icon2.js";
import Icon3 from "../assets/images/service/Icon3.js";
import Icon4 from "../assets/images/service/Icon4.js";
const Service = () => {
  const { theme } = useContext(ThemeContext);

  const cardList = [
    {
      text: "Blockchain Development",
      img: Icon1,
    },
    {
      text: "Web Development",
      img: Icon2,
    },
    {
      text: "App Development",
      img: Icon3,
    },
    {
      text: "UI -UX Development",
      img: Icon4,
    },
  ];

  return (
    <div
      id="services"
      className={`${
        theme === "dark" ? "service-bg-dark" : "service-bg-light"
      } py-20`}
    >
      <div className="container">
        <SectionTitle text="Our service" />
        <div className="grid gap-y-20 md:grid-cols-2 mt-20 md:gap-x-10 items-center">
          <div className=" md:grid md:grid-cols-2 md:gap-x-8 text-center">
            <div className="">
              <ServiceCard data={cardList[0]} active />

              <ServiceCard data={cardList[1]} />
            </div>
            <div className="md:mt-10">
              <ServiceCard data={cardList[2]} />
              <ServiceCard data={cardList[3]} />
            </div>
          </div>
          <div className="lg:pl-44 text-center md:text-left">
            <SectionTitle
              text="We provide Awsome service to our clients"
              center={false}
            />
            <h2 className="mt-6">
              Our clients get best solution in: 
            </h2>
              <ul class="text-left" 
               style={{ listStyle: 'disc' }}>
                <li>Smart contract by Solidity,
              Rust - Flexible & Smart UX/UI design & creative NFT graphic design</li>
              <li>Pixel perfect, fully responsive, awesome website in any JS
              framework</li>
              <li>Contract integration using web3.js/ethers.js</li>
              <li>Fully
              featured Dapp Launch</li>
              <li>Website development using MEAN/MERN</li>
              <li>Mobile Application development in React Native</li>
              </ul>
            <button className="border border-dark-500 dark:border-white  rounded-md py-2 px-4 mt-4">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;

const ServiceCard = ({ data, active = false }) => {
  return (
    <div
      className={`${
        active && "active"
      } shadow-lg bg-white rounded-xl py-10 px-4 mt-10 service-card h-80 w-full flex justify-between flex-col`}
    >
      <div className="flex justify-center mb-20">{<data.img />}</div>
      <h4 className="text-dark-500 text-3xl font-medium mx-10">{data.text}</h4>
    </div>
  );
};
