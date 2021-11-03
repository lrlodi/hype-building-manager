import React, { useContext } from 'react';
import PropertiesContext from '../context/PropertiesProvider';

const BuildingSelect = () => {
  const { allBuildings } = useContext(PropertiesContext);
  return(
    <div>
      <select>
        { allBuildings.map((building) => <option>{ building.name }</option>)}
      </select>
    </div>
  );
}

export default BuildingSelect;
