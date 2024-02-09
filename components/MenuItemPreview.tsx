import { Image, StyleSheet, Text, View } from "react-native";
import { IMenuItem } from "../interfaces/IMenuItem";

interface MenuItemPreviewProps {
  item: IMenuItem;
}

const MenuItemPreview = ({ item }: MenuItemPreviewProps) => {
  return (
    <View style={styles.itemContainer}>
      <Image style={styles.imageContainer} source={item.coverUrl}></Image>
      <Text>{item.name}</Text>
      <Text>{item.availableSizes}</Text>
      <Text>{item.milkOptions}</Text>
      <Text>{item.otherOptions}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: "90%",
    height: 100,
    padding: 10,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "gray",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imageContainer: {
    width: 80,
    height: 80,
  },
});

export default MenuItemPreview;
