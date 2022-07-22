import Image from './Images/quizbackground.jpg'
import './App.css';
import Quiz from './Components/Quiz';


function App() {
  return (
    <div className="App" style={{
      backgroundImage: `url(${Image})`
    }}>
      <div>
         <h1>Quiz App</h1>
      </div>
      <Quiz/>
    </div>
  );
}

export default App;
