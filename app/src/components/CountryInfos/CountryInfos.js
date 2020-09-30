import React from 'react';
import {
  Infos,
  Info,
  Group,
  InfoTitle,
  InfoResponse,
} from './CountryInfosStyles.js';

const CountryInfos = ({ data }) => {
  return (
    <Infos>
      <Group>
        {data[0].nativeName && (
          <Info>
            <InfoTitle>Native Name: </InfoTitle>
            <InfoResponse>{data[0].nativeName}</InfoResponse>
          </Info>
        )}

        {data[0].population && (
          <Info>
            <InfoTitle>Population: </InfoTitle>
            <InfoResponse>{data[0].population}</InfoResponse>
          </Info>
        )}

        {data[0].region && (
          <Info>
            <InfoTitle>Region: </InfoTitle>
            <InfoResponse>{data[0].region}</InfoResponse>
          </Info>
        )}

        {data[0].subregion && (
          <Info>
            <InfoTitle>Sub Region: </InfoTitle>
            <InfoResponse>{data[0].subregion}</InfoResponse>
          </Info>
        )}

        {data[0].capital && (
          <Info>
            <InfoTitle>Capital: </InfoTitle>
            <InfoResponse>{data[0].capital}</InfoResponse>
          </Info>
        )}
      </Group>

      <Group>
        {data[0].topLevelDomain && (
          <Info>
            <InfoTitle>Top Level Domain: </InfoTitle>
            <InfoResponse>{data[0].topLevelDomain}</InfoResponse>
          </Info>
        )}

        {data[0].currencies && (
          <Info>
            <InfoTitle>Currencies: </InfoTitle>
            {data[0].currencies.map((currency, i, array) => (
              <InfoResponse key={currency.name}>
                {array.length - 2 > i ? `${currency.name}, ` : currency.name}
              </InfoResponse>
            ))}
          </Info>
        )}

        {data[0].languages && (
          <Info>
            <InfoTitle>Languages: </InfoTitle>
            {data[0].languages.map((language, i, array) => (
              <InfoResponse key={language.name} className="language">
                {array.length - 1 > i ? `${language.name}, ` : language.name}
              </InfoResponse>
            ))}
          </Info>
        )}
      </Group>
    </Infos>
  );
};

export default CountryInfos;
