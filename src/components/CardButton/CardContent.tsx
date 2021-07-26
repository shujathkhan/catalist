import React from 'react';
import { Text, View } from 'react-native';
import { contentStyles } from './styles';

type CardContentType = {
  label: string;
  description?: string;
  price?: string;
};

const CardContent = (props: CardContentType) => {
  return (
    <View style={contentStyles.container}>
      <Text style={contentStyles.label}>{props.label}</Text>
      <Text style={contentStyles.description}>{props.description}</Text>
      <Text style={contentStyles.description}>{props.price}</Text>
    </View>
  );
};

export default CardContent;
