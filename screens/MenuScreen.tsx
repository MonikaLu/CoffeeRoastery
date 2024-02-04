import { StyleSheet, View } from "react-native";
import CategoriesTab from "../components/CategoriesTab";
import Menu from "../components/Menu";
import { useState } from "react";
import { MenuItemCategories } from "./../enums";

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
    backgroundColor: "#fff7ed",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  titleText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000000",
  },
});

export default MenuScreen;
