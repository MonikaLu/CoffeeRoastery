import { StyleSheet } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import MenuScreen from "./screens/MenuScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Coffee Roastery" }}
        />
        <Stack.Screen name="Menu" component={MenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4ade80",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  orderContainer: {
    flex: 1,
    backgroundColor: "#4ade80",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 36,
  },
  titleText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#ffffff",
    fontFamily: "Cochin",
  },
});