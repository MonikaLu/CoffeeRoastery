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
import { theme } from "../theme";
import { typography } from "../typography";
import { IOrder } from "../interfaces/IOrder";
import { orderTypes } from "../enums";
interface CartDetailsProps {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
}

const CartDetails = ({ modalVisible, setModalVisible }: CartDetailsProps) => {
  const { cartItems } = useStore();
  const [price, setPrice] = useState(0);
  const [selectedOrderType, setSelectedOrderType] = useState<orderTypes>(
    orderTypes.TAKE_AWAY
  );
  const [newOrder, setNewOrder] = useState<IOrder>();

  const order: IOrder = {
    price: 0,
    orderType: orderTypes.TAKE_AWAY,
    items: [],
    comment: "",
  };

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
            <View style={styles.header}>
              <Text style={styles.titleStyling}>Your Order</Text>
              <Pressable
                style={styles.closeButton}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <AntDesign name="closecircle" size={24} color="black" />
              </Pressable>
            </View>

            <View style={styles.cartDetailsContent}>
              <Text style={styles.titleStyling}>Pick Up Options</Text>
              <View style={styles.buttons}>
                <Pressable
                  style={[
                    styles.button,
                    selectedOrderType === orderTypes.TAKE_AWAY
                      ? styles.selectedButton
                      : styles.button,
                  ]}
                  onPress={() => setSelectedOrderType(orderTypes.TAKE_AWAY)}
                >
                  <Text style={styles.buttonText}>{orderTypes.TAKE_AWAY}</Text>
                </Pressable>
                <Pressable
                  style={[
                    styles.button,
                    selectedOrderType === orderTypes.AT_OUR_PLACE
                      ? styles.selectedButton
                      : styles.button,
                  ]}
                  onPress={() => setSelectedOrderType(orderTypes.AT_OUR_PLACE)}
                >
                  <Text style={styles.buttonText}>
                    {orderTypes.AT_OUR_PLACE}
                  </Text>
                </Pressable>
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
                <Text>Place your order</Text>
                <Text>{price} Kr</Text>
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
    backgroundColor: theme.colors.background,
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
    ...typography.h3,
  },
  buttons: {
    flexDirection: "row",
    columnGap: 10,
    width: "40%",
    height: 50,
  },
  orderButton: {
    ...typography.buttonText,
    width: "100%",
    height: 40,
    borderColor: theme.colors.border,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: theme.colors.card,
    borderRadius: 5,
    padding: 10,
    marginTop: 30,
    marginBottom: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  selectedButton: {
    backgroundColor: theme.colors.notification,
  },
  header: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    padding: 10,
  },
  button: {
    backgroundColor: theme.colors.background,
    borderRadius: 5,
    padding: 10,
    borderColor: theme.colors.border,
    borderStyle: "solid",
    borderWidth: 1,
  },
  buttonText: {
    ...typography.buttonText,
  },
});
export default CartDetails;
