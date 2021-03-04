import React, { useState } from 'react';


function Logo({ children }) {
    return (
        <span className="word">
            {children.split("").map((letter, letterIndex) => (
                <React.Fragment>
                    <Letter key={letterIndex} letter={letter} />
                </React.Fragment>
            ))}
        </span>
    );
}

function Letter({ letter }) {
    return (
        <span className="letter">
            {letter}
        </span>
    );
}

export default Logo;