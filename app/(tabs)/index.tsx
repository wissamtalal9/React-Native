import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  ImageBackground,
  KeyboardAvoidingView,
  StatusBar,
  Platform,
} from "react-native";
import { useState } from "react";
const bg = require("@/assets/images/OIP.jpeg");
export default function App() {
  const [UserName, setUSerName] = useState("");
  const [Password, setPassword] = useState("");
  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
      style={styles.container}
    >
      <StatusBar color={"#000"} />
      <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
        <View style={styles.StyleForm}>
          <Text style={styles.title}>Welcome to React Native!</Text>
          <Text style={styles.label}>User Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your User name"
            value={UserName}
            onChangeText={(text) => setUSerName(text)}

            //onChangeText={(text) => setName(text)}
          />
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.inputPassword}
            secureTextEntry={true}
            placeholder="Enter your password"
            SecureTextEntry
            value={Password}
            onChangeText={(text) => setPassword(text)}
          />
          <Button
            style={styles.ButtonStyle}
            title="Log In"
            onPress={() => alert("Login Successful")} // TODO: Add your authentication logic here
          />
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  label: {
    fontWeight: "bold",
    marginBottom: 10,
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
  input: {
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },
  inputPassword: {
    borderWidth: 1,
    borderColor: "white",
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },
  StyleForm: {
    padding: 20,
    backgroundColor: "#000000c0",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    marginBottom: 30,
    paddingHorizontal: 20,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  container: {
    flex: 1,
    color: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 20,
    marginTop: 20,
    paddingHorizontal: 20,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    // alignSelf: "center",
  },
  ButtonStyle: {
    backgroundColor: "#04AA6D",
  },
});
