import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Review.css'; // Include your CSS file
import { SampleNextArrow } from './Arrow';
import { SamplePrevArrow } from './Arrow';

const reviews = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "John Doe",
    icon: "👤", // Replace with your desired icon
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "John Doe",
    icon: "👤", // Replace with your desired icon
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "John Doe",
    icon: "👤", // Replace with your desired icon
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "John Doe",
    icon: "👤", // Replace with your desired icon
  },
  // Add more reviews as needed
];

const ReviewCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="review-carousel-container">
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="review-slide">
            <div className="blue-container">
              <div className="double-quotes">“</div>
              <p className="review-text">{review.text}</p>
            </div>
            <div className="author-container">
              <div className="translucent-container">
                <div className="icon">{review.icon}</div>
                <div className="author-name">{review.author}</div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewCarousel;
