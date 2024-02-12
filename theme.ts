import { DefaultTheme, Theme } from "@react-navigation/native";

export const theme: Theme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    background: "#fef6e4",
    primary: "#f3d2c1",
    card: "#f3d2c1",
    text: "#172c66",
    border: "#001858",
    notification: "#8bd3dd",
  },
};
