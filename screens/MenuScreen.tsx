import { StyleSheet, Text, View, Image } from "react-native";
import NavigationMenu from "../components/NavigationMenu";
import CoffeeMenu from "../components/CoffeeMenu";

const OrderScreen = () => {
  return (
    <View style={styles.orderContainer}>
      <NavigationMenu />
      <CoffeeMenu />
    </View>
  );
};

const styles = StyleSheet.create({
  orderContainer: {
    flex: 1,
    backgroundColor: "#fff7ed",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  titleText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000000",
  },
});

export default OrderScreen;
