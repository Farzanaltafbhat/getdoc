import React from 'react';
import './Cards.css'; // Import your CSS file for styling
import lab from '../../assets/images/lab.png'
import doc from '../../assets/images/doc.png'
import iphone from '../../assets/images/iphone.png'

const Cards = () => {
  const handleButtonClick = (title) => {
    // Implement your action when a card is clicked
    console.log(`${title} button clicked`);
  };

  return (
    <div className="cards-container">
      <button className="card3" onClick={() => handleButtonClick('iPhone')}>
        <img src={iphone} alt="iPhone Card" className="card-image3" />
        <div className="card-content">
          <h2 className="card-title">Instant Video Consultation</h2>
          <p className="card-description">Connect within 60 secs</p>
        </div>
      </button>
      <button className="card2" onClick={() => handleButtonClick('Doctor')}>
        <img src={doc} alt="Doctor Card" className="card-image2" />
        <div className="card-content">
          <h2 className="card-title">Find Doctors Near You</h2>
          <p className="card-description">Confirmed Appointments</p>
        </div>
      </button>
      <button className="card1" onClick={() => handleButtonClick('Lab')}>
        <img src={lab} alt="Lab Card" className="card-image1" />
        <div className="card-content">
          <h2 className="card-title">Lab Tests</h2>
          <p className="card-description">Sample Pickup at your Location</p>
        </div>
      </button>
    </div>
  );
};

export default Cards;
