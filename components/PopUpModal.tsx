import { AntDesign } from "@expo/vector-icons";
import { Image, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { IMenuItem } from "../interfaces/IMenuItem";

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
            <Text style={styles.textStyle}>{selectedItem?.name}</Text>
            <View style={styles.detailsList}>
              <Text style={styles.bodyText}>{selectedItem?.price}</Text>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: "white",
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
  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
  },
  closeButton: {
    alignSelf: "flex-end",
    margin: 10,
  },
  contentContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 50,
  },
  itemPicture: {
    width: "60%",
    height: "60%",
    borderColor: "gray",
    borderWidth: 1,
  },
  bodyText: {
    color: "black",
    fontSize: 20,
  },
  detailsList: {
    alignSelf: "flex-end",
  },
});

export default PopUpModal;