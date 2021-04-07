import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  NavLink
} from 'reactstrap';

import fitup from "../img/FitUP.png";
import budgetTracker from "../img/budgetTracker.png";
import informedTrades from '../img/informedTrades.png'
import fitnessTracker from '../img/fitnessTracker.png';
import myTeam from '../img/myTeam.png';  
import dynamicWines from '../img/dynamicWines.png';
import "../styles/portfolio.css";


const items = [
  {
    src: fitup,
    altText: 'FitUp',
    caption: '|FitUp on Github|',
    header: "FitUp",
    href: "http://project-two-2020.herokuapp.com/",
    github: "https://github.com/JonMisner/FitUp"
  },
  {
   src: budgetTracker,
   altText: 'Budget Tracker',
   caption: '|Budget Tracker on Github|',
   header: "Budget Tracker",
   href: "https://jm-budget-tracker.herokuapp.com/",
   github: "https://github.com/JonMisner/pwaBudgetTracker"
 },
 {
   src: informedTrades,
   altText: 'Informed Trades',
   caption: '|Informed Trades on Github|',
   header: "Informed Trades",
   href: "https://github.com/JonMisner/Informed_Trades",
   github: "https://jonmisner.github.io/Informed_Trades/"
 },
 {
   src: fitnessTracker,
   altText: 'Workout Tracker',
   caption: '|Workout Tracker on Github|',
   header: "Workout Tracker",
   href: "https://workout-jm.herokuapp.com/",
   github: "https://github.com/JonMisner/workoutTracker"
 },
 {
   src: myTeam,
   altText: 'Team Builder',
   caption: '|Team Builder on Github|',
   header: "Team Builder",
   href: "https://github.com/JonMisner/teamProfileGenerator",
   github: "https://github.com/JonMisner/teamProfileGenerator"
 },
 {
  src: dynamicWines,
  altText: "Dynamic Wines",
  caption: "|Dynamic Wines on Github|",
  header: "Dynamic Winelist",
  href: "https://dynamic-wines.herokuapp.com/",
  github: "https://github.com/JonMisner/dynamicwines2",
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
         <NavLink href={item.href} target="_blank">
         <img className="slides"src={item.src} alt={item.altText} href={item.href} />
         </NavLink>
         
         <NavLink href={item.github} target="_blank">
         <CarouselCaption className="captions" captionText={item.caption}  />
         </NavLink>
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