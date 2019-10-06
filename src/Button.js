import React from "react"

const Button = (props) => {

    return (
        <div className="button-container">
            <div className="button-text">{props.text}</div>
            <div className="button-subtext">{props.subtext}</div>
        </div>
    );

};

export default Button;