import { AntDesign } from "@expo/vector-icons";
import {
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { IMenuItem } from "../interfaces/IMenuItem";
import { useState } from "react";
import { DrinkSize } from "../enums";

interface ModalProps {
  modalVisible: boolean;
  setModalVisible: (status: boolean) => void;
  selectedItem: IMenuItem;
}

const PopUpModal = ({
  modalVisible,
  setModalVisible,
  selectedItem,
}: ModalProps) => {
  const [selectedSize, setSelectedSize] = useState<DrinkSize>(DrinkSize.MEDIUM);

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
          <Pressable
            style={styles.closeButton}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <AntDesign name="closecircle" size={24} color="black" />
          </Pressable>
          <View style={styles.contentContainer}>
            <Image
              style={styles.itemPicture}
              source={selectedItem.coverUrl}
            ></Image>
            <Text style={styles.titleStyle}>{selectedItem?.name}</Text>
            <View style={styles.detailsList}>
              <View style={styles.sizeButtonsContainer}>
                {selectedItem.availableSizes?.map((size, index) => (
                  <Pressable
                    style={[
                      styles.button,
                      selectedSize === size
                        ? styles.selectedButton
                        : styles.button,
                    ]}
                    onPress={() => setSelectedSize(size)}
                    key={index}
                  >
                    <Text style={styles.buttonText}>{size}</Text>
                  </Pressable>
                ))}
              </View>
            </View>
            <Pressable
              style={styles.addButton}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.buttonText}>
                Add to Cart {selectedItem.price} Kr
              </Text>
            </Pressable>
          </View>
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
  contentContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    rowGap: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  itemPicture: {
    width: "85%",
    height: "60%",
    borderColor: "gray",
    borderWidth: 1,
  },
  detailsList: {
    width: "100%",
  },
  sizeButtonsContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    columnGap: 10,
    width: "100%",
  },
  button: {
    backgroundColor: "#fef6e4",
    borderRadius: 5,
    padding: 10,
    borderColor: "#001858",
    borderStyle: "solid",
    borderWidth: 1,
  },
  addButton: {
    backgroundColor: "#f3d2c1",
    borderRadius: 5,
    padding: 10,
    width: "90%",
  },
  closeButton: {
    alignSelf: "flex-end",
    margin: 10,
    borderRadius: 40,
    padding: 10,
  },
  selectedButton: {
    backgroundColor: "#f3d2c1",
  },

  // Text
  titleStyle: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
  },
  bodyText: {
    color: "#001858",
    fontSize: 20,
  },
  buttonText: {
    color: "#001858",
    fontSize: 15,
    fontWeight: "600",
  },
});

export default PopUpModal;
