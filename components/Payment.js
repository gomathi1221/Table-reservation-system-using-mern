// src/components/Payment.js
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Payment.css'; // Import your CSS file

const Payment = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { table } = location.state || {}; // Get the table data passed from the previous page

    const [paymentMethod, setPaymentMethod] = useState(''); // State to track selected payment method

    if (!table) {
        return <div>No table selected.</div>; // Handle case where no table is selected
    }

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value); // Update the selected payment method
    };

    const handleConfirmPayment = () => {
        // Here you can handle the payment processing logic
        // For now, we'll just navigate to a confirmation page or show a success message
        alert(`Payment confirmed using ${paymentMethod}`);
        navigate('/confirmation'); // Navigate to a confirmation page (you can create this page)
    };

    return (
        <div className="payment-container">
            <h1 className="payment-title">Payment Details</h1>
            <div className="payment-details">
                <h2 className="table-name">{table.name}</h2>
                <p><strong>Price:</strong> {table.price}</p>
                <p><strong>Availability:</strong> {table.availability}</p>
                <p><strong>Timing:</strong> {table.timing}</p>
                <p><strong>Seats:</strong> 4</p> {/* Example seat count */}
                
                <p><strong>Select Payment Method:</strong></p>
                <select value={paymentMethod} onChange={handlePaymentMethodChange}>
                    <option value="">--Select Payment Method--</option>
                    <option value="credit-card">Credit Card</option>
                    <option value="debit-card">Debit Card</option>
                    <option value="paypal">PayPal</option>
                </select>

                {paymentMethod === 'credit-card' && (
                    <div>
                        <h3>Credit Card Details</h3>
                        <input type="text" placeholder="Card Number" required />
                        <input type="text" placeholder="Cardholder Name" required />
                        <input type="text" placeholder="Expiry Date (MM/YY)" required />
                        <input type="text" placeholder="CVV" required />
                    </div>
                )}

                {paymentMethod === 'debit-card' && (
                    <div>
                        <h3>Debit Card Details</h3>
                        <input type="text" placeholder="Card Number" required />
                        <input type="text" placeholder="Cardholder Name" required />
                        <input type="text" placeholder="Expiry Date (MM/YY)" required />
                        <input type="text" placeholder="CVV" required />
                    </div>
                )}

                {paymentMethod === 'paypal' && (
                    <div>
                        <h3>PayPal Details</h3>
                        <input type="email" placeholder="PayPal Email" required />
                    </div>
                )}

                <button onClick={handleConfirmPayment} className="confirm-payment-button">Confirm Payment</button>
            </div>
        </div>
    );
};

export default Payment;