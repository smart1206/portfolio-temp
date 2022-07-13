import React, { useContext } from "react";
import ImageDark from "../assets/images/blockchain-development-dark-image.png";
import ImageLight from "../assets/images/blockchain-development-light-image.png";
import { ThemeContext } from "../context/themeContext";
import { SectionTitle } from "../components";
const BlockchainDevlopment = () => {
  const { theme } = useContext(ThemeContext);

  const dataList = [
    "Blockchain integration",
    "Dapp development on Solana, Binance smart chain, Ethereum, Avalanche, Tron ",
    "Defi application development ",
    "Ecosystems",
    " Autonomous ORG's (DAO)",
    "Decentralized Casino games",
    "NFT Marketplace: dummy text ",
    "ICO / ICO with MLM",
    "Launchpads like Pinksale & Dxsale",
    "Crypto Wallet / Exchange",
  ];
  return (
    <div
      className={`blockchain-bg ${theme === "dark" ? "dark" : "light"} py-20 `}
    >
      <div className="container">
        <div className="grid md:grid-cols-2 gap-y-10 items-center">
          <div className="order-2 md:order-1">
            <SectionTitle text="BLOCKCHAIN DEVELOPMENT" center={false} />
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
          <div className="text-right flex justify-center md:justify-end order-1 md:order-2">
            <img src={theme === "dark" ? ImageDark : ImageLight} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockchainDevlopment;
