import React, { useContext, useState, useEffect } from 'react';
import { Searchbar } from 'react-native-paper';
import { View } from 'react-native';
import styled from 'styled-components/native';

import { LocationContext } from '../../../services/locations/location.context';

// <SearchBarView>
//   <Searchbar
//     placeholder="Search"
//     onChangeText={handleChangeText}
//     value={searchQuery}
//   />
// </SearchBarView>;

const SearchBarView = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

export const Search = ({ isFavouriteToggled, onFavouriteToggled }) => {
  const { keyword, search, setKeyword } = useContext(LocationContext);

  const [searchQuery, setSearchQuery] = useState(keyword);

  const handleChangeText = (query) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    if (keyword) {
      search(keyword);
      setKeyword('');
    }
    setSearchQuery(keyword);
  }, [keyword, search, setKeyword]);

  return (
    <SearchBarView>
      <Searchbar
        icon={isFavouriteToggled ? 'heart' : 'heart-outline'}
        onIconPress={onFavouriteToggled}
        placeholder="Search"
        onChangeText={handleChangeText}
        value={searchQuery}
        onSubmitEditing={() => {
          search(searchQuery);
        }}
      />
    </SearchBarView>
  );
};
