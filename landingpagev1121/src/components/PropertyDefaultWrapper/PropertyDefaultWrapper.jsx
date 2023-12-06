import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Component } from "./ComponentVariant/Component/Component.jsx";
import "./style.css";

export const PropertyDefaultWrapper = ({ property1, className }) => {
    const [state, dispatch] = useReducer(reducer, {
        property1: property1 || "default",
    });

    return (
        <div
            className={`property-default-wrapper property-1-${state.property1} ${className}`}
            onClick={() => {
                dispatch("click");
            }}
        >
            {state.property1 === "default" && (
                <div className="overlap-2">
                    <div className="component-variant">
                        <div className="overlap-3">
                            <Component
                                className="component-2"
                                frameGroupClassName="component-instance"
                                frameImg="line-2-3.svg"
                                frameLine="line-1-2.svg"
                                framePropertyOpenedClassName="component-2-instance"
                                frameText="Do I need any prior knowledge to attend the sessions?"
                                property1="variant-2"
                            />
                            <div className="overlap-wrapper">
                                <div className="overlap-4">
                                    <div className="rectangle-2" />
                                    <img className="line-6" alt="Line" src="line-1-3.svg" />
                                    <img className="line-7" alt="Line" src="line-2-4.svg" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rectangle-3" />
                    <img className="line-8" alt="Line" src="line-9.svg" />
                    <img className="line-9" alt="Line" src="line-10.svg" />
                </div>
            )}

            {state.property1 === "variant-2" && (
                <>
                    <div className="div-2">
                        <div className="div-2">
                            <div className="overlap-5">
                                <Component
                                    className="instance-node"
                                    frameGroupClassName="component-3"
                                    frameImg="line-2-5.svg"
                                    frameLine="line-1-4.svg"
                                    framePropertyOpenedClassName="component-2-instance"
                                    frameText="Do I need any prior knowledge to attend the sessions?"
                                    property1="variant-2"
                                />
                                <div className="group-3" />
                            </div>
                        </div>
                        <img className="line-10" alt="Line" src="line-7.svg" />
                        <img className="line-11" alt="Line" src="line-8.svg" />
                    </div>
                    <div className="frame-2">
                        <p className="p">
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

PropertyDefaultWrapper.propTypes = {
    property1: PropTypes.oneOf(["variant-2", "default"]),
};