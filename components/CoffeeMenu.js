import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

const EspressoImage = require("./../assets/espresso.jpeg");
const CappuccinoImage = require("./../assets/cappuccino.jpeg");

const CoffeeMenu = () => {
  const coffeeItems = [
    {
      title: "Espresso",
      imageUrl: EspressoImage,
      price: 30,
    },
    {
      title: "Cappuccino",
      imageUrl: CappuccinoImage,
      price: 35,
    },
  ];

  return (
    <View style={styles.listView}>
      {coffeeItems.map((item, index) => (
        <View style={styles.coffeeContainer} key={index}>
          <Image source={item.imageUrl} style={styles.coffeePicture} />
          <Text>{item.title}</Text>
          <Text>{item.price} Kr</Text>
        </View>
      ))}
    </View>
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
