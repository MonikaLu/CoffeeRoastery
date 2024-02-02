import { StyleSheet, Text, View, Image } from "react-native";
import CategoriesMenu from "../components/CategoriesMenu";
import CoffeeMenu from "../components/CoffeeMenu";

const OrderScreen = () => {
  return (
    <View style={styles.orderContainer}>
      <CategoriesMenu />
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
