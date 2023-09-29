import './App.css';
import './styles/sb-admin-2.min.css'

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes} from 'react-router';
import { Admin } from './pages/Admin/Admin';
import { Login } from './pages/Account/Login';

function App() {
  return (
    <div className="App" id='wrapper'>
      <Router>
        <Routes>
        <Login></Login>
        <Admin></Admin>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
