import React, { useContext, useState } from 'react';
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

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);

  const [searchQuery, setSearchQuery] = useState(keyword);

  const handleChangeText = (query) => setSearchQuery(query);

  return (
    <SearchBarView>
      <Searchbar
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
