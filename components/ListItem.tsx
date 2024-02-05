import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

interface ListItemProps {
  title: string;
  itemOnClick: () => void;
  IconComponent: React.ElementType; // Use React.ElementType for component type
  iconName: React.ComponentProps<typeof Ionicons | typeof AntDesign>["name"]; // Use Ionicons as a base type for icon names
  iconSize?: number;
  iconColor?: string;
}

const ListItem: React.FC<ListItemProps> = ({
  title,
  itemOnClick,
  IconComponent,
  iconName,
  iconColor = "black", // Provide default value
  iconSize = 24, // Provide default value
}) => {
  return (
    <Pressable style={styles.itemContainer} onPress={itemOnClick}>
      <Text>{title}</Text>
      <IconComponent name={iconName} size={iconSize} color={iconColor} />
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
