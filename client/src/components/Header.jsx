import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import './Header.scss';
import { setBestTime } from '../redux/reducers';

function Header() {
  const { difficulty, playerName, chances } = useSelector((state) => state.player);
  const [elapsedTime, setElapsedTime] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime(elapsedTime + 1);
      dispatch(setBestTime(elapsedTime));
    }, 1000);
    return () => clearInterval(interval);
  }, [elapsedTime]);

  const minutes = Math.floor(elapsedTime / 60);
  const seconds = elapsedTime % 60;

  return (
    <div className="Headers">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">
            {playerName}
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Difficulty:
              {' '}
              {difficulty}
            </Navbar.Text>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Time:
              {' '}
              {minutes}
              :
              {seconds < 10 ? `0${seconds}` : seconds}
            </Navbar.Text>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Chances:
              {' '}
              {chances}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
