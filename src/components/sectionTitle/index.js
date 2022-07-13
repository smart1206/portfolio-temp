const SectionTitle = ({ text = "Our Approach", center = true }) => {
    return (
      <h2
        className={`uppercase font-bold text-3xl md:text-4xl  ${
          center && "text-center"
        }  text-blue-400 dark:text-orange-400`}
      >
        {text}
      </h2>
    );
  };
  
  export default SectionTitle;
  