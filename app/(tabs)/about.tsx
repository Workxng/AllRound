import { Text, View, StyleSheet } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Aplikasi "AllRound" adalah aplikasi yang dikembangkan untuk pelaksanaan tugas P5 DTP Hacker, aplikasi ini diharapkan menunjukan kemampuan pemrograman mobile ananda Ardani Zuhra.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FDECF6"
  },
  text: {
    padding: 30,
    color: "#A78298",
    fontSize: 20,
    fontWeight: "bold",
    textAlign:"center"
  },
});
