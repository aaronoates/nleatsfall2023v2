import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Group = ({ property1 }) => {
    const [state, dispatch] = useReducer(reducer, {
        property1: property1 || "default",
    });

    return (
        <div
            className={`group ${state.property1}`}
            onClick={() => {
                dispatch("click");
            }}
        >
            <p className="text-wrapper">Is the initiative open to all schools?</p>
        </div>
    );
};

function reducer(state, action) {
    switch (action) {
        case "click":
            return {
                ...state,
                property1: "clicked",
            };
    }

    return state;
}

Group.propTypes = {
    property1: PropTypes.oneOf(["clicked", "hover", "default" ]),
};