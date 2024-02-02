import React, { useState } from "react";
import { View, StyleSheet, Image, Text, ScrollView } from "react-native";
import coffeeItems from "../coffees";

const CoffeeMenu = () => {
  const [menuItems, setCoffeeItems] = useState(coffeeItems);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.listView}
    >
      {menuItems.map((item, index) => (
        <View style={styles.coffeeContainer} key={index}>
          <Image source={item.coverUrl} style={styles.coffeePicture} />
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
  coffeePicture: {
    width: 200,
    height: 200,
    borderRadius: 50,
  },
  coffeeContainer: {
    margin: 10,
    alignItems: "center",
  },
});

export default CoffeeMenu;
