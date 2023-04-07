import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Introduce from './pages/introduce/Introduce.jsx'
import Quiz from './pages/quiz/Quiz.jsx'

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Introduce/>} />
          <Route path="/quiz/:diffuculty/:amount" element={<Quiz/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
