import React, { useContext, useState } from 'react';
import Context from '../context/Context';
import Button from './Button';
import Input from './Input';
import Select from './Select';
import Form from './Form';
import styles from './FilterEmployee.module.css';

function FilterEmployee() {
  const { allDepartment, filters, handleSubmit } = useContext(Context);
  const [name, setName] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('');

  return (
    <Form onSubmit={ handleSubmit }>
      <div className={ styles.filter }>
        <label htmlFor="input-search">
          Nome:
          <Input
            id="input-search"
            type="text"
            value={ name }
            onChange={ ({ target }) => setName(target.value) }
          />
        </label>
        <label htmlFor="select-department-filter">
          Departamento:
          <Select
            id="select-department-filter"
            value={ filterDepartment }
            onChange={ ({ target }) => setFilterDepartment(target.value) }
          >
            <option value="">Selecione o Departamento</option>
            {allDepartment.map(({ department, id }) => (
              <option
                key={ id }
              >
                {department}

              </option>
            ))}
          </Select>
        </label>
        <Button
          type="submit"
          onClick={ () => filters(name, filterDepartment) }
          className={ styles.button }
        >
          Pesquisa
        </Button>
      </div>
    </Form>
  );
}

export default FilterEmployee;
