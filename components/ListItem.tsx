import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Icon } from "@expo/vector-icons/build/createIconSet";

interface listItemProps {
  title: string;
  itemOnClick: () => void;
  icon: keyof typeof Ionicons.glyphMap;
  iconSize?: number;
  iconColor?: string;
}

const ListItem = ({
  title,
  itemOnClick,
  icon,
  iconColor,
  iconSize,
}: listItemProps) => {
  return (
    <Pressable style={styles.itemContainer} onPress={itemOnClick}>
      <Text>{title}</Text>
      <Ionicons name={icon} color={iconColor} size={iconSize} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "gray",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default ListItem;
