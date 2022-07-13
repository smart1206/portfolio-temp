import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const ProjectCard = ({ data }) => {
  return (
    <div className="project-card effect p-4 shadow-2xl">
      <div className=" overflow-hidden rounded-lg">
        <LazyLoadImage
          alt={data.title}
          className="w-full h-80 "
          width={"100%"}
          effect="blur"
          src={data.img} // use normal <img> attributes as props
        />
        {/* <img src={data.img} alt="" className="w-full h-80" /> */}
      </div>
      <div className="px-5 py-8">
        <h2 className="text-xl">{data.title}</h2>
        <p className="text-sm mt-5">{data.desc}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
