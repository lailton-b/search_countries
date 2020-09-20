import React from 'react';
import CountryCard from '../CountryCard/CountryCard';

const CountrySearch = ({ country, search }) => {
  const nameLowerCase = country.name.toLowerCase();

  return (
    nameLowerCase.search(search) !== -1 && (
      <CountryCard key={country.name} country={country} />
    )
  );
};

export default CountrySearch;
