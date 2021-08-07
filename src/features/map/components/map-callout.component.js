import React from 'react';
import { View, Image } from 'react-native';
import styled from 'styled-components';
import WebView from 'react-native-webview';
import { Platform } from 'react-native';

import { Text } from '../../../components/typography/text.component';

const Item = styled(View)`
  padding: 10px;
  max-width: 120px
  align-items: center
`;

const ImageView = styled(Image)`
  padding: 10px;
  width: 120px;
  height: 100px;
`;

const CompactWebView = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

export const MapCallout = ({ restaurant }) => {
  const ValidImage = Platform.OS === 'android' ? CompactWebView : ImageView;

  return (
    <Item>
      <ValidImage source={{ uri: restaurant.photos[0] }} />
      <Text center variant="caption" numberOfLines={3}>
        {restaurant.name}{' '}
      </Text>
    </Item>
  );
};
