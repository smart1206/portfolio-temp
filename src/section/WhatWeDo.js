import React from "react";
import { SectionTitle } from "../components";
import image from "../assets/images/what-we-do.svg";
import Icon1 from "../assets/images/what-we-do/icon1.png";
import Icon2 from "../assets/images/what-we-do/icon2.png";
import Icon3 from "../assets/images/what-we-do/icon3.png";
import Icon4 from "../assets/images/what-we-do/icon4.png";
import Icon5 from "../assets/images/what-we-do/icon5.png";
import Icon6 from "../assets/images/what-we-do/icon6.png";

const WhatWeDo = () => {
  const dataList = [
    {
      title: "High Quality code",
      icon: Icon1,
    },
    {
      title: "Trustfull Communication",
      icon: Icon2,
    },
    {
      title: "Complete Blockchain Integration",
      icon: Icon3,
    },
    {
      title: "Full stack Web development",
      icon: Icon4,
    },
    {
      title: "Mobile app development",
      icon: Icon5,
    },
    {
      title: "24 Hrs Customer support.",
      icon: Icon6,
    },
  ];

  return (
    <div className=" py-20 ">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img src={image} alt="" />
          </div>
          <div>
            <SectionTitle text="What We Do" center={false} />
            <p className=" text-sm md:text-base mt-6 font-light ">
              We delivery best in class solution for blockchain on Solidity or
              Solana. Some of our best projects are in NFT Marketplace, Crypto
              casino games, DAO, Defi, Lanuchped, staking, Crypto exchange,
              Crypto Wallet, Web/Mobile apps. And these are the reasons for our
              clients to believe in us:
            </p>
            <div className="grid gap-y-6 mt-10">
              {dataList.map((val, i) => (
                <div
                  className="grid grid-flow-col justify-start gap-x-6 md:gap-x-10   items-center  "
                  key={i}
                >
                  <img src={val.icon} alt="" />
                  <p className="text-md md:text-lg font-bold">{val.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
