/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { List } from 'react-native-paper';

import { SafeArea } from '../../../components/utility/safe-area.component';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

export const RestaurantDetailsScreen = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);
  const { item } = route.params;

  return (
    <SafeArea>
      <View style={{ padding: 20 }}>
        <RestaurantInfoCard resturant={item} />
      </View>
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
          expanded={breakfastExpanded}
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
        >
          <List.Item title="Anda Paratha" />
          <List.Item title="Chai Paratha" />
          <List.Item title="Aalo Wala Paratha" />
        </List.Accordion>

        <List.Accordion
          title="Lunch"
          onPress={() => setLunchExpanded(!lunchExpanded)}
          expanded={lunchExpanded}
          left={(props) => <List.Icon {...props} icon="hamburger" />}
        >
          <List.Item title="Chiken Tikka Biryani" />
          <List.Item title="Fish Biryani" />
          <List.Item title="Pulao" />
          <List.Item title="Charsi Biryani" />
          <List.Item title="Not Charsi Biryani" />
          <List.Item title="Ertugal Biryani" />
          <List.Item title="Biryani" />
          <List.Item title="Cholay Paratha" />
        </List.Accordion>

        <List.Accordion
          title="Dinner"
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
          expanded={dinnerExpanded}
          left={(props) => <List.Icon {...props} icon="food-variant" />}
        >
          <List.Item title="Gold Leaf Cigarette " />
          <List.Item title="Marlboro Cigarette" />
          <List.Item title="Tikka" />
          <List.Item title="Andy Wala Burger" />
          <List.Item title="Andu Wala Burger" />
        </List.Accordion>

        <List.Accordion
          title="Drinks"
          onPress={() => setDrinksExpanded(!drinksExpanded)}
          expanded={drinksExpanded}
          left={(props) => <List.Icon {...props} icon="cup" />}
        >
          <List.Item title="Sting" />
          <List.Item title="Pepsi" />
          <List.Item title="Ganny Ka Sharbat" />
          <List.Item title="Muhabbat Ka Sharbat" />
          <List.Item title="Nafrat Ka Sharbat" />
          <List.Item title="Sharbat-e-Foulad" />
          <List.Item title="Bhang" />
          <List.Item title="Desi Sharab" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
