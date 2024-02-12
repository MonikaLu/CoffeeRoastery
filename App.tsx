import HomeScreen from "./screens/HomeScreen";
import MenuScreen from "./screens/MenuScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cart from "./components/Cart";
import { theme } from "./theme";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Coffee Roastery" }}
        />
        <Stack.Screen
          name="Menu"
          component={MenuScreen}
          options={{
            headerRight: () => <Cart />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
