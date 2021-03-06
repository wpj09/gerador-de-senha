import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import Slider from "@react-native-community/slider";
import Clipboard from "expo-clipboard";

let charset =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%¨&*()_+-=[{]}/?.,<>";

export default function app() {
  const [password, setPassword] = useState("");
  const [size, setSize] = useState(10);

  function generatePass() {
    let pass = "";
    for (let i = 0, n = charset.length; i < size; i++) {
      pass += charset.charAt(Math.floor(Math.random() * n));
    }

    setPassword(pass);
  }

  function copyPass() {
    Clipboard.setString(password);
    alert("Senha copiada com sucesso!!!");
  }

  return (
    <View style={styles.container}>
      <Image source={require("./src/assets/logo.png")} style={styles.logo} />

      <Text style={styles.title}>{size} Caracteres</Text>

      <View style={styles.area}>
        <Slider
          style={{ height: 50 }}
          minimumValue={4}
          maximumValue={50}
          minimumTrackTintColor="#ff260080"
          maximumTrackTintColor="#000"
          value={size}
          onValueChange={(valor) => setSize(valor.toFixed(0))}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePass}>
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>

      {password !== "" && (
        <View style={styles.area}>
          <Text style={styles.password} onLongPress={copyPass}>
            {password}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4186c7",
  },
  logo: {
    marginBottom: 60,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  area: {
    margin: 15,
    marginBottom: 15,
    backgroundColor: "#4d8bc5",
    width: "80%",
    borderRadius: 7,
  },
  button: {
    backgroundColor: "#FFA200",
    width: "80%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
    marginBottom: 25,
  },
  buttonText: {
    fontSize: 20,
    color: "#ffffff",
    fontWeight: "bold",
  },
  password: {
    padding: 10,
    textAlign: "center",
    fontSize: 20,
    color: "#dacc16",
  },
});
