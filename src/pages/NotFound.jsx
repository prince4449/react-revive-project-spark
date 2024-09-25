// src/components/NotFound.js
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={styles.container}>
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes slideIn {
            from {
              transform: translateY(-20px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `}
      </style>
      <h1 style={{ ...styles.title, animation: "slideIn 1s ease-in-out" }}>
        404 - Page Not Found
      </h1>
      <p
        style={{
          ...styles.description,
          animation: "slideIn 1s ease-in-out 0.5s",
        }}
      >
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link
        to="/"
        style={{ ...styles.button, animation: "slideIn 1s ease-in-out 1s" }}
      >
        Go to Home
      </Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    animation: "fadeIn 1s ease-in-out",
  },
  title: {
    fontSize: "3rem",
    marginBottom: "20px",
  },
  description: {
    fontSize: "1.2rem",
    marginBottom: "20px",
  },
  button: {
    display: "inline-block",
    padding: "10px 20px",
    fontSize: "1rem",
    color: "#fff",
    backgroundColor: "#3f51b5",
    border: "none",
    borderRadius: "5px",
    textDecoration: "none",
    transition: "background-color 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#303f9f",
  },
};

export default NotFound;
