import React from 'react';
import { fetchAll } from '../../api';
import useFetch from '../../hooks/useFetch';
import { Main, Ul } from './FeedStyles';
import CountryCard from '../CountryCard/CountryCard';
import FetchHeader from '../FeedHeader/FeedHeader';
import CountrySearch from '../CountrySearch/CountrySearch';

const Feed = () => {
  const { data, loading, request } = useFetch();
  const [region, setRegion] = React.useState('');
  const [search, setSearch] = React.useState('');

  React.useEffect(() => {
    async function countriesFetch() {
      const { url, options } = fetchAll();
      request(url, options);
    }
    countriesFetch();
  }, [request]);

  if (data === null || data === undefined) return null;
  if (loading) return <h1>Loading....</h1>;
  if (data)
    return (
      <Main>
        <FetchHeader
          search={search}
          setSearch={setSearch}
          select={region}
          setSelect={setRegion}
        />
        <Ul>
          {region
            ? data.map((country) => {
                if (country.region === region) {
                  return search ? (
                    <CountrySearch country={country} search={search} />
                  ) : (
                    <CountryCard key={country.name} country={country} />
                  );
                } else return null;
              })
            : data.map((country) => {
                return search ? (
                  <CountrySearch country={country} search={search} />
                ) : (
                  <CountryCard key={country.name} country={country} />
                );
              })}
        </Ul>
      </Main>
    );
};

export default Feed;
