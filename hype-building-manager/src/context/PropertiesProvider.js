import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import PropertiesContext from './PropertiesContext';

const PropertiesProvider = ({ children }) => {

  const [allBuildings, setAllBuildings] = useState([]);
  const [allAppartments, setAllAppartments] = useState([]);

  const getBuildings = async () => {
    try {
      const { buildingsList } = await api.getBuildings()
      setAllBuildings(buildingsList)
    }
    catch (error) {
      console.log(error);
    }
  }

  const getAppartments = async () => {
    try {
      const { appartmentsList } = await api.getAppartments();
      setAllAppartments(appartmentsList);
    } catch (error) {
      console.log(error);
    }
  }

  const addBuilding = async (info) => {
    console.log(info)
    try {
      await api.registerBuilding(info);
      getBuildings()
    } catch (error) {
      console.log(error);
    }
  }

  const addAppartment = async (info) => {
    console.log(info)
    try {
      await api.registerNewAppartment(info);
      getAppartments()
    } catch (error) {
      console.log(error);
    }
  }

  const context = {
    allBuildings,
    allAppartments,
    getBuildings,
    getAppartments,
    addBuilding,
    addAppartment
  }

  return(
    <PropertiesContext.Provider value={ context }>
      { children }
    </PropertiesContext.Provider>
  )
}

PropertiesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PropertiesProvider;
