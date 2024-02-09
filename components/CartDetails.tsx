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
interface CartDetailsProps {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
}

const CartDetails = ({ modalVisible, setModalVisible }: CartDetailsProps) => {
  const { cartItems, removeFromCart } = useStore();

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
              {cartItems.map((cartItem, index) => (
                <MenuItemPreview key={index} item={cartItem} />
              ))}
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
});
export default CartDetails;
