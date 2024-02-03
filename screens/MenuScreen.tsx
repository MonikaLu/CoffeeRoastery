import { StyleSheet, View } from "react-native";
import CategoriesTab from "../components/CategoriesTab";
import Menu from "../components/Menu";
import { useEffect, useState } from "react";
import { MenuItemCategories } from "../types/MenuItemCategories";

const MenuScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState<MenuItemCategories>(
    MenuItemCategories.ALL
  );

  return (
    <View style={styles.orderContainer}>
      <CategoriesTab setSelectedCategory={setSelectedCategory} />
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
