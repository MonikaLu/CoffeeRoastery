import { AntDesign } from "@expo/vector-icons";
import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useStore } from "./../store/store";
import MenuItemPreview from "./MenuItemPreview";
import Button from "./Button";
import { useEffect, useState } from "react";
interface CartDetailsProps {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
}

const CartDetails = ({ modalVisible, setModalVisible }: CartDetailsProps) => {
  const { cartItems } = useStore();
  const [price, setPrice] = useState(0);

  useEffect(() => {
    let totalPrice = 0;
    cartItems.map((item) => {
      totalPrice += item.price;
    });
    setPrice(totalPrice);
  }, [cartItems.length]);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <ScrollView showsVerticalScrollIndicator>
            <Pressable
              style={styles.closeButton}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <AntDesign name="closecircle" size={24} color="black" />
            </Pressable>
            <View style={styles.cartDetailsContent}>
              <Text style={styles.titleStyling}>Your Order</Text>
              <Text style={styles.titleStyling}>Pick Up Options</Text>
              <View style={styles.buttons}>
                <Button label="Take away" />
                <Button label="At our place" />
              </View>
              <Text style={styles.titleStyling}>
                Items ({cartItems.length})
              </Text>
              {cartItems.map((cartItem, index) => (
                <MenuItemPreview key={index} item={cartItem} />
              ))}
              <View>
                <Text style={styles.titleStyling}>Coupons/Loyalty Card</Text>
                <View>
                  <Text>Coupons should be here</Text>
                </View>
              </View>
              <Pressable style={styles.orderButton}>
                <Text>Place your order: {price} Kr</Text>
              </Pressable>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalView: {
    backgroundColor: "#fef6e4",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    elevation: 5,
    flexDirection: "column",
    width: "90%",
    height: "90%",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    alignSelf: "flex-end",
    margin: 10,
    borderRadius: 40,
    padding: 10,
  },
  cartDetailsContent: {
    gap: 10,
    margin: 10,
  },
  titleStyling: {
    color: "#422006",
    fontSize: 20,
    fontWeight: "300",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "flex-start",
    columnGap: 10,
    width: "100%",
  },
  orderButton: {
    width: "100%",
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "solid",
    color: "#001858",
    fontSize: 15,
    fontWeight: "600",
    backgroundColor: "#f3d2c1",
    borderRadius: 5,
    padding: 10,
    marginTop: 30,
    marginBottom: 30,
  },
});
export default CartDetails;
