import React from 'react';
import { Card, Flag, Info, Name, Data } from './CountryCardStyles';
import { Link } from 'react-router-dom';

const CountryCard = ({ country }) => {
  return (
    <Link to={'/search_countries/country/' + country.name.toLowerCase()}>
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
    </Link>
  );
};

export default CountryCard;
