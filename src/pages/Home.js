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
  Testimonial,
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
      {/* <Testimonial /> */}
      <OurTeam />
      <ContactUs />
    </Layout>
  );
};

export default Home;
