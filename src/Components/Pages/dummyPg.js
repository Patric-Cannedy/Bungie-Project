import React from "react";
import '../../CSS/styles.css';

export const UnderCon = () => {
    let colors = ['#ff0000', '#00ff00', '#0000ff'];
    let random = colors[Math.floor(Math.random() * colors.length)];
    let message = 'More Coming Soon!';
    return (
        <div className={'constr-cont'}>
            <div className={'construction'} style={{color: random}}>
                <h1>{message}</h1>
            </div>
        </div>
    )
}