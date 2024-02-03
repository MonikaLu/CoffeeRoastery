import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, Text, ScrollView } from "react-native";
import { MenuItemCategories } from "../types/MenuItemCategories";
import { IMenuItem } from "../types/IMenuItem";
import AllMenuItems from "../AllMenuItems";

interface MenuProps {
  selectedCategory: MenuItemCategories;
}

const Menu = ({ selectedCategory }: MenuProps) => {
  const [menuItems, setMenuItems] = useState<IMenuItem[]>(AllMenuItems);

  useEffect(() => {
    if (selectedCategory === MenuItemCategories.ALL) {
      setMenuItems(AllMenuItems);
    } else {
      setMenuItems(
        AllMenuItems.filter((item) => item.type == selectedCategory).map(
          (filteredItems) => filteredItems
        )
      );
    }
  }, [selectedCategory]);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.listView}
    >
      {menuItems.map((item, index) => (
        <View style={styles.itemsContainer} key={index}>
          <Image source={item.coverUrl} style={styles.itemPicture} />
          <Text>{item.name}</Text>
          <Text>{item.price} Kr</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listView: {
    flex: 1,
    flexDirection: "row",
  },
  itemPicture: {
    width: 200,
    height: 200,
    borderRadius: 50,
  },
  itemsContainer: {
    margin: 10,
    alignItems: "center",
  },
});

export default Menu;
