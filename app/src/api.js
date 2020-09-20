const URL_API = 'https://restcountries.eu/rest/v2';

export function fetchAll() {
  return {
    url: URL_API + '/all?fields=name;capital;population;region;flag',
    options: {
      method: 'GET',
    },
  };
}
