const URL_API = 'https://restcountries.eu/rest/v2';

export function fetchAll(fields) {
  return {
    url: URL_API + `/all?fields=${fields}`,
    options: {
      method: 'GET',
    },
  };
}

export function fetchCountry(name) {
  return {
    url: URL_API + `/name/${name}`,
    options: {
      method: 'GET',
    },
  };
}

export function fetchByCode(codes) {
  let codeList = '';
  codes.map((code, i) =>
    i < codes.length - 1 ? (codeList += code + ';') : (codeList += code),
  );

  return {
    url: URL_API + `/alpha?codes=${codeList}`,
    options: {
      method: 'GET',
    },
  };
}
