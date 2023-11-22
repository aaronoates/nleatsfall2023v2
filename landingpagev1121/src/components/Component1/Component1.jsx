/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Component1 = ({
  property1,
  className,
  line = "https://cdn.animaapp.com/projects/652581de01736f706d586056/releases/6531aac25a720c9e58e765a2/img/line-1-1.svg",
  img = "https://cdn.animaapp.com/projects/652581de01736f706d586056/releases/6531aac25a720c9e58e765a2/img/line-2-1.svg",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "opened",
  });

  return (
    <div
      className={`component-1 property-1-1-${state.property1} ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      {state.property1 === "opened" && (
        <>
          <div className="overlap-wrapper">
            <div className="overlap-2">
              <div className="rectangle" />
              <p className="what-measures-are-in">
                <span className="span">What measures are in place to ensure the safety and well-</span>
                <span className="text-wrapper-7">being of all participants?</span>
              </p>
              <div className="group-14">
                <div className="overlap-group-3">
                  <div className="rectangle-2" />
                  <img
                    className="line-14"
                    alt="Line"
                    src="https://cdn.animaapp.com/projects/652581de01736f706d586056/releases/653a934ebd425ef3bfe95b9e/img/line-1.svg"
                  />
                  <img
                    className="line-15"
                    alt="Line"
                    src="https://cdn.animaapp.com/projects/652581de01736f706d586056/releases/653a934ebd425ef3bfe95b9e/img/line-2.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="frame-4">
            <p className="text-wrapper-8">
              We adhere to all recommended health and safety guidelines to ensure the well-being of our participants.
              More details can be provided upon request.
            </p>
          </div>
        </>
      )}

      {state.property1 === "closed" && (
        <div className="group-15">
          <div className="overlap-group-4">
            <p className="text-wrapper-9">
              What measures are in place to ensure the safety and well-being of all participants?
            </p>
            <div className="group-16">
              <img className="line-16" alt="Line" src={line} />
              <img className="line-17" alt="Line" src={img} />
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

Component1.propTypes = {
  property1: PropTypes.oneOf(["closed", "opened"]),
  line: PropTypes.string,
  img: PropTypes.string,
};
