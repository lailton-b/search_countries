import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchCountry } from '../../api';
import useFetch from '../../hooks/useFetch';
import { ReactComponent as Arrow } from '../../img/arrow_left.svg';
import CountryBorders from '../CountryBorders/CountryBorders';
import CountryInfos from '../CountryInfos/CountryInfos';
import Loading from '../Helper/Loading/Loading';
import NotFound from '../Helper/NotFound/NotFound';
import {
  Main,
  Back,
  CountryWrapper,
  Flag,
  InfosWrapper,
  BorderCountries,
  CountryName,
} from './CountryPageStyles';

const CountryPage = () => {
  const { name } = useParams();
  const { data, loading, error, request } = useFetch();

  const countryFetch = React.useCallback(async () => {
    const { url, options } = fetchCountry(name);
    await request(url, options);
  }, [name, request]);

  React.useEffect(() => {
    countryFetch();
  }, [countryFetch]);

  if (error) return <NotFound />;
  else if (loading === true) return <Loading />;
  else if (data) {
    return (
      <Main>
        <Back>
          <Link to="/search_countries">
            <Arrow /> <span>Back</span>
          </Link>
        </Back>

        <CountryWrapper>
          <Flag>
            <img src={data[0].flag} alt={data[0].name} />
          </Flag>
          <InfosWrapper>
            <CountryName>{data[0].name}</CountryName>
            <CountryInfos data={data} />
            {data[0].borders.length ? (
              <BorderCountries>
                <h3>Border Countries:</h3>
                <CountryBorders codes={data[0].borders} />
              </BorderCountries>
            ) : (
              <span></span>
            )}
          </InfosWrapper>
        </CountryWrapper>
      </Main>
    );
  } else return null;
};

export default CountryPage;
