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
              <div className="frame">
                <div className="group">
                  <div className="overlap-group">
                    <p className="will-nleats-provide">How can I contribute or support the NL Eats Program?</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rectangle" />
            <img className="line" alt="Line" src="line-5.svg" />
            <img className="img" alt="Line" src="line-6.svg" />
          </div>
          <div className="we-welcome-support-wrapper">
            <p className="we-welcome-support">
              <span className="text-wrapper">
                We welcome support in various forms including volunteering, donations, and partnerships. Please contact
                us at{" "}
              </span>
              <a href="mailto:communications@nleats.com" rel="noopener noreferrer" target="_blank">
                <span className="span">communications@nleats.com</span>
              </a>
              <span className="text-wrapper"> to learn more about how you can contribute.</span>
            </p>
          </div>
        </>
      )}

      {state.property1 === "variant-2" && (
        <div className="overlap">
          <div className="frame-wrapper">
            <div className="group-wrapper">
              <div className="overlap-group-wrapper">
                <div className="overlap-group">
                  <p className="will-nleats-provide">How can I contribute or support the NL Eats Program?</p>
                </div>
              </div>
            </div>
          </div>
          <div className="group-2">
            <img className="line-2" alt="Line" src="line-1.svg" />
            <img className="line-3" alt="Line" src="line-2.svg" />
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
