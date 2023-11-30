import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const PropertyOpenedWrapper = ({ property1, className }) => {
    const [state, dispatch] = useReducer(reducer, {
        property1: property1 || "opened",
    });

    return (
        <div
            className={`frame ${state.property1} ${className}`}
            onClick={() => {
                dispatch("click");
            }}
        >
            <div className="group">
                <div className="overlap-group">
                    <p className="text-wrapper">Will NLEats provide support throughout?</p>
                    <div className="div">
                        <img className="line" alt="Line" src={state.property1 === "opened" ? "line-1.svg" : "image.svg"} />
                        <img className="img" alt="Line" src={state.property1 === "opened" ? "line-2.svg" : "line-2-2.svg"} />
                    </div>
                </div>
            </div>
            {state.property1 === "opened" && (
                <div className="frame-wrapper">
                    <div className="div-wrapper">
                        <p className="p">
                            Yes, NLEats is committed to providing continuous support throughout the program to ensure participants have a rewarding and educational experience.
                        </p>
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

PropertyOpenedWrapper.propTypes = {
    property1: PropTypes.oneOf(["closed", "opened"]),
};