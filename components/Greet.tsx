import { View, Text } from "react-native";

export default function Greet({ name }) {
  return (
    <View>
      <Text style={{ textAlign: "center" }}>Hello, {name}!</Text>
    </View>
  );
}
