import React from "react";

const About = () => {
  const aboutStyles = {
    background: "url(/assets/bg.jpg)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    borderRadius: "5px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
    color: "#333",
    fontFamily: "Arial, sans-serif",
    height: "100vh",
  };

  const headingStyles = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
    textAlign: "center",
  };

  const paragraphStyles = {
    fontSize: "16px",
    marginBottom: "10px",
    textAlign: "center",
  };

  return (
    <div style={aboutStyles}>
      <h1 style={headingStyles}>About Us</h1>
      <p style={paragraphStyles}>
        Welcome to our website! We are a team of passionate individuals
        dedicated to providing high-quality products and services.
      </p>
      <p style={paragraphStyles}>
        Our mission is to make a positive impact in the world by delivering
        innovative solutions that meet our customers' needs.
      </p>
      <p style={paragraphStyles}>
        Feel free to explore our website and learn more about our offerings. If
        you have any questions, don't hesitate to reach out to us.
      </p>
      <p style={paragraphStyles}>Thank you for visiting!</p>
    </div>
  );
};

export default About;
