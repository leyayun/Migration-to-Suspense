import './App.css';

import React, { lazy, Suspense } from 'react';
import { Router } from "@reach/router";

import TabContainer from './components/TabContainer';
import NavLink from './components/NavLink';
import Profile from './components/Profile';
import Spinner from './components/Spinner';

const Albums = lazy(() => import('./components/Albums'));
const Voting = lazy(() => import('./components/Voting'));

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
        <Suspense fallback={<Spinner />}>
          <Router>
            <Profile path="/" />
            <Albums path="albums" />
            <Voting path="voting" />
          </Router>
        </Suspense>
      </TabContainer>
    </div>
  );
}

export default App;
