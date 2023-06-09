import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.css';

function Form({ onSubmit, children }) {
  return (
    <form
      className={ styles.form }
      onSubmit={ onSubmit }
    >
      {children}

    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func,
  children: PropTypes.node,
}.isRequired;

export default Form;
