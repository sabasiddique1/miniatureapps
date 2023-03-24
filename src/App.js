import './App.css';
import PomodoroTimer from './Components/Apps/PomodoroTimer/PomodoroTimer';
import NavBar from './Features/NavBar/NavBar';
import Quiz from './Components/Apps/Quiz/Quiz';




function App() {
  return (
    <div className="App">
     
      <NavBar/>
      <PomodoroTimer/>
     
      <Quiz/>
   </div>
  );
}

export default App;
