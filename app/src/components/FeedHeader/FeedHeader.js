import React from 'react';
import Select from '../Form/Select/Select';
import { Header } from './FeedHeaderStyles';
import Search from '../Form/Search/Search';

const FetchHeader = ({ select, setSelect, search, setSearch }) => {
  const options = [
    { value: 'Africa', label: 'Africa' },
    { value: 'Americas', label: 'America' },
    { value: 'Asia', label: 'Asia' },
    { value: 'Oceania', label: 'Oceania' },
  ];

  return (
    <Header>
      <Search search={search} setSearch={setSearch} />
      <Select select={select} setSelect={setSelect} options={options} />
    </Header>
  );
};

export default FetchHeader;
