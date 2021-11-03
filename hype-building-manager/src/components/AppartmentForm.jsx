import React, { useState, useContext } from 'react';
import PropertiesContext from '../context/PropertiesContext';
import AddPropertyButton from './AddPropertyButton';
import BuildingSelect from './BuildingsSelect';

const AppartmentForm = () => {
  const [appartmentCode, setAppartmentCode] = useState('');
  const [totalRooms, setTotalRooms] = useState(0);
  const [totalBathrooms, setTotalBathrooms] = useState(0);
  const [totalSuites, setTotalSuites] = useState(0);
  const [totalArea, setTotalArea] = useState(0);
  const [refBuilding, setRefBuilding] = useState(0);
  const [showButton, setShowButton] = useState(true);
  const { addAppartment, allBuildings } = useContext(PropertiesContext);

  const addNewAppartment = () => {
    const appartmentObject = {
      appartment_code: appartmentCode,
      total_bedrooms: totalRooms,
      total_bathrooms: totalBathrooms,
      total_suites: totalSuites,
      total_area: totalArea,
      building_id: refBuilding,
    }
    return addAppartment(appartmentObject);
  }

  return(
    showButton ? <AddPropertyButton type={ 'apartamento' } func={ setShowButton } status={ showButton }/>
    :
    <div className="insert-appartment">
      <h2>Adicionar novo apartamento</h2>
      <form>
          <label htmlFor="app-code-input">
            Código do apartamento
            <input
              type="text"
              name="app-code-input"
              onChange={ (e) => setAppartmentCode(e.target.value) }
            />
          </label>
          <label htmlFor="total-rooms-input">
            Número de quartos
            <input
              type="number"
              name="total-rooms-input"
              onChange={ (e) => setTotalRooms(e.target.value) }
            />
          </label>
          <label htmlFor="total-bathrooms-input">
            Número de banheiros
            <input
              type="number"
              name="text-input"
              onChange={ (e) => setTotalBathrooms(e.target.value) }
            />
          </label>
          <label htmlFor="total-suites-input">
            Número de suítes
            <input
              type="number"
              name="total-suites-input"
              onChange={ (e) => setTotalSuites(e.target.value) }
            />
          </label>
          <label htmlFor="total-area-input">
            Área total
            <input
              type="number"
              name="total-area-input"
              onChange={ (e) => setTotalArea(e.target.value) }
            />
          </label>
          <select>
            { allBuildings.map((building) => <option>{building.name}</option>)}
          </select>
          <button
            type="button"
            onClick={ () => addNewAppartment() }
          >
            CADASTRAR
          </button>
          <button
            type="button"
            onClick={() => setShowButton(!showButton)}
          >
            voltar
          </button>
        </form>
    </div>
  )
}

export default AppartmentForm;
