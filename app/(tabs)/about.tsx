import { Text, View, StyleSheet } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tentang AllRound</Text>
      <Text style={styles.text}>Aplikasi "AllRound" adalah aplikasi yang dikembangkan untuk pelaksanaan tugas P5 DTP Hacker, 
        aplikasi ini berisikan wisata-wisata yang berada di Indonesia. Informasi tentang wisata mencangkup nama wisata, gambar wisata, 
        lokasi wisata, dan deskripsi singkat tentang wisata. Aplikasi ini diharapkan membantu para wisatawan untuk mengetahui wisata-wisata yang 
        berada di Indonesia.</Text>
      <Text style={styles.title}>Cara Penggunaan</Text>
      <Text style={styles.text}>Di bagian index, terdapat list gambar wisata dengan Informasi nama dan lokasi wisata tersebut, untuk menampilkan
        detail wisata, klik pada gambar. Aplikasi akan menampilkan deskripsi singkat tentang wisata tersebut.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {    
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#FDECF6"
  },
  title: {
    paddingLeft: 30,
    fontWeight: "bold",
    color: "#4a4d4c",
    fontSize: 20,
    textAlign:"left"
  },
  text: {
    padding: 30,
    color: "#4a4d4c",
    fontSize: 20,
    textAlign:"justify"
  },
});
