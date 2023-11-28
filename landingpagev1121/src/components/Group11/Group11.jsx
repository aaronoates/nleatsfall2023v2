import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Group11 = ({ property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "opened",
  });

  return (
    <div
      className={`group ${state.property1} ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      {state.property1 === "opened" && (
        <>
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <p className="text-wrapper">How much space is needed for hydroponics?</p>
              <div className="div">
                <img className="line" alt="Line" src="line-1.svg" />
                <img className="img" alt="Line" src="line-2.svg" />
              </div>
            </div>
          </div>
          <div className="frame">
            <p className="p">
              The space requirement can vary depending on the scale of the hydroponic system. However, hydroponics is
              known for its space-efficiency. Our team will work with you to decide system requirements for the
              workshops based on the available space.
            </p>
          </div>
        </>
      )}

      {state.property1 === "closed" && (
        <div className="div-wrapper">
          <div className="overlap-group">
            <p className="text-wrapper">How much space is needed for hydroponics?</p>
            <div className="div-2">
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

Group11.propTypes = {
  property1: PropTypes.oneOf(["closed", "opened"]),
};
