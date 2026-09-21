import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Финни</Text>
      {/** Кнопка регистрации */}
      <Link href="/registration" asChild>
        <TouchableOpacity style={styles.regLink}>
          <Text style={styles.registration}>Регистрация</Text>
        </TouchableOpacity>
      </Link>
      <TouchableOpacity>
        <Text>Демо версия</Text>
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
    fontWeight: 900,
    textTransform: "uppercase",
  },
  registration: {
    color: "white",
    textAlign: "center",
  },
  regLink: {
    backgroundColor: "black",
    paddingVertical: 15,
    width: "90%",
    borderRadius: 50,
  },
});
