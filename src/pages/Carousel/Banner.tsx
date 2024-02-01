import React from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";
import HeartHealth from '../../assets/images/HeartHealth.png'
import healthcare from '../../assets/images/healthcare.png'
import Nutrition from '../../assets/images/Nutrition.png'
export default function CarouselCrossfade(): JSX.Element {
  return (
    <>
      <TECarousel showControls showIndicators crossfade ride="carousel">
        <div className="static w-full overflow-hidden after:clear-both after:block after:content-['']">
          <TECarouselItem
            itemID={1}
            className="static float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[500ms] ease-in-out motion-reduce:transition-none my-10"
          >
            <img
              src={healthcare}
              className="block w-full"
              alt="..."
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={2}
            className="static float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[500ms] ease-in-out motion-reduce:transition-none my-10"
          >
            <img
              src={HeartHealth}
              className="block w-full"
              alt="..."
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={3}
            className=" relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[500ms] ease-in-out motion-reduce:transition-none my-10"
            style={{ paddingBottom: '0.35rem' }}
          >
            <img
              src={Nutrition}
              className="block w-full"
              alt="..."
            />
          </TECarouselItem>
        </div>
      </TECarousel>
    </>
  );
}