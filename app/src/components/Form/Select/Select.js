import React from 'react';

import {
  RegionSelect,
  Option,
  CustomSelect,
  RemoveSelect,
} from './SelectStyles';

const Select = ({ select, setSelect, options }) => {
  const [activeSelect, setActiveSelect] = React.useState(false);

  function toggleSelect({ target, currentTarget }) {
    if (target === currentTarget) setActiveSelect(!activeSelect);
  }

  function removeSelect() {
    setSelect('');
    if (activeSelect) setActiveSelect(!activeSelect);
  }

  return (
    <CustomSelect
      onClick={toggleSelect}
      className={activeSelect ? 'activeSelect' : ''}
    >
      {select ? (
        <span className="select" onClick={toggleSelect}>
          {select}
        </span>
      ) : (
        <span onClick={toggleSelect}>Filter by Region</span>
      )}

      {select && <RemoveSelect onClick={removeSelect}></RemoveSelect>}

      <RegionSelect className={activeSelect ? 'activeSelect' : ''}>
        <ul>
          {options.map(({ value, label }) => (
            <Option key={value} value={value}>
              <input
                type="radio"
                id={value}
                value={value}
                checked={select === value}
                onChange={({ target }) => setSelect(target.value)}
              />
              <label htmlFor={value} onClick={toggleSelect}>
                {label}
              </label>
            </Option>
          ))}
        </ul>
      </RegionSelect>
    </CustomSelect>
  );
};

export default Select;
