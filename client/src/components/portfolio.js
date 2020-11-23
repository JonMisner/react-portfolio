import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import fitup from "../img/FitUP.png";
import budgetTracker from "../img/budgetTracker.png";
import informedTrades from '../img/informedTrades.png'
import fitnessTracker from '../img/fitnessTracker.png';
import myTeam from '../img/myTeam.png';  
import workDayPlanner from '../img/workDayPlanner.png';
import "../styles/portfolio.css";

const items = [
  {
    src: fitup,
    altText: 'FitUp',
    caption: 'FitUp App',
    header: "FitUp Github"
  },
  {
   src: budgetTracker,
   altText: 'Budget Tracker',
   caption: 'Budget Tracker App',
   header: "Budget Tracker Github"
 },
 {
   src: informedTrades,
   altText: 'Informed Trades',
   caption: 'Informed Trades App',
   header: "Informed Trades Github"
 },
 {
   src: fitnessTracker,
   altText: 'Fitness Tracker',
   caption: 'Fitness Tracker App',
   header: "Fitness Tracker Github"
 },
 {
   src: myTeam,
   altText: 'Team Builder',
   caption: 'Team Builder App',
   header: "Team Builder Github"
 },
 {
   src: workDayPlanner,
   altText: 'Workday Planner',
   caption: 'Workday Planner App',
   header: "Workday Planner Github"
 },
];

const Portfolio = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        data-interval="7000"
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img className="slides"src={item.src} alt={item.altText} />
       
        <CarouselCaption className="captions" captionText={item.caption}  />
        <CarouselCaption className="captionHeader" captionHeader={item.header} />
        
      </CarouselItem>
    );
  });

  return (
    <Carousel
      data-interval="7000"
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Portfolio;