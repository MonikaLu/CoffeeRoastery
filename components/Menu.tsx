import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, Image, Text, ScrollView } from "react-native";
import { MenuItemCategories } from "../enums/MenuItemCategories";
import AllMenuItems from "./../data/AllMenuItems";
import { menuCategories } from "./CategoriesTab";
import { AntDesign } from "@expo/vector-icons";
interface MenuProps {
  selectedCategory: MenuItemCategories;
}

const Menu = ({ selectedCategory }: MenuProps) => {
  const groups = menuCategories.map((category) =>
    AllMenuItems.filter((item) => item.type === category)
  );

  const scrollRef = useRef<ScrollView>(null);
  useEffect(() => {
    console.log(selectedCategory);
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
          style={styles.container}
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
          <Text style={styles.groupTitle}>{items[0]?.type}</Text>
          <View style={styles.groupContainer}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={true}
              style={styles.scrollView}
            >
              {items.map((item, index) => (
                <View key={index} style={styles.itemContainer}>
                  <View style={styles.imageContainer}>
                    <Image source={item.coverUrl} style={styles.itemPicture} />
                    <AntDesign
                      name="pluscircle"
                      size={30}
                      color="black"
                      style={styles.iconStyle}
                    />
                  </View>
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
    width: 120,
    height: 120,
    borderRadius: 60,
    borderColor: "gray",
    borderWidth: 1,
  },
  groupContainer: {
    alignItems: "center",
    flexDirection: "row",
    minHeight: 150,
    margin: 10,
  },
  itemContainer: {
    borderRadius: 50,
    height: 190,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    margin: 10,
  },
  groupTitle: {
    color: "#422006",
    fontSize: 20,
    fontWeight: "300",
  },
  imageContainer: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  iconStyle: {
    zIndex: 1,
    right: 5,
    bottom: 5,
    position: "absolute",
  },
});

export default Menu;
