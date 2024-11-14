import React from 'react';

function Newsletter() {
    return (
        <div className="newsletter-container">
            <h2>Want First Dibs?</h2>
            <p>Join our email list and be the first to know about new limited edition products, material innovations, and lots of other fun updates.</p>
            <input type="email" placeholder="Enter Your Email Address" />
            <button>Sign Up</button>
            <p>Note: You can opt-out at any time. See our Privacy Policy and Terms.</p>
        </div>
    );
}

export default Newsletter;
