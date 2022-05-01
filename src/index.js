import ReactDom from 'react-dom';
import React from 'react';
import Game from './App';
import {BrowserRouter} from 'react-router-dom'

const root=document.getElementById("root");

ReactDom.render(
  // all rendering goes inside BrowserRouter 
  <BrowserRouter>
    <Game />
  </BrowserRouter>, root
);