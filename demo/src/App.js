import React from 'react';
import { Router } from "@reach/router";

import TabContainer from './components/TabContainer';
import NavLink from './components/NavLink';

import Profile from './components/Profile';
import Albums from './components/Albums';
import Voting from './components/Voting';

import './App.css';

function App() {
  return (
    <div className="app">
      <h1 className="coldpedia-title">COLDPEDIA</h1>
      <nav>
        <NavLink to="/">Profile</NavLink>
        <NavLink to="albums">Albums</NavLink>
        <NavLink to="voting">Voting</NavLink>
      </nav>
      <TabContainer>
        <Router>
          <Profile path="/" />
          <Albums path="albums" />
          <Voting path="voting" />
        </Router>
      </TabContainer>
    </div>
  );
}

export default App;
