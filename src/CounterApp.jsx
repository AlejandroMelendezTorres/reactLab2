
import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {
  const counter = 10;
  
  return (
    <Fragment>
      <h1>CounterApp</h1>
      <h2>{value}</h2>
      <h3>{counter}</h3>
    </Fragment>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
  
};
