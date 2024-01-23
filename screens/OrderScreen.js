import { StyleSheet, Text, View, Image } from "react-native";
import NavigationBar from "../components/NavigationBar";
const OrderScreen = ({ navigation, route }) => {
  return (
    <View style={styles.orderContainer}>
      <NavigationBar />
    </View>
  );
};

const styles = StyleSheet.create({
  orderContainer: {
    flex: 1,
    backgroundColor: "#fff7ed",
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 10,
  },
  titleText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000000",
  },
});

export default OrderScreen;
