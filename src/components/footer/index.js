/* eslint-disable jsx-a11y/iframe-has-title */
import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import LogoDark from "../../assets/images/LOGO.svg";
import LogoLight from "../../assets/images/LOGO_DARK.svg";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`footer py-20  ${theme === "dark" ? "dark" : "light"}`}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className=" md:pr-20">
            <img src={theme === "dark" ? LogoDark : LogoLight} alt="" />
            <p className=" font-extralight text-sm mt-4  dark:text-gray-400">
            2X Solution deliver NFT Marketplace, Crypto casino games, DAO, Defi, Lanuchped, staking, Crypto exchange, Crypto Wallet, Web/Mobile apps.
            </p>
            <div>
              <p className="mt-4 grid grid-flow-col items-center justify-start gap-x-4">
                <span className="">Telephone:</span>
                <span className="text-sm dark:text-gray-400">+91-9079662467</span>
              </p>
              <p className="mt-1 grid grid-flow-col items-center justify-start gap-x-4">
                <span className="">WhatsApp:</span>
                <span className="text-sm dark:text-gray-400">+91-9079662467</span>
              </p>
              <p className="mt-1 grid grid-flow-col items-center justify-start gap-x-4">
                <span className="">E-mail:</span>
                <span className="text-sm dark:text-gray-400">
                  <a href="mailto:project@2xsolution.com">project@2xsolution.com</a>
                </span>
              </p>
            </div>
            <div className="mt-10">
              <p className="text-xl mb-2">Our Location</p>
              <div className="mapouter ">
                <div className="gmap_canvas">
                  <iframe
                    className="gmap_iframe"
                    frameBorder={0}
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                    src="https://maps.google.com/maps?width=600&height=400&hl=en&q=coursekosh&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                  />
                </div>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      ".mapouter{position:relative;text-align:right;width:100%;height:400px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:400px;}.gmap_iframe {width:100%!important;height:400px!important;}",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {footerData.map((val, i) => (
              <div className="" key={i}>
                <h4 className="text-xl">{val.title}</h4>
                <ul className=" text-gray-400 mt-4">
                  {val.items.map((val, i) => (
                    <li
                      key={i}
                      className="grid grid-flow-col justify-start gap-x-1 "
                    >
                      <p>•</p> <p>{val}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const footerData = [
  {
    title: "Services",
    items: [
      "Blockchain Development",
      "UI-UX design",
      "Enterprize Software development",
      "Web development",
      "Mobile app development"
    ],
  },
  {
    title: "Blockchain",
    items: [
      "Blockchain integretion in BSC/ETH/SOLANA chain",
      "Smart Contract Development",
      "NFT P2E Games",
      "Blockchain Casino games",
      "NFT Marketplace",
      "ICO Launchpad",
      "Fully decentralized solutions",
      "Crypto wallet/exchange",
    ],
  },
  {
    title: "Mobile Application Development",
    items: ["Flutter", "React Native", "Swift"],
  },
  {
    title: "Frontend Development",
    items: ["React JS", "Vue JS", "Angular.js", "Angular 2+"],
  },
  {
    title: "Backend Development",
    items: ["Node JS", "Express JS", "PHP", ".net"],
  }
];
