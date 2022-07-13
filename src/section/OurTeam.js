import React, { useContext } from "react";
import { SectionTitle } from "../components";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Team1 from "../assets/images/teamimage.png";
import Yogesh from "../assets/images/yogesh.png";
import Swapnil from "../assets/images/swapnil.png";
import { AiFillStar, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { ThemeContext } from "../context/themeContext";
const OurTeam = () => {
  const options = {
    loop: false,
    margin: 40,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  };
  return (
    <div className=" py-16 md:py-20" id="team">
      <div className="container team">
        <SectionTitle text="OUR TEAM" />
        <div className="mt-14 px-8 md:px-20 ">
          <OwlCarousel
            className=" relative"
            style={{ boxShadow: 0, position: "relative" }}
            {...options}
          >
            {teamList.map((val, i) => (
              <React.Fragment key={i}>
                <TeamCard data={val} />
              </React.Fragment>
            ))}
          </OwlCarousel>
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
      className={`team-card z-50   ${
        theme === "dark" ? "dark" : "light"
      }  py-10 relative text-center`}
    >
      <div className="absolute right-5 top-5">
        {data.socialList.map((val, i) => (
          <a
            href={val.link}
            key={i}
            target="_blank"
            className={`w-8 h-8 mb-2 ${
              theme === "dark" ? "text-dark-500" : "text-blue-400"
            } bg-white  rounded-full flex items-center justify-center`}
          >
            {<val.icon />}
          </a>
        ))}
      </div>
      <div className="">
        <div
          className={` ${
            theme === "dark" ? "" : "outline outline-blue-400"
          } w-24 h-24 flex justify-center items-center mx-auto  overfolw-hidden rounded-full border-4 border-white`}
        >
          <img src={data.img} alt="" className="teamImage"/>
        </div>
        <p className="mt-4">{data.name}</p>
        <h1 className="mt-2">{data.title}</h1>

        {/* <div
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
        </div> */}
        {/* <button className="text-white bg-gradient-primary py-2 text-sm  px-14 rounded-sm">
          <a href="http://yogeshjakhar.com" target="_blank">About</a>
        </button> */}
      </div>
    </div>
  );
};

const teamList = [
  {
    name: "Yogesh Jakhar",
    title: "Founder & CEO",
    img: Yogesh,
    socialList: [
      // {
      //   icon: FaInstagram,
      //   link: "https://www.instagram.com/yogesh_jakhar__/",
      // },
      // {
      //   icon: FaFacebookF,
      //   link: "https://www.facebook.com/profile.php?id=100007557255267",
      // },
      {
        icon: FaLinkedinIn,
        link: "https://www.linkedin.com/in/yogesh-jakhar-26482abc259/",
      },
    ],
  },
  {
    name: "Swapnil Swami",
    title: "CTO",
    img: Swapnil,
    socialList: [
      // {
      //   icon: AiOutlineTwitter,
      //   link: "",
      // },
      // {
      //   icon: FaFacebookF,
      //   link: "",
      // },
      {
        icon: FaLinkedinIn,
        link: "https://www.linkedin.com/in/swapnil-swami-9a938b193",
      },
    ],
  },
  // {
  //   name: "Dan Popov",
  //   title: "Blockchain Developer",
  //   img: Team1,
  //   socialList: [
  //     {
  //       icon: AiOutlineTwitter,
  //       link: "",
  //     },
  //     {
  //       icon: FaFacebookF,
  //       link: "",
  //     },
  //     {
  //       icon: FaLinkedinIn,
  //       link: "",
  //     },
  //   ],
  // },
];
