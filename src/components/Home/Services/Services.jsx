import React from "react";
import "./Services.css";
import Card from "../../card/card";

const Services = () => {
  const mockData = [
    {
      id: 1,
      serviceName: "IT",
      serviceSlogan: "Your path to the future",
      serviceDescription: `
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis rem
      qui quod laboriosam debitis quam quasi ad odit amet voluptatibus, fuga sit
      id officia blanditiis delectus harum nulla voluptates dolor?
      `,
      serviceLink: "/service/it",
      socialMediaLinks: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: 1,
      serviceName: "Capacity",
      serviceSlogan: "Build your capacity with our Enhanced Trainings",
      serviceDescription: `
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis rem
      qui quod laboriosam debitis quam quasi ad odit amet voluptatibus, fuga sit
      id officia blanditiis delectupros harum nulla voluptates dolor?
      `,
      serviceLink: "/service/capacity",
      socialMediaLinks: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
  ];

  return (
    <div className="service-container">
      <h3>Our Services</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, maxime!
      </p>
      <div className="card-container">
        {mockData.map((data) => {
          return (
            <Card
              title={data.serviceName}
              slogan={data.serviceSlogan}
              description={data.serviceDescription}
              link={data.serviceLink}
              social={data.socialMediaLinks}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Services;
