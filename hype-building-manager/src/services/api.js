import axios from 'axios';

const baseURL = 'http://localhost:3001';

export const registerBuilding = async (info) => {
  const { name, abbreviation, address, city, state, appartments } = info;
  
  const newBuilding = await axios
    .post(`${baseURL}/building`, {
      name,
      abbreviation,
      address,
      city,
      state,
      appartments
    }
  );

  return newBuilding;
}

export const registerNewAppartment = async (info) => {
  const { appartment_code, total_bedrooms, total_bathrooms, total_suites, total_area, building_id } = info;

  const newAppartment = await axios.post(
    `${baseURL}/appartment`, {
      appartment_code,
      total_bedrooms,
      total_bathrooms,
      total_suites,
      total_area,
      building_id
    }
  );

  return newAppartment;
}

export const getBuildings = async () => {
  const { data } = await axios.get(
    `${baseURL}/building`
  );

  return data;
}

export const getAppartments = async () => {
  const { data } = await axios.get(
    `${baseURL}/appartment`
  );

  return data;
}