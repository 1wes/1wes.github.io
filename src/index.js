import ReactDom from 'react-dom';
import React from 'react';
import Game from './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Howtoplay from './components/Instructions/how-to-play';

const root=document.getElementById("root");

ReactDom.render(
  // all rendering goes inside BrowserRouter 
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Game />} />
        <Route path='instructions' element={<Howtoplay />} />
       <Route />
    </Routes>
  </BrowserRouter>, root
);