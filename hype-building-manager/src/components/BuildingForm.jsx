import React, { useState, useContext } from 'react';
import CountryAndStateSelect from './CountryAndStateSelect';
import AddPropertyButton from './AddPropertyButton';
import PropertiesContext from '../context/PropertiesContext';

const BuildingForm = () => {
  const [name, setName] = useState('');
  const [abbr, setAbbr] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [region, setRegion] = useState('');
  const [country, setCountry] = useState('');
  const [appartments, setAppartments] = useState('');
  const [showButton, setShowButton] = useState(true);
  const { addBuilding } = useContext(PropertiesContext);

  const addNewBuilding = () => {
    const buildingObject = {
      name,
      abbreviation: abbr,
      address,
      city,
      state: region,
      appartments,
    }
    return addBuilding(buildingObject)
  }

  return(
    showButton ? <AddPropertyButton type={ 'prédio' } func={ setShowButton } status={ showButton }/>
    :
    <div className="insert-building">
      <h2>Adicionar novo prédio</h2>
      <form>
          <label htmlFor="name-input">
            Nome
            <input
              type="text"
              name="name-input"
              onChange={ (e) => setName(e.target.value) }
            />
          </label>
          <label htmlFor="abbr-input">
            Sigla
            <input
              type="text"
              name="abbr-input"
              onChange={ (e) => setAbbr(e.target.value) }
            />
          </label>
          <label htmlFor="address-input">
            Endereço
            <input
              type="text"
              name="text-input"
              onChange={ (e) => setAddress(e.target.value) }
            />
          </label>
          <label htmlFor="city-input">
            Cidade
            <input
              type="text"
              name="city-input"
              onChange={ (e) => setCity(e.target.value) }
            />
          </label>
          <CountryAndStateSelect
            setRegionFunc={ setRegion }
            setCountryFunc={ setCountry }
          />
          <label htmlFor="appartments-input">
            Apartamentos
            <input
              type="number"
              name="appartments-input"
              onChange={ (e) => setAppartments(e.target.value) }
            />
          </label>
          <button 
            type="button"
            onClick={ () => addNewBuilding() }
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

export default BuildingForm;
