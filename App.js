import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import OrderButton from "./components/OrderButton";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

const PlaceholderImage = require("./assets/logo.png");

export default function App() {
  const HomeScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <View>
          <Image source={PlaceholderImage} style={styles.image} />
        </View>
        <Text style={{ color: "#000000" }}>Coffee Roastery</Text>
        <OrderButton
          label="Press!"
          onPress={() => navigation.navigate("Order")}
        />
        <StatusBar style="auto" />
      </View>
    );
  };

  const OrderScreen = ({ navigation, route }) => {
    return (
      <View style={styles.container}>
        <Text style={{ color: "#000000" }}>Order</Text>
      </View>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name="Order" component={OrderScreen} />
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
  image: {
    width: 100,
    height: 100,
    borderRadius: 36,
  },
});
