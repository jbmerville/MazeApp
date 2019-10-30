import React from "react"

const Button = (props) => {

    const handleClick = event => {
        let onClick = props.onClick;
        let funcName = onClick.name.split(" ")[1];
        switch (funcName) {
            case "reset":
                onClick(false);
                break;
            default:
                onClick();
                break;
        }
        
    }

    return (
        <div className="button-container" onClick={handleClick}>
            <div className="button-text" >{props.text}</div>
        </div>
    );

};

export default Button;