import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components/native';
import { Searchbar } from 'react-native-paper';

import { LocationContext } from '../../../services/locations/location.context';

const SearchBarView = styled.View`
  padding: ${(props) => props.theme.space[3]};
  position: absolute;
  width: 100%;
  top: 20px;
  z-index: 1;
`;

export const SearchBar = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchQuery, setSearchQuery] = useState('');

  const handleChangeText = (query) => setSearchQuery(query);

  useEffect(() => {
    setSearchQuery(keyword);
  }, [keyword]);
  return (
    <SearchBarView>
      <Searchbar
        placeholder="Search"
        icon="map"
        onChangeText={handleChangeText}
        value={searchQuery}
        onSubmitEditing={() => {
          search(searchQuery);
        }}
      />
    </SearchBarView>
  );
};
