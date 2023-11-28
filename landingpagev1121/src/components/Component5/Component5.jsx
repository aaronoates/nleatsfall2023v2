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
        <div className="overlap">
          <div className="component-variant">
            <div className="frame-wrapper">
              <div className="frame">
                <div className="group">
                  <div className="overlap-group">
                    <p className="will-nleats-provide">Do I need any prior knowledge to attend the sessions?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rectangle" />
          <img className="line" alt="Line" src="line-9.svg" />
          <img className="img" alt="Line" src="line-10.svg" />
        </div>
      )}

      {state.property1 === "variant-2" && (
        <>
          <div className="div">
            <div className="div">
              <div className="overlap-2">
                <div className="div-wrapper">
                  <div className="frame">
                    <div className="overlap-group-wrapper">
                      <div className="overlap-group">
                        <p className="will-nleats-provide">Do I need any prior knowledge to attend the sessions?</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group-2" />
              </div>
            </div>
            <img className="line-2" alt="Line" src="line-7.svg" />
            <img className="line-3" alt="Line" src="line-8.svg" />
          </div>
          <div className="frame-2">
            <p className="text-wrapper">
              No prior knowledge is required. The sessions are designed to educate individuals from all levels of
              understanding, from beginners to more experienced individuals.
            </p>
          </div>
        </>
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
