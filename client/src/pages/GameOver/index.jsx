import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './GameOver.scss';
import Navbar from '../../components/Navbar';

function GameOver() {
  return (
    <>
      <Navbar />
      <div className="GameOver">
        <Container>
          <h1>Game Over!</h1>

          <p>Thanks for playing!</p>
          <Button variant="primary" href="/">Play again</Button>
        </Container>
      </div>
    </>
  );
}

export default GameOver;
