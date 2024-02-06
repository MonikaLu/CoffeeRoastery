import React, { useEffect, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  Pressable,
  Modal,
  Alert,
} from "react-native";
import { MenuItemCategories } from "./../enums";
import AllMenuItems from "./../data/AllMenuItems";
import { menuCategories } from "./CategoriesTab";
import { AntDesign } from "@expo/vector-icons";
import PopUpModal from "./PopUpModal";
import { IMenuItem } from "../interfaces/IMenuItem";
interface MenuProps {
  selectedCategory: MenuItemCategories;
}
const groups = menuCategories.map((category) =>
  AllMenuItems.filter((item) => item.type === category)
);
const Menu = ({ selectedCategory }: MenuProps) => {
  const scrollRef = useRef<ScrollView>(null);
  const [categoryOffsets, setCategoryOffsets] = useState<{
    [key: string]: number;
  }>({});
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<IMenuItem>();

  const handleLayout = (category: string, event: any) => {
    const { y } = event.nativeEvent.layout;
    setCategoryOffsets((prevOffsets) => ({
      ...prevOffsets,
      [category]: y,
    }));
  };
  useEffect(() => {
    if (selectedCategory in categoryOffsets) {
      const y = categoryOffsets[selectedCategory];
      scrollRef.current?.scrollTo({ y: y, animated: true });
    }
  }, [selectedCategory, categoryOffsets]);

  return (
    <ScrollView ref={scrollRef}>
      {groups.map((items, index) => (
        <View
          style={styles.container}
          key={menuCategories[index]}
          onLayout={(event) => handleLayout(menuCategories[index], event)}
        >
          <Text style={styles.groupTitle}>{items[0]?.type}</Text>
          <View style={styles.groupContainer}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={true}
              style={styles.scrollView}
            >
              {items.map((item, index) => (
                <View>
                  {selectedItem && (
                    <PopUpModal
                      modalVisible={modalVisible}
                      setModalVisible={setModalVisible}
                      selectedItem={selectedItem}
                      key={index + selectedItem.name}
                    />
                  )}
                  <Pressable
                    key={item.name}
                    style={styles.itemContainer}
                    onPress={() => {
                      setModalVisible(true);
                      setSelectedItem(item);
                    }}
                  >
                    <View style={styles.imageContainer}>
                      <Image
                        source={item.coverUrl}
                        style={styles.itemPicture}
                      />
                      <AntDesign
                        name="pluscircle"
                        size={30}
                        color="black"
                        style={styles.iconStyle}
                      />
                    </View>
                    <Text>{item.name}</Text>
                    <Text>{item.price} Kr</Text>
                  </Pressable>
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      ))}
      <View style={styles.test}></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  test: {
    height: 450,
    width: "100%",
    backgroundColor: "black",
  },
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
