// SampleNextArrow.tsx and SamplePrevArrow.tsx
import React from 'react';
import './Review.css'; // Include your CSS file

export const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={`${className} arrow next-arrow`} style={{ ...style }} onClick={onClick} />
  );
};

export const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={`${className} arrow prev-arrow`} style={{ ...style }} onClick={onClick} />
  );
};
