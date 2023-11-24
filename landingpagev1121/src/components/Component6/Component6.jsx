import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Component = ({ property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`component ${state.property1} ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      {state.property1 === "default" && (
        <>
          <div className="div">
            <div className="div">
              <div className="overlap">
                <div className="frame-wrapper">
                  <div className="frame">
                    <div className="group">
                      <div className="overlap-group">
                        <p className="will-nleats-provide">What age group is the program aimed at?</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group-2" />
              </div>
            </div>
            <img className="line" alt="Line" src="line-11.svg" />
            <img className="img" alt="Line" src="line-12.svg" />
          </div>
          <div className="div-wrapper">
            <p className="text-wrapper">
              Our program primarily targets high-school students but we welcome participants of all ages who are
              interested in combating food insecurity and learning about Agri-tech.
            </p>
          </div>
        </>
      )}

      {state.property1 === "variant-2" && (
        <div className="component-variant">
          <div className="overlap-2">
            <div className="frame-wrapper-2">
              <div className="group-wrapper">
                <div className="overlap-group-wrapper">
                  <div className="overlap-group">
                    <p className="will-nleats-provide">What age group is the program aimed at?</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="overlap-wrapper">
              <div className="overlap-3">
                <div className="rectangle" />
                <img className="line-2" alt="Line" src="line-1.svg" />
                <img className="line-3" alt="Line" src="line-2.svg" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

function reducer(state, action) {
  if (state.property1 === "default") {
    switch (action) {
      case "click":
        return {
          property1: "variant-2",
        };
    }
  }

  if (state.property1 === "variant-2") {
    switch (action) {
      case "click":
        return {
          property1: "default",
        };
    }
  }

  return state;
}

Component.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
};
