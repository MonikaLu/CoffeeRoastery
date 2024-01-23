import { StyleSheet, Text, View, Image } from "react-native";
import NavigationBar from "../components/NavigationBar";
import CoffeeMenu from "../components/CoffeeMenu";
const OrderScreen = ({ navigation, route }) => {
  return (
    <View style={styles.orderContainer}>
      <NavigationBar />
      <CoffeeMenu />
    </View>
  );
};

const styles = StyleSheet.create({
  orderContainer: {
    flex: 1,
    backgroundColor: "#fff7ed",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  titleText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000000",
  },
});

export default OrderScreen;
