import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { IMenuItem } from "../interfaces/IMenuItem";
import { Ionicons } from "@expo/vector-icons";
import { useStore } from "../store/store";
import { theme } from "../theme";

interface MenuItemPreviewProps {
  item: IMenuItem;
}

const MenuItemPreview = ({ item }: MenuItemPreviewProps) => {
  const { removeFromCart } = useStore();

  return (
    <View>
      <View style={styles.itemContainer}>
        <Image style={styles.imageContainer} source={item.coverUrl}></Image>
        <View>
          <Text>{item.name}</Text>
          <Text>{item.availableSizes}</Text>
          <Text>{item.milkOptions}</Text>
          <Text>{item.otherOptions}</Text>
        </View>
        <Text>{item.price} Kr</Text>
        <Pressable
          onPress={() => {
            removeFromCart(item);
          }}
        >
          <Ionicons name="trash" size={24} color="black" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: "100%",
    height: 100,
    padding: 10,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: theme.colors.border,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imageContainer: {
    width: "30%",
    height: "100%",
  },
});

export default MenuItemPreview;
