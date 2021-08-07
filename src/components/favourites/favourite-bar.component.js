import React from 'react';
import { ScrollView, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import { CompactRestaurant } from '../../features/map/components/compact-restaurant.component';

const FavouritesWrapper = styled(View)`
  padding: 10px;
`;
const Spacer = styled(View)`
  margin-right: 10px;
`;

export const FavouriteBar = ({ favourites, goToDetails }) => {
  if (!favourites.length) {
    return null;
  }

  return (
    <FavouritesWrapper>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name.split(' ').join('');
          return (
            <Spacer key={key}>
              <TouchableOpacity
                onPress={() =>
                  goToDetails('RestaurantsDetails', {
                    item: restaurant,
                  })
                }
              >
                <CompactRestaurant restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
