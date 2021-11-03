import React from 'react';

const AppartmentItem = ({ props }) => {
  const { appartment_code } = props;
  return(
    <li>{ appartment_code }</li>
  );
}

export default AppartmentItem;
