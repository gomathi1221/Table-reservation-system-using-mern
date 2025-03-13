// src/components/CircularMenu.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Menu.css"; // Ensure CSS file is updated

const menuItems = [
  { name: "Cakes", emoji: "🍰", imageUrl: "path/to/cakes-image.jpg" },
  { name: "Ice Creams", emoji: "🍦", imageUrl: "path/to/ice-creams-image.jpg" },
  { name: "Cool Drinks", emoji: "🥤", imageUrl: "path/to/cool-drinks-image.jpg" },
  { name: "Dry Items", emoji: "🍱", imageUrl: "path/to/dry-items-image.jpg" },
  { name: "Main Course", emoji: "🍛", imageUrl: "path/to/main-course-image.jpg" },
  { name: "Starters", emoji: "🍽️", imageUrl: "path/to/starters-image.jpg" },
  { name: "Snack Items", emoji: "🍿", imageUrl: "path/to/snack-items-image.jpg" },
];

const CircularMenu = () => {
  const radius = 130; // Radius for circular positioning
  const centerX = 150; // Center position X
  const centerY = 150; // Center position Y
  const navigate = useNavigate(); // Hook for navigation

  const handleItemClick = (item) => {
    navigate('/item-details', { state: { item } }); // Navigate to item details page with item data
  };

  return (
    <div className="menu-container">
      <h2>Our Menu</h2>
      <div className="circular-menu">
        {/* Chef Doll in the Center */}
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStVo87PzndqJmzIL_8QX_f1nF_LCvyM_N7AQ&s" alt="Chef" className="chef-doll" />

        {menuItems.map((item, index) => {
          const angle = (index / menuItems.length) * (2 * Math.PI);
          const x = centerX + radius * Math.cos(angle) - 45;
          const y = centerY + radius * Math.sin(angle) - 45;

          return (
            <div
              key={index}
              className="category-button"
              style={{
                left: `${x}px`,
                top: `${y}px`,
                position: "absolute",
                cursor: "pointer", // Change cursor to pointer
              }}
              onClick={() => handleItemClick(item)} // Add click handler
            >
              <span className="emoji">{item.emoji}</span>
              <span className="category-name">{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CircularMenu;


