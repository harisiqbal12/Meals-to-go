import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

export const RestaurantInfoCard = ({ resturant = {} }) => {
  const {
    name = 'Some Resturant',
    icon,
    photos = [
      'https://images.unsplash.com/photo-1502301103665-0b95cc738daf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    ],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemp,
  } = resturant;

  return (
    <Card key={name}>
      <Card.Cover style={styles.card} source={{ uri: photos[0] }} />
      <Card.Content>
        <Title>{name}</Title>
        <Paragraph>Card Paragraph</Paragraph>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
  },
});
