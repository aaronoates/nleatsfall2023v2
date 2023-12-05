/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/
import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Component = ({property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "opened",
  });
  return (
    <div
      className={`component ${state.property1} ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      {state.property1 === "opened" && (
        <>
          <div className="group">
            <div className="overlap">
              <div className="rectangle" />
              <p className="what-measures-are-in">
                <span className="text-wrapper">What measures are in place to ensure the safety and well-</span>
                <span className="span">being of all participants?</span>
              </p>
              <div className="overlap-group-wrapper">
                <div className="overlap-group">
                  <div className="div" />
                  <img className="line" alt="Line" src="line-1.svg" />
                  <img className="img" alt="Line" src="line-2.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className="frame">
            <p className="p">
              We adhere to all recommended health and safety guidelines to ensure the well-being of our participants.
              More details can be provided upon request.
            </p>
          </div>
        </>
      )}


      {state.property1 === "closed" && (
        <div className="div-wrapper">
          <div className="overlap-group-2">
            <p className="text-wrapper-2">
              What measures are in place to ensure the safety and well-being of all participants?
            </p>
            <div className="group-2">
              <img className="line-2" alt="Line" src="image.svg" />
              <img className="line-3" alt="Line" src="line-2-2.svg" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

function reducer(state, action) {
  if (state.property1 === "opened") {
    switch (action) {
      case "click":
        return {
          property1: "closed",
        };
    }
  }

  if (state.property1 === "closed") {
    switch (action) {
      case "click":
        return {
          property1: "opened",
        };
    }
  }

  return state;
}
       
Component.propTypes = {
  property1: PropTypes.oneOf(["closed", "opened"]),
};