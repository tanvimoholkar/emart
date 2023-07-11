import React from "react";

const Login = () => {
  const pageStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "url(/assets/bg.jpg)",
  };

  const formStyles = {
    background: "url(/assets/bg.jpg)",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
  };

  const inputStyles = {
    marginBottom: "10px",
    padding: "8px",
    width: "100%",
    boxSizing: "border-box",
  };

  const buttonStyles = {
    padding: "8px 16px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <div style={pageStyles}>
      <form style={formStyles}>
        <h2>Login</h2>
        <input style={inputStyles} type="text" placeholder="Username" />
        <input style={inputStyles} type="password" placeholder="Password" />
        <button style={buttonStyles}>Login</button>
      </form>
    </div>
  );
};

export default Login;
