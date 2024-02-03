import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, Text, ScrollView } from "react-native";
import { MenuItemCategories } from "../enums/MenuItemCategories";
import { IMenuItem } from "../interfaces/IMenuItem";
import AllMenuItems from "./../data/AllMenuItems";
import { menuCategories } from "./CategoriesTab";

interface MenuProps {
  selectedCategory: MenuItemCategories;
}

const Menu = ({ selectedCategory }: MenuProps) => {
  // const [menuItems, setMenuItems] = useState<IMenuItem[]>(AllMenuItems);

  const groups = menuCategories.map((category) =>
    AllMenuItems.filter((item) => item.type === category)
  );

  useEffect(() => {
    console.log(selectedCategory);
    // setMenuItems
    // setMenuItems(
    //   AllMenuItems.filter((item) => item.type == selectedCategory).map(
    //     (filteredItems) => filteredItems
    //   )
    // );
  }, [selectedCategory]);

  return (
    <ScrollView>
      {groups.map((items, index) => (
        <View key={index}>
          <Text>{items[0]?.type}</Text>
          <View style={styles.itemContainer}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={true}
              style={styles.scrollView}
            >
              {items.map((item, index) => (
                <View key={index}>
                  <Image source={item.coverUrl} style={styles.itemPicture} />
                  <Text>{item.name}</Text>
                  <Text>{item.price} Kr</Text>
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
  },
  itemPicture: {
    width: 150,
    height: 150,
    borderRadius: 50,
  },
  itemContainer: {
    margin: 10,
    alignItems: "center",
    flexDirection: "row",
    minHeight: 100,
  },
});

export default Menu;
