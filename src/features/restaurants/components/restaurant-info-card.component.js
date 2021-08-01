import React from 'react';
import styled from 'styled-components/native';
import { Card, Paragraph, Title, Avatar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export const RestaurantInfoCard = ({ resturant = {} }) => {
  const {
    name = 'Some Resturant',
    photos = [
      'https://images.unsplash.com/photo-1502301103665-0b95cc738daf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    ],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
  } = resturant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <Card style={styles.card} key={name}>
      <ResutarntCardCover source={{ uri: photos[0] }} />
      <Info>
        <CardTitle>{name}</CardTitle>
        <RatingView>
          {ratingArray.map(() => (
            <RatingIcon size={24} icon="star" />
          ))}
          <LockView>
            <OpenIcon size={24} icon={`${isOpenNow ? 'lock-open' : 'lock'}`} />
          </LockView>
        </RatingView>

        <CardAddress>{address}</CardAddress>
      </Info>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: '#000',
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
});

const CardTitle = styled(Title)`
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  padding-top: ${(props) => props.theme.space[2]};
`;

const ResutarntCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
`;

const Info = styled(Card.Content)`
  padding-top: ${(props) => props.theme.space[1]};
`;

const CardAddress = styled(Paragraph)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const RatingIcon = styled(Avatar.Icon)`
  background-color: ${(props) => props.theme.colors.ui.orange};
  margin-right: ${(props) => props.theme.space[1]};
`;

const RatingView = styled.View`
  flex-direction: row;
  justify-content: flex-start;
`;

const LockView = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

const OpenIcon = styled(Avatar.Icon)`
  background-color: ${(props) =>
    props.icon === 'lock-open'
      ? props.theme.colors.ui.success
      : props.theme.colors.ui.secondary};
`;
