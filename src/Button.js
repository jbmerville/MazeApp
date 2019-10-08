import React from "react"

const Button = (props) => {

    const click = event => {
        props.onClick();
    }

    return (
        <div className="button-container" onClick={click}>
            <div className="button-text">{props.text}</div>
        </div>
    );

};

export default Button;