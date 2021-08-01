import React, { useState } from 'react';
import styled from 'styled-components/native';
import { SafeAreaView, View, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';

import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

const SearchBarView = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantInfoCardView = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChangeText = (query) => setSearchQuery(query);

  return (
    <SafeArea>
      <SearchBarView>
        <Searchbar
          placeholder="Search"
          onChangeText={handleChangeText}
          value={searchQuery}
        />
      </SearchBarView>
      <RestaurantInfoCardView>
        <RestaurantInfoCard />
      </RestaurantInfoCardView>
    </SafeArea>
  );
};
