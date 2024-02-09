import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { useStore } from "./../store/store";

const Cart = () => {
  const { cartItemsAmount } = useStore();
  return (
    <View style={styles.cartContainer}>
      <AntDesign name="shoppingcart" size={24} color="black" />
      <Text>{cartItemsAmount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cartContainer: {
    flexDirection: "row",
  },
});

export default Cart;
