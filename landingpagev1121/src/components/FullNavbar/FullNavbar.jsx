import React from "react";
import "./style.css";

export const FullNavbar = () => {
  return (
    <div className="full-navbar">
      <div className="overlap">
        <div className="rectangle" />
        <div className="div" />
        <div className="NAVBAR" />
        <img className="join-the-hydroponics" alt="Join the hydroponics" src="join-the-hydroponics-revolution.svg" />
        <p className="text-wrapper">Cultivating a Greener Future through Innovative Education</p>
        <img className="arrow" alt="Arrow" src="arrow-1.svg" />
        <div className="NAVBAR-2">
          <div className="text-wrapper-2">NL Eats</div>
          <div className="overlap-group">
            <div className="text-wrapper-3">Home</div>
            <div className="text-wrapper-4">About</div>
            <div className="text-wrapper-5">Projects</div>
            <button className="button">
              <div className="overlap-group-2">
                <div className="rectangle-2" />
                <div className="text-wrapper-6">Sign Up</div>
              </div>
            </button>
          </div>
          <img className="nleats" alt="Nleats" src="nleats-3-1.png" />
          <img className="untitled-design" alt="Untitled design" src="untitled-design-2-1.png" />
        </div>
      </div>
    </div>
  );
};
