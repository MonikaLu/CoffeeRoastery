import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { MenuItemCategories } from "../enums/MenuItemCategories";

interface CategoriesTabProps {
  setSelectedCategory: (string: MenuItemCategories) => void;
}

export const menuCategories: MenuItemCategories[] =
  Object.values(MenuItemCategories);

const CategoriesTab = ({ setSelectedCategory }: CategoriesTabProps) => {
  return (
    <View style={styles.navContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {menuCategories.map((item, index) => (
          <TouchableOpacity
            style={styles.navItem}
            onPress={() => {
              setSelectedCategory(item);
            }}
            key={index}
          >
            <Text style={styles.navText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    backgroundColor: "#fff",
    height: 50,
  },
  scrollView: {
    flexDirection: "row",
  },
  navItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    borderRadius: 20,
    marginHorizontal: 5,
    marginTop: 5,
  },
  navText: {
    color: "#422006",
    fontSize: 16,
  },
});

export default CategoriesTab;
