import React, { useEffect, useState } from 'react';
import './cursor.css'; // Import the CSS file for styling

const Cursor = () => {
    const [cursorStyle, setCursorStyle] = useState({});

    const handleMouseMove = (e) => {
        setCursorStyle({
            left: e.clientX,
            top: e.clientY,
        });
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return <div className="cursor" style={cursorStyle}></div>;
};

export default Cursor;
