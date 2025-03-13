// src/components/CategoryPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const CategoryPage = () => {
    const { name } = useParams(); // Get the category name from the URL

    // Sample images for each category
    const images = {
        Starters: [
            'https://example.com/starter1.jpg',
            'https://example.com/starter2.jpg',
            'https://example.com/starter3.jpg',
        ],
        'Main Course': [
            'https://example.com/maincourse1.jpg',
            'https://example.com/maincourse2.jpg',
            'https://example.com/maincourse3.jpg',
        ],
        'Ice Creams': [
            'https://example.com/icecream1.jpg',
            'https://example.com/icecream2.jpg',
            'https://example.com/icecream3.jpg',
        ],
        // Add more categories and their images as needed
    };

    return (
        <div>
            <h1>{name}</h1>
            <div className="image-gallery">
                {images[name] ? (
                    images[name].map((image, index) => (
                        <img key={index} src={image} alt={name} style={{ width: '200px', margin: '10px' }} />
                    ))
                ) : (
                    <p>No images available for this category.</p>
                )}
            </div>
        </div>
    );
};

export default CategoryPage;