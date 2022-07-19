import React from "react";
import { SectionTitle } from "../components";
import { CgArrowLongRight } from "react-icons/cg";
import { BsFillPlayFill } from "react-icons/bs";
import AvtrMain from "../assets/images/avatar-back.png";
import SquidMain from "../assets/images/squid_main.jpeg";
import LeoniMain from "../assets/images/leoni_front.png";
import Ball1 from "../assets/images/ball1.svg";
import Ball2 from "../assets/images/ball2.svg";
import Ball3 from "../assets/images/ball3.svg";
import Ball4 from "../assets/images/ball4.svg";

const LatestProjects = () => {
  return (
    <div id="projects">
      <div className="container py-20">
        <SectionTitle text="LATEST PROJECTS" />
        <p className="text-center mt-4 capitalize">
          we design with care and develop with precisions
        </p>

        <div className="mt-10 relative z-10">
          <img
            src={Ball1}
            alt=""
            className=" absolute top-0 left-0 transform -translate-x-1/2  -translate-y-1/2"
          />
          <img
            src={Ball2}
            alt=""
            className=" absolute bottom-0 right-0 transform translate-x-1/2  translate-y-1/2"
          />
          <ProjectCard1 />
        </div>

        <div className="mt-10 relative z-10">
          <img
            src={Ball3}
            alt=""
            className=" -z-10  absolute top-0 left-0 transform -translate-x-1/2  "
          />
          <img
            src={Ball4}
            alt=""
            className="z-0 absolute bottom-0 right-0 transform translate-x-1/2  translate-y-1/2"
          />
          <ProjectCard2 />
        </div>

        <div className="mt-10 z-10 relative">
          <img
            src={Ball3}
            alt=""
            className=" -z-10  absolute bottom-0 left-0 transform -translate-x-1/2  translate-y-1/2"
          />
          <ProjectCard3 />
        </div>
        {/* <Link to="/projects">
          <button className="bg-gradient-primary block mx-auto mt-10 text-sm py-2.5 px-4 rounded-md text-white">
            Explore More
          </button>
        </Link> */}
      </div>
    </div>
  );
};

export default LatestProjects;

const ProjectCard1 = () => {
  return (
    <div className="project-card pt-10 md:py-10">
      <div className="grid  grid-cols-1 md:grid-cols-12 gap-x-10">
        <div className="md:col-span-6 p-6 md:p-10 md:pr-4 md:pl-16 order-2 md:order-1">
          <h2 className=" font-bold text-3xl md:text-4xl uppercase text-blue-400 dark:text-white">
            Avtar Exchange
          </h2>
          <p className="mt-4 text-xs md:text-sm ">
            Avtar Exchange is a decentralized bep20 wallet system with all features like track assets, send, swap and receive tokens in wallet. <br></br><br></br>
            User can create their unique web3 wallet to receive funds and users can swap their avtar tokens in altcoins with minimum fees. Our team developed avtar exchange system within 6 weeks of time from scratch. <br></br><br></br>
          </p>
          <p className=" text-4xl mt-4 md:mb-6 text-red-500 dark:text-white">
            <CgArrowLongRight />
          </p>
        </div>
        <div className=" md:col-span-6 pr-10 relative order-1 md:order-2">
          <div className="avtrBack flex justify-center items-center rounded-lg h-60 md:h-72 absolute top-1/2 left-0 -translate-y-1/2 translate-x-1/3 md:translate-x-0 w-1/2 md:w-80">
            <span className="text-5xl text-blue-500 ">
              <BsFillPlayFill />
            </span>
          </div>
          <img
            src={AvtrMain}
            alt="Equinox"
            className="bg-orange-400 h-72 md:h-full w-7/12   ml-auto"
          />
        </div>
      </div>
    </div>
  );
};
const ProjectCard2 = () => {
  return (
    <div className="project-card pt-10 md:py-10">
      <div className="grid  grid-cols-1 md:grid-cols-12 gap-x-10">
        <div className="md:col-span-6 p-6 md:p-10 md:pr-4 md:pl-16 order-2 md:order-1">
          <h2 className=" font-bold text-3xl md:text-4xl uppercase text-blue-400 dark:text-white">
            Squid Moon
          </h2>
          <p className="mt-4 text-xs md:text-sm ">
            Squidmoon is a crypto game developed in BSC chain with fair results to users. And our team delivered this complete game integration in 4 days of time which proves how fast we deliver our solutions to cliets.<br></br><br></br>
            This competition is very straightforward. You will be required to first place your bet in BNB. Next you will guess if there is an even number or odd number of marbles in the other players hand. Depending on how well you perform you will increase your score to collect a substantial prize at the end of the game. Or you will lose, and collect nothing.
          </p>
          <p className=" text-4xl mt-4 md:mb-6 text-red-500 dark:text-white">
            <CgArrowLongRight />
          </p>
        </div>
        <div className=" md:col-span-6 pr-10 relative order-1 md:order-2">
          <div className="squidBack flex justify-center items-center rounded-lg h-60 md:h-72 absolute top-1/2 left-0 -translate-y-1/2 translate-x-1/3 md:translate-x-0 w-1/2 md:w-80">
            <span className="text-5xl text-blue-500 ">
              <BsFillPlayFill />
            </span>
          </div>
          <img
            src={SquidMain}
            alt="Equinox"
            className="bg-orange-400 h-72 md:h-full w-7/12 mh-500 ml-auto"
          />
        </div>
      </div>
    </div>
  );
};
const ProjectCard3 = () => {
  return (
    <div className="project-card pt-10 md:py-10">
      <div className="grid  grid-cols-1 md:grid-cols-12 gap-x-10">
        <div className="md:col-span-6 p-6 md:p-10 md:pr-4 md:pl-16 order-2 md:order-1">
          <h2 className=" font-bold text-3xl md:text-4xl uppercase text-blue-400 dark:text-white">
            Leonicorn Swap
          </h2>
          <p className="mt-4 text-xs md:text-sm ">
            Leonicorn Swap is an advanced AMM with features Like NFT Marketplace, Lottery, IDO and many other advanced features. We provide user-friendly, efficient and secure crypto solutions by utilizing blockchain technology. <br></br><br></br>
            In Leonicorn Swap Exchange, you can Trade, Provide Liquidity for your project and others, Buy and Sell NFT, and raise funds for your projects via the IDO/IFO model. It's a complete solution for Users and Traders. <br></br><br></br>
          </p>
          <p className=" text-4xl mt-4 md:mb-6 text-red-500 dark:text-white">
            <CgArrowLongRight />
          </p>
        </div>
        <div className=" md:col-span-6 pr-10 relative order-1 md:order-2">
          <div className="leoniBack bg-blue-500 flex justify-center items-center rounded-lg h-60 md:h-72 absolute top-1/2 left-0 -translate-y-1/2 translate-x-1/3 md:translate-x-0 w-1/2 md:w-80">
            <span className="text-5xl text-white">
              <BsFillPlayFill />
            </span>
          </div>
          <img
            src={LeoniMain}
            alt="Equinox"
            className="bg-orange-400 h-72 md:h-full w-7/12   ml-auto"
          />
        </div>
      </div>
    </div>
  );
};
