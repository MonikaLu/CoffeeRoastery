import { StyleSheet, View } from "react-native";
import CategoriesTab from "../components/CategoriesTab";
import Menu from "../components/Menu";
import { useState } from "react";
import { MenuItemCategories } from "./../enums";
import { theme } from "../theme";

const MenuScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState<MenuItemCategories>(
    MenuItemCategories.HOT_COFFEES
  );

  return (
    <View style={styles.orderContainer}>
      <CategoriesTab
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <Menu selectedCategory={selectedCategory} />
    </View>
  );
};

const styles = StyleSheet.create({
  orderContainer: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
});

export default MenuScreen;
