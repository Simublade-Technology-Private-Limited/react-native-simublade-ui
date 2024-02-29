import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

export const Button = ({ onPress, text }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
