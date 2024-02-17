import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { theme } from "../theme";

interface ListItemProps {
  title: string;
  itemOnClick: () => void;
  IconComponent: React.ElementType;
  iconName: React.ComponentProps<typeof Ionicons | typeof AntDesign>["name"];
  iconSize?: number;
  iconColor?: string;
}

const ListItem = ({
  title,
  itemOnClick,
  IconComponent,
  iconName,
  iconColor = theme.colors.text,
  iconSize = 24,
}: ListItemProps) => {
  return (
    <Pressable style={styles.itemContainer} onPress={itemOnClick}>
      <Text style={styles.textStyling}>{title}</Text>
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
    borderColor: theme.colors.border,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textStyling: {
    color: theme.colors.text,
  },
});

export default ListItem;
