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
  const { cartItems, setTotalPrice, totalPrice, setOrder } = useStore();
  const [selectedOrderType, setSelectedOrderType] = useState<orderTypes>(
    orderTypes.TAKE_AWAY
  );
  const [confirmation, setConfirmation] = useState(false);

  const newOrder: IOrder = {
    price: totalPrice,
    orderType: selectedOrderType,
    items: cartItems,
    comment: "",
  };

  const handleOrderType = (type: orderTypes) => {
    if (type === orderTypes.AT_OUR_PLACE) {
      setSelectedOrderType(orderTypes.AT_OUR_PLACE);
      if (totalPrice !== 0) {
        setTotalPrice(totalPrice + 3);
      }
    } else {
      setSelectedOrderType(orderTypes.TAKE_AWAY);
      if (totalPrice !== 0) {
        setTotalPrice(totalPrice - 3);
      }
    }
  };

  const handleOrderPlaced = (order: IOrder) => {
    setOrder(order);
    setModalVisible(false);
    setConfirmation(true);
  };

  const now = new Date();
  now.setMinutes(now.getMinutes() + 5);
  const orderReady = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  useEffect(() => {
    let totalPrice = 0;
    cartItems.map((item) => {
      totalPrice += item.price;
    });
    setTotalPrice(totalPrice);
  }, [cartItems.length]);

  return (
    <View>
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
                    onPress={() => handleOrderType(orderTypes.TAKE_AWAY)}
                  >
                    <Text style={styles.buttonText}>
                      {orderTypes.TAKE_AWAY}
                    </Text>
                  </Pressable>
                  <Pressable
                    style={[
                      styles.button,
                      selectedOrderType === orderTypes.AT_OUR_PLACE
                        ? styles.selectedButton
                        : styles.button,
                    ]}
                    onPress={() => handleOrderType(orderTypes.AT_OUR_PLACE)}
                  >
                    <Text style={styles.buttonText}>
                      {orderTypes.AT_OUR_PLACE} (+3kr)
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
                <View>
                  <Text style={styles.titleStyling}>To pay</Text>
                  <View style={styles.paymentStyling}>
                    <Text>Ordering</Text>
                    <Text>NOK {totalPrice}</Text>
                  </View>
                  <View style={styles.paymentStyling}>
                    <Text>Discount</Text>
                    <Text>-0</Text>
                  </View>
                  <View style={styles.paymentStyling}>
                    <Text>In total</Text>
                    <Text>NOK {totalPrice}</Text>
                  </View>
                </View>
                <Text>Ready at: Kl {orderReady}</Text>
                <Pressable
                  style={styles.orderButton}
                  onPress={() => {
                    handleOrderPlaced(newOrder);
                  }}
                >
                  <Text>Place your order</Text>
                  <Text>{totalPrice} Kr</Text>
                </Pressable>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="none"
        transparent={true}
        visible={confirmation}
        onRequestClose={() => {
          setConfirmation(!confirmation);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.confirmationStyling}>
            <Pressable
              style={styles.closeButton}
              onPress={() => setConfirmation(!confirmation)}
            >
              <AntDesign name="closecircle" size={24} color="black" />
            </Pressable>
            <Text>Your order is sent!</Text>
          </View>
        </View>
      </Modal>
    </View>
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
  paymentStyling: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
  },
  confirmationStyling: {
    width: 150,
    height: 100,
    backgroundColor: theme.colors.background,
    borderColor: theme.colors.border,
    borderStyle: "solid",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default CartDetails;
