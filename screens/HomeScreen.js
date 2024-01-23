import { StyleSheet, Text, View, Image } from "react-native";
const PlaceholderImage = require("./../assets/logo.png");
import OrderButton from "./../components/OrderButton";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>
      <Text style={{ color: "#000000" }}>Coffee Roastery</Text>
      <OrderButton
        label="Order your coffee!"
        onPress={() => navigation.navigate("Order")}
      />
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
  image: {
    width: 100,
    height: 100,
    borderRadius: 36,
  },
});

export default HomeScreen;
