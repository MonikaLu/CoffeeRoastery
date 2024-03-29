import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { MenuItemCategories } from "./../enums";
import { theme } from "../theme";

interface CategoriesTabProps {
  setSelectedCategory: (category: MenuItemCategories) => void;
  selectedCategory: MenuItemCategories;
}

export const menuCategories: MenuItemCategories[] =
  Object.values(MenuItemCategories);

const CategoriesTab = ({
  setSelectedCategory,
  selectedCategory,
}: CategoriesTabProps) => {
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
            <Text
              style={[
                styles.navText,
                item === selectedCategory
                  ? styles.selectedNavItem
                  : styles.navText,
              ]}
            >
              {item}
            </Text>
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
    color: theme.colors.text,
    fontSize: 16,
    fontWeight: "100",
  },
  selectedNavItem: {
    fontWeight: "400",
    textDecorationColor: theme.colors.text,
    textDecorationStyle: "solid",
    color: theme.colors.text,
  },
});

export default CategoriesTab;
