// src/components/NonACTables.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Tables.css'; // Import the combined CSS

const tablesData = [
    {
        id: 1,
        image: "data:image/jpeg;base64,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",
        name: "Non-AC Table 1",
        price: "$20",
        availability: "Available",
        timing: "12:00 PM - 10:00 PM",
    },
    {
        id: 2,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCYaj1cO2y1HhD4AvpwEBJzZmy3EKuG8sqyQ&s",
        name: "Non-AC Table 2",
        price: "$25",
        availability: "Available",
        timing: "12:00 PM - 10:00 PM",
    },
    {
        id: 3,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzRHK-W9Sr3MC7wuuEfPLUFOJwW6cHt8f2hQ&s",
        name: "Non-AC Table 3",
        price: "$30",
        availability: "Available",
        timing: "12:00 PM - 10:00 PM",
    },
    {
        id: 4,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-eAFe-mHoOnpjmEgwu0BUHStLJ6pum931wg&s",
        name: "Non-AC Table 4",
        price: "$35",
        availability: "Available",
        timing: "12:00 PM - 10:00 PM",
    },
    {
        id: 5,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpM2WT0lOAgP3Z4MKggNkxfI_7y7XxBCZVlA&s",
        name: "Non-AC Table 5",
        price: "$40",
        availability: "Available",
        timing: "12:00 PM - 10:00 PM",
    },
    {
        id: 6,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKspyEo6-_QDnlJ0nTWb3flWA8_hRS-_3g_w&s",
        name: "Non-AC Table 6",
        price: "$45",
        availability: "Available",
        timing: "12:00 PM - 10:00 PM",
    },
    {
        id: 7,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgkKElP_qmYhG8Wcwkg5aLdq3CtccWdyfSsQ&s",
        name: "Non-AC Table 7",
        price: "$50",
        availability: "Available",
        timing: "12:00 PM - 10:00 PM",
    },
    {
        id: 8,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROgCG8hsl_tycMaEAOnW8mlKldu9_hNGf59A&s",
        name: "Non-AC Table 8",
        price: "$55",
        availability: "Available",
        timing: "12:00 PM - 10:00 PM",
    },
    {
        id: 9,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKsnC3r6TLkLM0VqGGv_RhinjkUXvxTueaVw&s",
        name: "Non-AC Table 9",
        price: "$60",
        availability: "Available",
        timing: "12:00 PM - 10:00 PM",
    },
    {
        id: 10,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRduz7O_zW12WCKvtU8hb50_iME-tmalpVP0g&s",
        name: "Non-AC Table 10",
        price: "$65",
        availability: "Available",
        timing: "12:00 PM - 10:00 PM",
    },
    {
        id: 11,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzTBMIJZk0u07UWNLktxlwDh7SCk_ciZraAQ&s",
        name: "Non-AC Table 11",
        price: "$70",
        availability: "Available",
        timing: "12:00 PM - 10:00 PM",
    },
    {
        id: 12,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTML8pf41C7f6cVlPZNUmESIASZTtKC9XdIyA&s",
        name: "Non-AC Table 12",
        price: "$75",
        availability: "Available",
        timing: "12:00 PM - 10:00 PM",
    },
];

const NonACTables = () => {
    const navigate = useNavigate();

    const handleBookNowClick = (table) => {
        navigate('/booking-details', { state: { table } }); // Navigate to BookingDetails with table data
    };

    return (
        <div className="tables-container">
            <h1 className="tables-title">Non-AC Tables</h1>
            <p>Enjoy a casual dining experience in our Non-AC area.</p>
            <div className="table-grid">
                {tablesData.map((table) => (
                    <div key={table.id} className="table-card">
                        <img src={table.image} alt={table.name} className="table-image" />
                        <h2 className="table-heading">{table.name}</h2>
                        <p>Price: {table.price}</p>
                        <p>Availability: {table.availability}</p>
                        <p>Timing: {table.timing}</p>
                        <button onClick={() => handleBookNowClick(table)} className="book-now-button">Book Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NonACTables;