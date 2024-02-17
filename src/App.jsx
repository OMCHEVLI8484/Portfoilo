import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <Router>
      <div className="grid grid-cols-12 h-screen relative w-100">
        <Sidebar />
        
        <div className="col-span-11 p-0">
          <Home/>
        </div>
      </div>
    </Router>
  );
}

export default App;
