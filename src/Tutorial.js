import React from "react";

const Tutorial = props => {
    return (
        <div className="tutorial">
            <div className="title-container">
                <div className="title">
                    Path <br /> Finder
                </div>
            </div>

            <div className="section">
                <div className="section-text">Step 1</div>
                <div className="section-instruction">
                    Draw a maze by holding down your mouse on the gird.
                </div>
            </div>
            <div className="section">
                <div className="section-text">Step 2</div>
                <div className="section-instruction">
                    Drag and drop the start (green) and end (red) cells on the grid.
                </div>
            </div>
            <div className="section">
                <div className="section-text">Step 3</div>
                <div className="section-instruction">
                    Click on the algorithm that you want to run!
                </div>
            </div>
        </div>
    );
};

export default Tutorial;
