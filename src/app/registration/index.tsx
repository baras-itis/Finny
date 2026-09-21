import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { InputForm } from "../../components/Input";

export default function Registration() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const isValid: boolean = name.trim() !== "" && password.trim() !== "";

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Регистрация</Text>
      {/** Имя */}
      <InputForm
        value={name}
        onChangeText={setName}
        securityCheck={false}
        placeholder="Ваше имя"
        keyboardType="default"
      />

      {/** Пароль */}
      <InputForm
        value={password}
        onChangeText={setPassword}
        securityCheck={true}
        placeholder="Пароль"
        keyboardType="default"
      />

      {/** Создать */}
      <TouchableOpacity
        disabled={!isValid}
        style={[styles.button, !isValid && styles.buttonDisabled]}
        onPress={() => router.navigate("/home")}
      >
        <Text style={styles.buttonText}>Создать</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  button: {
    backgroundColor: "black",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 50,
  },
  buttonDisabled: {
    backgroundColor: "gray",
    opacity: 0.6,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
