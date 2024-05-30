import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Backworkout from './components/Backworkout';
import Legworkout from './components/Legworkout';
import HomePage from './components/HomePage';
import Chestworkout from './components/ChestWorkout';

  
    
function App() {
      
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Leg-workout" element={<Legworkout />} />
        <Route path="/Back-workout" element={<Backworkout />} />
        <Route path="/Chest-workout" element={<Chestworkout />} />
      </Routes>
    </Router>
  );
}

export default App;
