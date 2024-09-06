import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  SafeAreaView,
  TextInput,
  Switch,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [Name, SetName] = useState("");
  const [IsSwitchOn, setIsSwitchOn] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput
          style={styles.TextInput}
          value={Name}
          onChangeText={SetName}
          placeholder="Input Your Email"
          autoCorrect={false}
          autoCapitalize="none"

          // secureTextEntry
          // keyboardType="number-pad"
        />
        <Text style={styles.text}>Your Email : {Name}</Text>
        <TextInput
          style={styles.textMessage}
          multiline
          placeholder="Your Message : "
        />
        <StatusBar backgroundColor={"#5F9EA0"} />
      </View>
      <View style={styles.SwitchContainer}>
        <Switch
          value={IsSwitchOn}
          onValueChange={() => setIsSwitchOn((previousState) => !previousState)}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={"#767577"}
        />

        <Text style={styles.ContainerText}>Dark Mode</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SwitchContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  ContainerText: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "#5F9EA0",
  },
  textMessage: {
    height: 100,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    borderColor: "#5F9EA0",
    textAlignVertical: "top",
  },
  TextInput: {
    height: 40,
    border: "gray",
    borderWidth: 1,
    padding: 5,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    borderColor: "#5F9EA0",
  },
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    paddingTop: StatusBar.currentHeight,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
