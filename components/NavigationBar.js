import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";

const NavigationBar = () => {
  return (
    <View style={styles.navContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => console.log("Order Your Coffee!")}
        >
          <Text style={styles.navText}>Order Your Coffee!</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => console.log("Deals")}
        >
          <Text style={styles.navText}>Deals</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => console.log("Hot Drinks")}
        >
          <Text style={styles.navText}>Hot Drinks</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => console.log("Cold Drinks")}
        >
          <Text style={styles.navText}>Cold Drinks</Text>
        </TouchableOpacity>
        {/* Add more items as needed */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    backgroundColor: "#fff", // White background for the entire bar
    height: 50,
  },
  scrollView: {
    flexDirection: "row",
  },
  navItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff", // Deep purple for the item background
    borderRadius: 20,
    marginHorizontal: 5,
    marginTop: 5,
  },
  navText: {
    color: "#422006",
    fontSize: 16,
  },
});

export default NavigationBar;
