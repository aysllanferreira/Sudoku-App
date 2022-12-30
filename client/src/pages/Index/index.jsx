import React, { useState } from 'react';
import './index.scss';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { SiWolframmathematica } from 'react-icons/si';
import Navbar from '../../components/Navbar';
import { setPlayerName, setDifficulty } from '../../redux/reducers';

function Index() {
  const [nickname, setNickname] = useState('');
  const [difficulty, setDifficultys] = useState('easy');

  const dispatch = useDispatch();
  const history = useHistory();

  const handleChanges = ({ target }) => {
    const { id, value } = target;
    if (id === 'nickname') setNickname(value);
    else if (id === 'difficulty') setDifficultys(value);
  };

  const handleClick = () => {
    if (nickname.trim() === '') return;

    dispatch(setPlayerName(nickname));
    dispatch(setDifficulty(difficulty));
    history.push('/game');
  };

  return (
    <>
      <Navbar />

      <div className="Index">
        <div className="container-fluid text-center border border-4 rounded border-secondary pt-4 pb-4">
          <h1 className="pt-4 mb-4">
            <SiWolframmathematica />
            {' '}
            Sudoku
            {' '}
            <SiWolframmathematica />
          </h1>
          <p className="mb-4">Choose how you wanna play!</p>
          <div className="buttons pb-4">
            <label htmlFor="difficulty" className="form-label">Difficulty</label>
            <select
              className="form-select"
              aria-label="Default select example"
              id="difficulty"
              onChange={handleChanges}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
              <option value="expert">Expert</option>
            </select>

            <label htmlFor="nickname" className="form-label">Nickname</label>
            <input
              type="text"
              className="form-control mb-4"
              id="nickname"
              placeholder="Enter your nickname"
              onChange={handleChanges}
            />
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleClick}
            >
              Play now

            </button>

          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
