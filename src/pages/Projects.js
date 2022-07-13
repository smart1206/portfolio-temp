import React from "react";
import Layout from "../components/Layout";
import ProjectCard from "../components/projectCards";
const Projects = () => {
  const cardData = [
    {
      img: "https://picsum.photos/300/320?random=2",
      title: "PROJECT TITLE",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, delectus nemo laboriosam laudantium ex nam similique veniam maxime impedit neque?",
    },
    {
      img: "https://picsum.photos/300/320?random=2",
      title: "PROJECT TITLE",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, delectus nemo laboriosam laudantium ex nam similique veniam maxime impedit neque?",
    },
    {
      img: "https://picsum.photos/300/320?random=2",
      title: "PROJECT TITLE",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, delectus nemo laboriosam laudantium ex nam similique veniam maxime impedit neque?",
    },
    {
      img: "https://picsum.photos/300/320?random=2",
      title: "PROJECT TITLE",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, delectus nemo laboriosam laudantium ex nam similique veniam maxime impedit neque?",
    },
    {
      img: "https://picsum.photos/300/320?random=2",
      title: "PROJECT TITLE",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, delectus nemo laboriosam laudantium ex nam similique veniam maxime impedit neque?",
    },
    {
      img: "https://picsum.photos/300/320?random=2",
      title: "PROJECT TITLE",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, delectus nemo laboriosam laudantium ex nam similique veniam maxime impedit neque?",
    },
  ];

  return (
    <Layout>
      <div className="container py-60 min-h-screen project-page-bg">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {cardData.map((val, i) => (
            <React.Fragment key={i}>
              <ProjectCard data={val} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
