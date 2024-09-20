import React from 'react';
import './BlogSection.css'; // Custom CSS file for styles

const BlogSection = () => {
    return (
        <div className="blog-section container ms-3 me-5">
            <div className="overlay">
                <h2 className="text-center fw-bold">Welcome to Our Fast Food Blog</h2>
                <p className="text-center">
                    Discover the latest trends in fast food, recipes, and tips to satisfy your cravings.
                    Stay tuned for exciting posts on delicious burgers, tasty pizzas, and more!
                </p>
            </div>
        </div>
    );
};

export default BlogSection;
