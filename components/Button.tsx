import {
  StyleSheet,
  Text,
  Pressable,
  PressableProps,
  StyleProp,
  ViewStyle,
} from "react-native";
import { theme } from "../theme";
import { typography } from "../typography";
import { useState } from "react";

interface ButtonProps {
  label: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

export default function Button({ label, onPress, style }: ButtonProps) {
  const [pressed, setPressed] = useState<boolean>(false);

  return (
    <Pressable
      style={[styles.button, pressed ? styles.clickedButton : styles.button]}
      onPress={() => {
        setPressed(!pressed);
        onPress && onPress();
      }}
    >
      <Text style={styles.buttonLabel}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    width: 90,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderColor: theme.colors.border,
    borderStyle: "solid",
    borderWidth: 1,
  },
  buttonLabel: {
    color: theme.colors.text,
    fontSize: typography.buttonText.fontSize,
  },
  clickedButton: {
    backgroundColor: theme.colors.notification,
  },
});
