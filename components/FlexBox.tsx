import { View, Text, StyleSheet } from "react-native";

export default function Box({ children, style }) {
  return (
    <View style={[styles.Box, style]}>
      <Text style={styles.Text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Box: {
    padding: 10,
    backgroundColor: "#fff",
    flexGrow: 1,
    width: 100,
    height: 100,
  },
  Text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
});
