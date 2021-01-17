import React from 'react';

import Select from 'react-select';

import './styles.scss';

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? '#24004A' : '#24004A',
    padding: 20,
    backgroundColor: state.isFocused ? '#f5eeff' : 'white',
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#777',
  }),
  control: (provided) => ({
    ...provided,
    height: 58,
    background: '#f5eeff',
    borderColor: 'transparent',
    boxShadow: 'transparent',
  }),
  multiValue: (provided) => ({
    ...provided,
    background: '#FCF9FF',
    borderRadius: 5,
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: '#24004a',
  }),
  valueContainer: (provided) => ({
    ...provided,
    background: '#f5eeff',
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    background: '#f5eeff',
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  },
};

function SelectComponent({ options, placeholder, isMulti, label, onChange }) {
  return (
    <div className="select__container">
      <h6>{label}</h6>
      <Select
        options={options}
        placeholder={placeholder}
        isMulti={isMulti}
        styles={customStyles}
        onChange={onChange}
      />
    </div>
  );
}

export default SelectComponent;
