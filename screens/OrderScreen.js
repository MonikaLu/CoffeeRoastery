import { StyleSheet, Text, View, Image } from "react-native";

const OrderScreen = ({ navigation, route }) => {
  return (
    <View style={styles.orderContainer}>
      <Text style={styles.titleText}>Order Your Coffee!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  orderContainer: {
    flex: 1,
    backgroundColor: "#4ade80",
    alignItems: "center",
  },
  titleText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#ffffff",
    fontFamily: "Cochin",
  },
});

export default OrderScreen;
