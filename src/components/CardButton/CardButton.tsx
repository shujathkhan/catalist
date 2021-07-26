import React from 'react';
import { ImageBackground, Text, TouchableOpacity } from 'react-native';
import CardContent from './CardContent';
import { cardStyles } from './styles';

type CardButtonType = {
  label: string;
  onPress?: () => void;
  type: 'banner' | 'card';
  description?: string;
  price?: string;
  imageIndex?: number;
};

const CardButton = (props: CardButtonType) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      activeOpacity={props.onPress ? 0.75 : 1}
      style={{
        ...cardStyles.container,
        ...(props.type === 'card' && { width: 200, margin: -10 }),
      }}
    >
      <ImageBackground
        source={{
          uri: `https://picsum.photos/${
            props.type === 'banner'
              ? '400/200'
              : `/id/${props.imageIndex}/150/150`
          }`,
        }}
        resizeMode="contain"
        imageStyle={cardStyles.imageStyle}
        style={{
          ...cardStyles.image,
          ...(props.type === 'card' && { height: 150 }),
        }}
      >
        {props.type === 'banner' && (
          <Text style={cardStyles.text}>{props.label}</Text>
        )}
      </ImageBackground>
      {props.type === 'card' && (
        <CardContent
          label={props.label}
          description={props.description}
          price={props.price}
        />
      )}
    </TouchableOpacity>
  );
};

export default CardButton;
