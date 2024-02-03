import { StyleSheet, View } from "react-native";
import CategoriesMenu from "../components/CategoriesMenu";
import CoffeeMenu from "../components/CoffeeMenu";
import { useEffect, useState } from "react";
import { MenuItemCategories } from "../types/MenuItemCategories";

const MenuScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState<MenuItemCategories>(
    MenuItemCategories.ALL
  );

  return (
    <View style={styles.orderContainer}>
      <CategoriesMenu setSelectedCategory={setSelectedCategory} />
      <CoffeeMenu selectedCategory={selectedCategory} />
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
