import React from "react";

const list = [
  "Best speed at which your project can be delivered",

  "Available in both EST and IST timezone.",

  "Client trust is our most priority hence we are always transparent to them.",

  "We know how painful a project delay can be in your blockchain community hence we help to deliver solution within timeline.",

  "5+ years of experienced developer in team who provide best slution for you.",
];
const ContactUs = () => {
  return (
    <div className="contact-bg py-28" id="contact">
      <div className="container">
        <div className="  relative  grid grid-cols-1 lg:flex justify-center gap-y-10 ">
          <Form />
          <div className="lg:hidden">
            <WhatsNext />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

const Form = () => {
  return (
    <div className="dark:bg-dark-400 dark:text-white bg-white text-black p-6 rounded-lg lg:mx-0 max-w-md w-full relative z-20 mx-auto">
      <div className="hidden lg:block">
        <WhatsNext />
      </div>
      <h4 className="text-3xl font-medium ">
        Ready to be in the ultimate <br /> software solutions?{" "}
      </h4>
      <p className=" text-primary-600 mt-8 text-2xl font-bold ">
        Contact Us Today!
      </p>

      <div className="dark:bg-dark-500 bg-gray-200 rounded-lg mt-4">
        <input
          type="text"
          className="bg-transparent h-full w-full focus:outline-none py-2 px-2 text-sm"
          placeholder="Full Name *"
        />
      </div>
      <div className="dark:bg-dark-500 bg-gray-200 rounded-lg mt-4">
        <input
          type="text"
          className="bg-transparent h-full w-full focus:outline-none py-2.5 px-2 text-sm"
          placeholder="Gamil"
        />
      </div>
      <div className="dark:bg-dark-500 bg-gray-200 rounded-lg mt-4">
        <input
          type="text"
          className="bg-transparent h-full w-full focus:outline-none py-2 px-2 text-sm"
          placeholder="Contact *"
        />
      </div>
      <div className="dark:bg-dark-500 bg-gray-200 rounded-lg mt-4">
        <textarea
          id="w3review"
          name="w3review"
          rows="6"
          cols="50"
          className="bg-transparent h-full w-full focus:outline-none py-2 px-2 text-sm"
          placeholder="Contact *"
        >
          Tell Us How can we help you?
        </textarea>
      </div>
      <button className="bg-gradient-primary py-2 px-5 rounded-sm text-white text-sm mt-6 block ml-auto">
        Send
      </button>
    </div>
  );
};

const WhatsNext = () => (
  <div className="whats-next pt-16 pb-20 px-20 lg:absolute left-full w-full top-1/2 lg:-translate-y-1/2  dark:text-white rounded-lg max-w-md mx-auto lg:mx-0">
    <h3 className="text-3xl text-center">Get in Touch</h3>
    <p className="text-center text-sm mt-2">
      Do you have a project for development? These are the reasons you should
      choose us.
    </p>
    <ul className="mt-6">
      {list.map((val, i) => (
        <li key={i} className="grid grid-flow-col gap-x-4 mb-4">
          <p className="w-10 h-10 bg-white text-dark-400 rounded-full flex items-center justify-center">
            {i + 1}
          </p>
          <p className="text-sm font-thin">{val}</p>
        </li>
      ))}
    </ul>
  </div>
);
