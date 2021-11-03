import React, { useContext, useEffect, useState } from 'react';
import BuildingItem from './BuildingItem';
import AppartmentItem from './AppartmentItem';
import PropertiesContext from '../context/PropertiesContext';
import '../styles/properties.css';

const Properties = () => {

  const {allBuildings, allAppartments, getBuildings, getAppartments } = useContext(PropertiesContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      getBuildings(),
      getAppartments()
    ]).then(() => setIsLoading(false))
  }, [])

  return(!isLoading ?
    <div className="properties">
      <h2>Prédios</h2>
      <div className="buildings">
        { allBuildings.map((building) => <BuildingItem props={ building } key={ building.id }/>)}
      </div>
      <h2>Apartamentos</h2>
      <div className="appartments">
        { allAppartments.map((appartment) => <AppartmentItem props={ appartment } key={ appartment.id }/>)}
      </div>
    </div>
  : <span>Carregando...</span>)
}

export default Properties;
