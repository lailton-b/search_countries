import React from 'react';
import { SearchWrapper, Input, Label } from './SearchStyles';
import { ReactComponent as SearchSvg } from '../../../img/search.svg';

const Search = ({ search, setSearch }) => {
  function handleChange({ target }) {
    setSearch(target.value.toLowerCase());
  }

  return (
    <SearchWrapper>
      <Label htmlFor="search">
        <SearchSvg />
        Search for a country...
      </Label>
      <Input
        id="search"
        type="text"
        placeholder="Search for a country..."
        autoComplete="off"
        value={search}
        onChange={handleChange}
      />
    </SearchWrapper>
  );
};

export default Search;
