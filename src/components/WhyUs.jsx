import React from "react";
import "./whyus.css";

// Define a React component called CardList
const CardList = () => {
  // Array containing information about each card
  const cards = [
    {
      accentColor: "#D00903",
      iconClass: " fa-solid fa-pen-nib",
      title: "Industry Expertise",
      content:
        "With years of experience in the ICT and FMCG sectors, we have a deep understanding of the industry's nuances, enabling us to provide tailored solutions that meet your specific needs.",
    },
    {
      accentColor: "#EC9E38",
      iconClass: "fa-regular fa-lightbulb",
      title: "Innovative Solutions",
      content:
        "We are committed to innovation, constantly exploring new technologies and approaches to deliver cutting-edge solutions that drive business growth and success.",
    },
    {
      accentColor: "#64BECF",
      iconClass: "fa-regular fa-bow-arrow",
      title: "Customer-Centric Approach",
      content:
        " Our customer-centric approach ensures that your needs are our top priority. We work closely with you to understand your requirements and deliver solutions .",
    },
    {
      accentColor: "#359c09",
      iconClass: "fa-solid fa-user-group",
      title: "Collaborative Partnership",
      content:
        "  We see ourselves as your partners in success, working together with you to achieve  new heights in your  business goals and objectives.",
    },
    {
      accentColor: "#933cc2",
      iconClass: "fa-solid fa-headset",
      title: "Continuous Support",
      content:
        "Our dedicated support team is available around the clock to assist you with any queries or issues, ensuring that you receive the assistance you need.",
    },
  ];

  // Return the JSX to render the list of cards
  return (
    <div>
      <h1 className="text-3xl lg:text-4xl font-bold mb-8 mt-12 md:mt-8 text-center font-serif">
        Your Partner in Excellence
      </h1>
      <div className=" flex justify-center justify-items-center">
        <ul
          className={` flex flex-wrap ${
            window.innerWidth > 1350
              ? "max-w-[80%] flex grid-cols-3 justify-center items-center"
              : ""
          }
         md:gap-4 gap-3 justify-center items-center`}
        >
          {cards.map((card, index) => (
            <li
              key={index}
              className="card m-4 p-6 rounded-lg shadow-lg relative"
              style={{ "--accent-color": card.accentColor }} // Apply custom accent color to each card
            >
              <div className="icon absolute top-0 left-0">
                <i className={`far ${card.iconClass} `}></i>
              </div>
              <div
                className="title text-lg
             text-justify  mt-16 font-semibold "
              >
                {card.title}
              </div>{" "}
              <div className="content">{card.content}</div>{" "}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardList; // Export the CardList component for use in other parts of the application
