import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text, ViewStyle } from 'react-native';
import { styles } from './styles';

type ChipButtonType = {
  label: string;
  isActive: boolean;
  onPress?: () => void;
  backgroundStyle?: ViewStyle;
  textStyle?: ViewStyle;
};

const ChipButton = (props: ChipButtonType) => {
  const bgColor = props.isActive ? '#7FA2BC' : '#F5F5F5';
  const textColor = props.isActive ? 'white' : 'black';

  return (
    <TouchableOpacity
      onPress={props.onPress}
      activeOpacity={0.85}
      style={styles.touchableContainer}
    >
      <View
        style={{
          ...styles.container,
          ...{ backgroundColor: bgColor },
          ...props.backgroundStyle,
        }}
      >
        <Text
          style={{
            ...styles.text,
            ...{ color: textColor },
            ...props.textStyle,
          }}
        >
          {props.label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChipButton;
