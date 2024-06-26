import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import { ButtonProps } from "./ButtonProps";

const Button = ({ onPress, title, containerStyle ,textStyle}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}
      activeOpacity={0.8}
      hitSlop={{ top: 6, left: 6, bottom: 6, right: 6 }}
    >
      <Text style={[styles.text,textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
