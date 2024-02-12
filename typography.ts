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
    fontSize: 20,
    fontWeight: "300",
    color: theme.colors.text,
  },
  body: {
    fontSize: 16,
    fontWeight: "normal",
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "normal",
    color: theme.colors.text,
  },
});
