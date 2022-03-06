import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import CheckIn from './pages/CheckIn/CheckIn';
import CheckInSuccess from './pages/CheckInSuccess/CheckInSuccess';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path='/checkin' element={<CheckIn/>} />
          <Route path='/checkin-success' element={<CheckInSuccess />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
