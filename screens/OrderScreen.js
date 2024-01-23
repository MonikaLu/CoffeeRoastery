import { StyleSheet, Text, View, Image } from "react-native";

const OrderScreen = ({ navigation, route }) => {
  return (
    <View style={styles.orderContainer}>
      <Text style={styles.titleText}>Order Your Coffee!</Text>
    </View>
  );
};

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

export default OrderScreen;
