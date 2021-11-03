import React, { useState } from 'react';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';

const CountryAndStateSelect = (props) => {
  const { setCountryFunc, setRegionFunc } = props;
  const [region, setRegion] = useState('');
  const [country, setCountry] = useState('');

  const handleCountryChange = (value) => {
    setCountryFunc(value);
    setCountry(value);
  }

  const handleRegionChange = (value) => {
    setRegionFunc(value);
    setRegion(value);
  }
  
  return(
    <div>
      <CountryDropdown
        value = { country }
        onChange = { (value) => handleCountryChange(value) }
      />
      <RegionDropdown
        country = { country }
        value = { region }
        onChange = { (value) => handleRegionChange(value) }
      />
    </div>
  )
}

export default CountryAndStateSelect;
