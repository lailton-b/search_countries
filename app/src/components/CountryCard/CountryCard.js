import React from 'react';
import { Card, Flag, Info, Name, Data } from './CountryCardStyles';

const CountryCard = ({ country }) => {
  return (
    <Card>
      <Flag>
        <img src={country.flag} alt={country.name} />
      </Flag>
      <Info>
        <Name>{country.name}</Name>
        <div>
          <Data>
            <span className="data_title">Population: </span>
            <span className="data_response">{country.population}</span>
          </Data>

          <Data>
            <span className="data_title">Region: </span>
            <span className="data_response">{country.region}</span>
          </Data>

          <Data>
            <span className="data_title">Capital: </span>
            <span className="data_response">{country.capital}</span>
          </Data>
        </div>
      </Info>
    </Card>
  );
};

export default CountryCard;
