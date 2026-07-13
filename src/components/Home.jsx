import React from "react";
import NavigationBar from "./NavigationBar";

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="text-center">
        <NavigationBar />

        <h1 className="text-danger fw-bold">
          🩸 Blood Bank Management System
        </h1>

        <p className="lead mt-3">
          Welcome to the Blood Bank Management System.
          This application helps manage blood donors and
          maintain donor records efficiently.
        </p>

        <img
          src="https://cdn-icons-png.flaticon.com/512/2966/2966489.png"
          alt="Blood Donation"
          width="200"
          className="my-4"
        />

        

      </div>
    </div>
  );
};

export default Home;