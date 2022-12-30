import React from 'react';
import PropTypes from 'prop-types';

function CreateBoard({ numbers }) {
  return (
    <div className="col-4 text-center border">
      <div className="row">
        {numbers.map((number) => (
          <div className="col-4 border" key={number}>
            {number}
          </div>
        ))}
      </div>
    </div>
  );
}

CreateBoard.propTypes = {
  numbers: PropTypes.arrayOf(PropTypes.shape({
    number: PropTypes.number,
  })).isRequired,
};

export default CreateBoard;
