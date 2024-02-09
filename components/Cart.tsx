import { AntDesign } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useStore } from "./../store/store";
import { useState } from "react";
import CartDetails from "./CartDetails";

const Cart = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { cartItemsAmount } = useStore();

  return (
    <>
      <Pressable
        style={styles.cartContainer}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <AntDesign name="shoppingcart" size={24} color="black" />
        <Text>{cartItemsAmount}</Text>
      </Pressable>
      <CartDetails
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </>
  );
};

const styles = StyleSheet.create({
  cartContainer: {
    flexDirection: "row",
    width: 30,
    height: 30,
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
  },
});

export default Cart;
