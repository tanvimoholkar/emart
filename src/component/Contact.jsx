import React from "react";

const Contact = () => {
  const contactStyles = {
    background: "url(/assets/bg.jpg)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  };

  const headingStyles = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
    textAlign: "center",
  };

  const infoStyles = {
    fontSize: "18px",
    marginBottom: "10px",
    textAlign: "center",
  };

  return (
    <div style={contactStyles}>
      <h1 style={headingStyles}>Contact Us</h1>
      <p style={infoStyles}>Email: example@example.com</p>
      <p style={infoStyles}>Phone: 123-456-7890</p>
      <p style={infoStyles}>Address: 123 Street, City, Country</p>
    </div>
  );
};

export default Contact;
