import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Index from './pages/Index';
import Game from './pages/Game';
import GameOver from './pages/GameOver';
import YouWin from './pages/YouWin';
import Scoreboard from './pages/Scoreboard';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/game" component={Game} />
        <Route exact path="/game-over" component={GameOver} />
        <Route exact path="/winner" component={YouWin} />
        <Route exact path="/scoreboard" component={Scoreboard} />
      </Switch>
    </div>
  );
}

export default App;
