import React from "react";
import {Component4} from "../Component4/Component4";
import "./style.css";

export const ComponentVariant = () => {
    return (
        <div className="component-variant">
            <div className="overlap-2">
                <Component4
                className="component-2"
                frameGroupClassName="component-instance"
                frameImg="line-2-4.svg"
                frameLine="line-1-3.svg"
                framePropertyOpenedClassName="component-2-instance"
                frameText="How can I contribute or support the NLEats program?"
                property1="variant-2"
                />
                <div className="group-3">
                    <img className="line-6" alt="Line" src="line-1-2.svg"/>
                    <img className="line-7" alt="Line" src="line-2-3.svg"/>
                </div>
            </div>
        </div>
    );
};