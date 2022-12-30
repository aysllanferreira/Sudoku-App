import React, { useState, useEffect } from 'react';
import './Game.scss';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getSudoku } from 'sudoku-gen';
import Container from 'react-bootstrap/Container';
import Navbar from '../../components/Header';
import logicSudoku from '../../constants/logicSudoku';

function Game() {
  const { difficulty, playerName } = useSelector((state) => state.player);

  const history = useHistory();
  // eslint-disable-next-line no-unused-vars
  const [sudoku, setSudoku] = useState(getSudoku(difficulty).solution.split(''));

  useEffect(() => {
    if (playerName === '') {
      history.push('/');
    }
  }, [playerName, history]);

  return (
    <div className="Game">
      <Navbar />
      <Container>
        {logicSudoku()}
      </Container>
    </div>
  );
}

export default Game;
