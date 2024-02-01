import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './style.css';
import dental from '../../assets/images/dental.png'
import preg from '../../assets/images/preg.png'
import child from '../../assets/images/child.png'
import Physio from '../../assets/images/Physio.png'
import physician from  '../../assets/images/physician.png'
import nutrition1 from '../../assets/images/nutrition1.png'
import ortho from '../../assets/images/ortho.png'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1
  }
};

const sliderData = [
  {
    url: dental,
    text: "Dental",
    description: "Dental care is essential for maintaining good oral health."
  },
  {
    url: preg,
    text: "Pregnancy",
    description: "Ensuring a healthy pregnancy for both the mother and the baby."
  },
  {
    url: child,
    text: "Child Health",
    description: "Promoting the well-being of children through proper healthcare."
  },
  {
    url: Physio,
    text: "Physiotherapy",
    description: "Rehabilitation and exercises to improve physical well-being."
  },
  {
    url: physician,
    text: "Physician Consultation",
    description: "Consult with experienced physicians for medical advice."
  },
  {
    url: ortho,
    text: "Orthopedics",
    description: "Specialized care for musculoskeletal system disorders."
  },
  {
    url: nutrition1,
    text: "Nutrition",
    description: "Balanced nutrition is vital for overall health and wellness."
  },
];

const Slider = () => {
  return (
    <div className="parent">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderData.map((slide, index) => (
          <div className="slider-container" key={index}>
            <div className="image-box">
              <img src={slide.url} alt={`Slide ${index + 1}`} />
            </div>
            <div className="text-box">
              <h1 className="title">{slide.text}</h1>
              <p className="para">{slide.description}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
