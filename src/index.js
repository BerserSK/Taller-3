import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';

import Users from './pages/User';
import CardUser from './components/carduser/CardUser';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/user/' element={<Users/>}/>
      <Route path='/user-card/' element={<CardUser/>}/>
    </Routes>
  </BrowserRouter>
);

