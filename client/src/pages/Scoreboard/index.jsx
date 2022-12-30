/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import './Scoreboard.scss';
import { Container, Table } from 'react-bootstrap';
import Navbar from '../../components/Navbar';

function Scoreboard() {
  const [score, setScore] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('score') === null) {
      setScore([]);
    } else {
      setScore(JSON.parse(localStorage.getItem('score')));
    }
  }, []);

  const onChange = ({ target }) => {
    const { value } = target;
    if (value === 'all') {
      setScore(JSON.parse(localStorage.getItem('score')).sort((a, b) => b.bestTime - a.bestTime));
    } else {
      const filterDificulty = JSON.parse(localStorage.getItem('score'))
        .filter((item) => item.difficulty === value).sort((a, b) => b.bestTime - a.bestTime);
      setScore(filterDificulty);
    }
  };
  return (
    <div className="Scoreboard">
      <Navbar />
      <Container>
        <h1>Scoreboard</h1>
        <div className="filter">
          <select onChange={onChange}>
            <option value="all">All</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
            <option value="expert">Expert</option>
          </select>
        </div>
      </Container>

      <Container>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Player Name</th>
              <th>Difficulty</th>
              <th>Best Time</th>
            </tr>
          </thead>
          <tbody>
            {score.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.playerName}</td>
                <td>{item.difficulty}</td>
                <td>{`${Math.floor(item.bestTime / 60)} minutes and ${Math.ceil(item.bestTime % 60)} seconds`}</td>
              </tr>
            ))}
            {score.length === 0 && (
              <tr>
                <td className="text-center" colSpan="4">No records</td>
              </tr>
            )}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default Scoreboard;
