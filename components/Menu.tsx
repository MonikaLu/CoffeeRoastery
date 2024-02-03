import React, { useEffect, useRef, useState } from "react";
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

  const [scrollToIndex, setScrollToIndex] = useState(0);

  const scrollRef = useRef<ScrollView>(null);
  useEffect(() => {
    console.log(selectedCategory);
    // setMenuItems
    // setMenuItems(
    //   AllMenuItems.filter((item) => item.type == selectedCategory).map(
    //     (filteredItems) => filteredItems
    //   )
    // );
  }, [selectedCategory]);

  const [groupHeights, setGroupHeights] = useState<number[]>([]);

  useEffect(() => {
    const index = menuCategories.indexOf(selectedCategory);
    const offset = groupHeights
      .slice(0, index)
      .reduce((acc, height) => acc + height, 0);
    scrollRef.current?.scrollTo({ y: offset, animated: true });
  }, [selectedCategory, groupHeights]);

  return (
    <ScrollView ref={scrollRef}>
      {groups.map((items, index) => (
        <View
          key={index}
          onLayout={(event) => {
            const { height } = event.nativeEvent.layout;
            setGroupHeights((prevHeights) => {
              const newHeights = [...prevHeights];
              newHeights[index] = height;
              return newHeights;
            });
          }}
        >
          <Text>{items[0]?.type}</Text>
          <View style={styles.groupContainer}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={true}
              style={styles.scrollView}
            >
              {items.map((item, index) => (
                <View key={index} style={styles.itemContainer}>
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
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  groupContainer: {
    margin: 10,
    alignItems: "center",
    flexDirection: "row",
    minHeight: 100,
  },
  itemContainer: {
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 50,
    height: 102,
    width: 102,
    margin: 5,
  },
});

export default Menu;
