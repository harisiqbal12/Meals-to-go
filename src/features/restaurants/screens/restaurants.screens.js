import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { FlatList, TouchableOpacity } from 'react-native';

import { ActivityIndicator } from 'react-native-paper';

import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import { Search } from '../components/search.component';

const ResturantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loader = styled(ActivityIndicator)`
  flex: 1;
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, error, isLoading } = useContext(RestaurantsContext);

  if (isLoading) {
    return (
      <SafeArea>
        <Loader animating={true} color="#fb8500" />
      </SafeArea>
    );
  }

  return (
    <SafeArea>
      <Search />

      <ResturantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('RestaurantsDetails', {
                  item: item,
                })
              }
            >
              <RestaurantInfoCard resturant={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
