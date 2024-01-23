import { StyleSheet, Text, Pressable, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function OrderButton({ label, theme }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={styles.button}
        onPress={() => alert("You have added an order!")}
      >
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 100,
    height: 50,
    marginTop: 50,
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: "1",
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 16,
  },
});
