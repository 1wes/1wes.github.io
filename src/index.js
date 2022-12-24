import ReactDom from 'react-dom/client';
import React from 'react';
import Game from './App';
import {HashRouter, Routes, Route} from 'react-router-dom'
import Howtoplay from './components/Instructions/how-to-play';

const root=ReactDom.createRoot(document.getElementById("root"));

root.render(
  // all rendering goes inside HashRouter
  // enables storing the URL in the hash portion since it cannot be sent to the server in github Pages

  <HashRouter hashType='slash'>
    <Routes>
      <Route path='/' element={<Game/>} />
      <Route path='instructions' element={<Howtoplay/>} />
    </Routes>
  </HashRouter>
);