import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import CheckIn from './pages/CheckIn/CheckIn';
import CheckInSuccess from './pages/CheckInSuccess/CheckInSuccess';
import CheckOut from './pages/CheckOut/CheckOut';
import AdminLogin from './pages/AdminLogin/AdminLogin';
import ViewReservations from './pages/ViewReservations/ViewReservations';
import AdminTools from './pages/AdminTools/AdminTools';
import EditSession from './pages/EditSession/EditSession';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path='/checkin' element={<CheckIn/>} />
          <Route path='/checkin-success' element={<CheckInSuccess />} />
          <Route path='/checkout' element={<CheckOut />} />
          <Route path='/login' element={<AdminLogin />} />
          <Route path='/reservations' element={<ViewReservations />} />
          <Route path='/admin-tools' element={<AdminTools />} />
          <Route path='/edit-session' element={<EditSession />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
