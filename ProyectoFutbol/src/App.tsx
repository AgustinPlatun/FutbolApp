import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navBar/navBar';

import './App.css';

function App() {
  return (
      <div>
        <Navbar />
        <h1>Inicio</h1>
      </div>
  );
}

export default App;
