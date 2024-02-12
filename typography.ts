import { StyleSheet } from "react-native";
import { theme } from "./theme";

export const typography = StyleSheet.create({
  h1: {
    fontSize: 32,
    fontWeight: "bold",
    color: "red",
  },
  h2: {
    fontSize: 28,
    fontWeight: "bold",
  },
  h3: {
    fontSize: 24,
    fontWeight: "bold",
  },
  body: {
    fontSize: 16,
    fontWeight: "normal",
  },
  buttonText: {
    fontSize: 12,
    fontWeight: "normal",
    color: theme.colors.text,
  },
});
