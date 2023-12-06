import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Frame } from "./Frame/Frame";
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
                    <div className="overlap">
                        <Frame
                            className="frame-11"
                            img="line-2-3.svg"
                            line="line-1-2.svg"
                            property1="closed"
                            text="How can I participate in the NLEats program?"
                        />
                        <div className="rectangle" />
                        <img className="line-4" alt="Line" src="line-3.svg" />
                        <img className="line-5" alt="Line" src="line-4.svg" />
                    </div>
                    <div className="information-wrapper">
                        <p className="information">
                            <span className="span">
                                Information regarding participation can be found on our website or by contacting our program coordinatiors at{" "}
                            </span>
                            <a href="mailto:innovation@nleats.com" rel="noopener noreferrer" target="_blank">
                                <span className="text-wrapper-2">innovation@nleats.com</span>
                            </a>
                            <span className="span">.</span>
                        </p>
                    </div>
                </>
            )}

            {state.property1 === "variant-2" && (
                <Frame
                    className="frame-instance"
                    groupClassName="frame-11-instance"
                    img="line-2-4.svg"
                    line="line-1-3.svg"
                    property1="closed"
                    text="How can I participate in the NLEats program?"
                />
            )}
        </div>
    );
};

function reducer(state, action) {
    if(state.property1 === "default") {
        switch(action) {
            case "click":
                return {
                    property1: "variant-2",
                };
        }
    }

    if(state.property1 === "variant-2") {
        switch(action) {
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