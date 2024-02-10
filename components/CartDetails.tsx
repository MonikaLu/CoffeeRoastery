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
interface CartDetailsProps {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
}

const CartDetails = ({ modalVisible, setModalVisible }: CartDetailsProps) => {
  const { cartItems } = useStore();

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
              <Text style={styles.titleStyling}>Items</Text>
              {cartItems.map((cartItem, index) => (
                <MenuItemPreview key={index} item={cartItem} />
              ))}
            </View>
            <View>
              <Text style={styles.titleStyling}>Coupons/Loyalty Card</Text>
            </View>
            <Pressable style={styles.orderButton}>
              <Text>Place your order</Text>
            </Pressable>
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
    height: 50,
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "solid",
  },
});
export default CartDetails;
