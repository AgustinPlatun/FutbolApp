import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navBar/navBar';

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/login" element={<div>Login Page</div>} />
          <Route path="/register" element={<div>Register Page</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
