import React from 'react';
import './main.css' // Make sure to create this CSS file

const CustomScrollbar = () => {
    return (
        <div className="scrollable-container"id="About">
            <h1 className='text-center'>About us</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse 
                suscipit, nunc a cursus aliquam, massa dui luctus nunc, at dapibus 
                leo eros in nisi. Quisque viverra est sed nunc vulputate, sed suscipit 
                purus malesuada. Mauris non mi ac nunc blandit tempor. Donec id orci 
                eu arcu malesuada dignissim.
            </p>
            {/* Repeat the content to enable scrolling */}
            <p>{'Lorem ipsum '.repeat(50)}</p>
        </div>
    );
};

export default CustomScrollbar;
