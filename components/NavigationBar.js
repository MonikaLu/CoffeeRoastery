import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const NavigationBar = () => {
  return (
    <View style={styles.navContainer}>
      <TouchableOpacity onPress={() => console.log("Home Pressed")}>
        <Text style={styles.titleText}>Order Your Coffee!</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log("Menu Pressed")}>
        <Text style={styles.titleText}>Deals</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log("Contact Pressed")}>
        <Text style={styles.titleText}>Hot Drinks</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: "row",
    height: 60,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "space-around",
  },
  titleText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000000",
  },
});

export default NavigationBar;
