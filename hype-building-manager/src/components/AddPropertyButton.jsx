import React from 'react';

const AddPropertyButton = ({ type, func, status }) => {
  return (
    <div>
      <button
        type="button"
        onClick={() => func(!status)}
      >
        { `Cadastrar novo ${type}`}
      </button>
    </div>
  );
}

export default AddPropertyButton;
