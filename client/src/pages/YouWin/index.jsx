import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import { useHistory, Link } from 'react-router-dom';
import './YouWin.scss';
import Navbar from '../../components/Navbar';

function YouWin() {
  const [record, setRecord] = useState({
    status: false,
    message: '',
    situation: '',
  });

  const { bestTime, playerName, difficulty } = useSelector((state) => state.player);
  const [result, setResult] = useState('');
  const history = useHistory();
  console.log(playerName);

  if (result === '') {
    const minutes = Math.floor(bestTime / 60);
    const seconds = bestTime % 60;
    setResult(`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`);
  }

  useEffect(() => {
    if (playerName === '') {
      history.push('/');
    } else if (localStorage.getItem('score') === null) {
      const score = [];
      score.push({
        playerName,
        difficulty,
        bestTime,
      });
      localStorage.setItem('score', JSON.stringify(score));
      setRecord({
        status: true,
        message: `Congratulations, ${playerName}! You have a new record!!!`,
        situation: `Your time is ${result}!`,
      });
    } else {
      const score = JSON.parse(localStorage.getItem('score'));
      const filterDificulty = score.filter((item) => item.difficulty === difficulty);

      if (filterDificulty.length < 5) {
        score.push({
          playerName,
          difficulty,
          bestTime,
        });

        setRecord({
          status: true,
          message: `Congratulations, ${playerName}! You have a new record!!!`,
          situation: `Your time is ${result}!`,
        });
      } else if (filterDificulty.length === 5 && filterDificulty
        .some((item) => item.bestTime < bestTime)) {
        score.sort((a, b) => a - b);
        if (bestTime < score[0]) {
          score[0] = {
            playerName,
            difficulty,
            bestTime,
          };

          setRecord({
            status: true,
            message: `Congratulations, ${playerName}! You have a new record!!!`,
            situation: `Your time is ${result}!`,
          });
        }
      } else {
        setRecord({
          status: true,
          message: `Congratulations, ${playerName}! You won!!!`,
          situation: `Your time is ${result}!`,
        });
      }
      localStorage.setItem('score', JSON.stringify(score));
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="YouWin">

        <Container>
          <h1>
            {record.status && (
            <>
              {record.message}
              <br />
              {record.situation}
            </>

            )}
          </h1>
          <div className="buttons">
            <Link to="/scoreboard">
              <button type="button" className="btn btn-primary">Scoreboard</button>
            </Link>

            <Link to="/">
              <button type="button" className="btn btn-primary">Home</button>
            </Link>
          </div>
        </Container>

      </div>
    </>
  );
}

export default YouWin;
