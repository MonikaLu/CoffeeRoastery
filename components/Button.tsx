import { StyleSheet, Text, Pressable } from "react-native";
import { theme } from "../theme";
import { typography } from "../typography";

interface ButtonProps {
  label: string;
  onPress?: () => void;
}

export default function Button({ label, onPress }: ButtonProps) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
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
});
