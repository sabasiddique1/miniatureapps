import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Layout/NavBar/NavBar";
import Quiz from "./Apps/Quiz/quiz";
import TodoListApp from "./Apps/TodoListApp/todoListApp";
import PomodoroTimer from "./Apps/PomodoroTimer/pomodoroTimer";
import Calculator from "./Apps/Calculator/calculator";
import WeatherApp from "./Apps/WeatherApp/weatherApp";
import MemoryCard from "./Apps/MemoryCard/memoryCard";
import { Switch, Route } from "react-router-dom";
import SlideShow from "./Components/Slideshow/slideShow";
import './App.css'

const App = () => {
  return (
    <div>
      <>
        <NavBar />
        <Switch>
          <div>
            <Route path="/calculator-app" component={Calculator} />
            <Route path="/weather-app" component={WeatherApp} />
            <Route path="/todolist-app" component={TodoListApp} />
            <Route path="/quiz-app" component={Quiz} />
            <Route path="/pomodoro-app" component={PomodoroTimer} />
            <Route path="/memorycard-app" component={MemoryCard} />
            <Route exact path="/" component={SlideShow} />
          </div>
        </Switch>
      </>
    </div>
  );
};

export default App;
