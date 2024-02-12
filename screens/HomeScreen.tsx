import { StyleSheet, Text, View, Image } from "react-native";
const PlaceholderImage = require("./../assets/logo.png");
import Button from "../components/Button";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../interfaces/rootStack";
import { theme } from "../theme";

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

interface ScreenProps {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen = ({ navigation }: ScreenProps) => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>
      <Text style={{ color: theme.colors.text }}>Coffee Roastery</Text>
      <Button
        label="Let's coffee!"
        onPress={() => navigation.navigate("Menu")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 36,
  },
});

export default HomeScreen;
