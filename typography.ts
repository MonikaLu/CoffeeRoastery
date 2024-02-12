import { StyleSheet } from "react-native";
import { theme } from "./theme";

export const typography = StyleSheet.create({
  h1: {
    fontSize: 32,
    fontWeight: "bold",
    color: "red",
  },
  h2: {
    fontSize: 24,
    fontWeight: "300",
    color: theme.colors.text,
  },
  h3: {
    fontSize: 20,
    fontWeight: "300",
    color: theme.colors.text,
  },
  body: {
    fontSize: 15,
    fontWeight: "normal",
    color: theme.colors.text,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "600",
    color: theme.colors.text,
  },
});
