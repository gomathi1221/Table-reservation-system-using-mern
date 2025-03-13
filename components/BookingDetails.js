// src/components/BookingDetails.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './BookingDetails.css'; // Import your CSS file

const BookingDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { table } = location.state || {}; // Get the table data passed from the previous page

    if (!table) {
        return <div>No table selected.</div>; // Handle case where no table is selected
    }

    const handleConfirmBooking = () => {
        navigate('/payment', { state: { table } }); // Navigate to Payment with table data
    };

    return (
        <div className="booking-details-container">
            <h1 className="booking-details-title">Booking Details</h1>
            <div className="table-details">
                <img src={table.image} alt={table.name} className="table-image" />
                <h2 className="table-name">{table.name}</h2>
                <p><strong>Price:</strong> {table.price}</p>
                <p><strong>Availability:</strong> {table.availability}</p>
                <p><strong>Timing:</strong> {table.timing}</p>
                <p><strong>Seats:</strong> 4</p> {/* Example seat count */}
                <p><strong>Calendar Date:</strong> <input type="date" /></p> {/* Calendar input for date selection */}
                <p><strong>Available Timing:</strong> 12:00 PM - 10:00 PM</p>
                <button onClick={handleConfirmBooking} className="confirm-booking-button">Confirm Booking</button>
            </div>
        </div>
    );
};

export default BookingDetails;