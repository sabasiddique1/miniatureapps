import "./SlidesShow.css";
import { useState } from "react";
import Slider from "react-slick";

import CalculatorVid from "../../Assests/Videos/calculatorvideo2.mp4";
import MemoryCardVid from "../../Assests/Videos/memorygamevid.mp4";
import PomodoroTimerVid from "../../Assests/Videos/pomotimervid.mp4";
import QuizVid from "../../Assests/Videos/personalityquizvid.mp4";
import TodolistVid from "../../Assests/Videos/Todolistvideo.mp4";
import WeatherVid from "../../Assests/Videos/videorain.mp4"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Videos = [
  TodolistVid,
  CalculatorVid,
  MemoryCardVid,
  WeatherVid,
  PomodoroTimerVid,
  QuizVid,
];
function App() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  const backCardContents = [
    {
      title: "Todolist App",
      description: "This is the content on the back of the Todolist card.",
      link: "/Todolist-App",
    },
    {
      title: "Calculator App",
      description: "This is the content on the back of the Calculator card.",
      link: "/calculator-app",
    },
    {
      title: "Memory Card Game",
      description:
        "This is the content on the back of the Memory Card Game card.",
      link: "/memorycard-app",
    },
    {
      title: "Weather App",
      description: "This is the content on the back of the Weather App card.",
      link: "/weather-app",
    },
    {
      title: "Pomodoro Timer",
      description:
        "This is the content on the back of the Pomodoro Timer card.",
      link: "/pomodoro-app",
    },
    {
      title: "Quiz App",
      description: "This is the content on the back of the Quiz App card.",
      link: "/quiz-app",
    },
  ];

  return (
    <div className="slider">
      <Slider {...settings}>
        {Videos.map((video, idx) => {
          const isActive = idx === imageIndex;
          const backCard = backCardContents[idx];

          return (
            <div
              className={`flip-card ${isActive ? "active" : "disabled"}`}
              onClick={() => setImageIndex(idx)}
            >
              <div className={`flip-card-inner ${isActive ? "flip" : ""}`}>
                <div className="flip-card-front">
                  <div className={`slide ${isActive ? "activeSlide" : ""}`}>
                    <video src={video} autoPlay loop muted />
                    <div className="card-title">{backCard.title}</div>
                  </div>
                </div>
                <div className="flip-card-back">
                  <a href={backCard.link}>
                    <h3>{backCard.title}</h3>
                    <p>{backCard.description}</p>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default App;
