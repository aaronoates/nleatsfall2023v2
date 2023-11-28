/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/
import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Component = ({ className }) => {
  return (
    <div className={`component ${className}`}>
      <div className="overlap">
        <div className="frame-wrapper-2">
          <div className="group-wrapper">
            <div className="group-12">
              <div className="will-nleats-provide-wrapper">
                <p className="will-nleats-provide-2">How can I contribute or support the NL Eats Program?</p>
              </div>
            </div>
          </div>
        </div>
        <div className="group-13">
          <img className="line-12" alt="Line" />
          <img className="line-13" alt="Line" />
        </div>
      </div>
    </div>
  );
};
