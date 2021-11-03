import React from 'react';

const BuildingItem = ({ props }) => {
  const { name } = props;
  return(
    <li>{ name }</li>
  );
}

export default BuildingItem;
