import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getSudoku } from 'sudoku-gen';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { setChances } from '../redux/reducers';

const logicSudoku = () => {
  const sudokuRows = [];
  const setDificulty = 0;

  const { difficulty, chances } = useSelector((state) => state.player);
  const dispatch = useDispatch();
  const history = useHistory();
  // eslint-disable-next-line no-unused-vars
  const [sudoku, setSudoku] = useState(getSudoku(difficulty));

  useEffect(() => {
    if (chances === 0) {
      history.push('/winner');
    }
  }, [chances, history]);
  console.log(sudoku.solution.split(''));
  useEffect(() => {
    const allInputs = document.querySelectorAll('input');
    const result = Array.from(allInputs).every((input) => input.value !== '');
    if (result) {
      history.push('/winner');
    }
  }, [sudokuRows]);

  const handleChange = ({ target }) => {
    let { value } = target;
    const { className } = target;

    if (value.length > 1) {
      value = value.slice(1);
    }
    if (value > 9) {
      value = value.slice(0, 1);
    }
    target.value = value;

    const sudokuCopy = sudoku.solution.split('');

    const answer = sudokuCopy[className];
    if (value === answer) {
      target.style.fontWeight = 'bold';
      target.style.backgroundColor = 'transparent';
    } else if (value === '') {
      target.style.backgroundColor = 'transparent';
    } else {
      target.style.backgroundColor = 'red';
      dispatch(setChances(1));
    }
  };

  const selectNumbersOrInput = (i, randomArray, cols) => {
    const getPuzzle = sudoku.puzzle.split('');
    for (let j = 0; j < 9; j += 1) {
      if (getPuzzle[i * 9 + j] !== '-') {
        cols.push(
          <Col key={j}>
            {getPuzzle[i * 9 + j]}
          </Col>,
        );
      } else {
        cols.push(
          <Col key={j}>
            <input
              type="text"
              className={i * 9 + j}
              onChange={handleChange}
            />
          </Col>,
        );
      }
    }
  };

  const buildingLogic = (difficulties, sudRows) => {
    for (let i = 0; i < 9; i += 1) {
      const sudokuCols = [];
      const randomArray = [];

      selectNumbersOrInput(i, randomArray, sudokuCols);

      sudRows.push(
        <Row key={i}>
          {sudokuCols}
        </Row>,
      );
    }
  };

  buildingLogic(setDificulty, sudokuRows);

  return (
    <div>
      {sudokuRows}
    </div>
  );
};

export default logicSudoku;
