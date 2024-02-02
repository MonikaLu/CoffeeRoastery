import React from "react";
import { View, StyleSheet, Image, Text, ScrollView } from "react-native";

const CappuccinoImage = require("./../assets/cappuccino.png");
const LatteImage = require("./../assets/latte.png");
const MacchiatoImage = require("./../assets/macchiato.png");
const EspressoImage = require("./../assets/espresso.png");
const HotChocolateImage = require("./../assets/hot_chocolate.png");
const AffogatoImage = require("./../assets/affogato.png");
const AmericanoImage = require("./../assets/americano.png");
const CortadoImage = require("./../assets/cortado.png");
const MochaImage = require("./../assets/mocha2.png");
const ChristmasMochaImage = require("./../assets/mocha.png");

const CoffeeMenu = () => {
  const coffeeItems = [
    {
      title: "Affogato",
      imageUrl: AffogatoImage,
      price: 30,
    },
    {
      title: "Americano",
      imageUrl: AmericanoImage,
      price: 30,
    },
    {
      title: "Cappuccino",
      imageUrl: CappuccinoImage,
      price: 30,
    },
    {
      title: "Cortado",
      imageUrl: CortadoImage,
      price: 30,
    },
    {
      title: "Latte",
      imageUrl: LatteImage,
      price: 35,
    },
    {
      title: "Macchiato",
      imageUrl: MacchiatoImage,
      price: 50,
    },
    {
      title: "Christmas Mocha",
      imageUrl: ChristmasMochaImage,
      price: 50,
    },
    {
      title: "Mocha",
      imageUrl: MochaImage,
      price: 50,
    },
    {
      title: "Espresso",
      imageUrl: EspressoImage,
      price: 25,
    },
    {
      title: "Hot Chocolate",
      imageUrl: HotChocolateImage,
      price: 25,
    },
  ];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.listView}
    >
      {coffeeItems.map((item, index) => (
        <View style={styles.coffeeContainer} key={index}>
          <Image source={item.imageUrl} style={styles.coffeePicture} />
          <Text>{item.title}</Text>
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
