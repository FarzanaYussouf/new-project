// Parallax.js
import React, { useEffect, useState } from 'react';
import './Parallax.css';

const Parallaxsection= ({ image1, image2, title, content }) => {
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const backgroundImage = scrollY > 300 ? image2 : image1; // Switch images based on scroll position

    return (
        <div className="parallax"id='banner' style={{ backgroundImage: `url(${backgroundImage})`, backgroundPositionY: `${scrollY * 0.5}px` }}>
            <div className="content">
                <h1>{title}</h1>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default Parallaxsection;
