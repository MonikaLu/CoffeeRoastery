import { DefaultTheme, Theme } from "@react-navigation/native";

export const theme: Theme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    background: "#fef6e4", // light brown
    primary: "#f3d2c1", // brown pink
    card: "#f582ae", // pink
    text: "#172c66", // blue
    border: "#001858", //darker blue
    notification: "#8bd3dd", // lightblue
  },
};
