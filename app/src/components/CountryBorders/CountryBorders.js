import React from 'react';
import { Link } from 'react-router-dom';
import { fetchByCode } from '../../api';
import { Button } from './CountryBordersStyles';

const CountryBorders = ({ codes }) => {
  const [borders, setBorders] = React.useState([]);

  React.useEffect(() => {
    const codeFetch = async () => {
      const { url, options } = fetchByCode(codes);
      const response = await fetch(url, options);
      const json = await response.json();
      setBorders(json);
    };
    codeFetch();
  }, [codes]);

  return (
    <>
      {borders.map(({ name }) => (
        <Button key={name}>
          <Link to={`/search_countries/country/${name.toLowerCase()}`}>
            {name}
          </Link>
        </Button>
      ))}
    </>
  );
};

export default CountryBorders;
