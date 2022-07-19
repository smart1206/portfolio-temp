import React from "react";
import Layout from "../components/Layout";
import {
  BlockchainDevlopment,
  Service,
  WhatWeDo,
  Approach,
  Banner,
  WebDevelopment,
  LatestProjects,
  OurTeam,
  ContactUs,
} from "../section";
const Home = () => {
  return (
    <Layout>
      <Banner />
      <Approach />
      <WhatWeDo />
      <Service />
      <BlockchainDevlopment />
      <WebDevelopment />
      <LatestProjects />
      <OurTeam />
      <ContactUs />
    </Layout>
  );
};

export default Home;
