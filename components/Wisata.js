import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";

const WisataDetail = ({ item }) => {
  return (
    <Link
      href={{
        pathname: "/wisata/[wisata]",
        params: { wisata: item.id },
      }}
    >
      <View style={styles.container}>
        <Image style={{
          justifyContent: 'center',
          alignItems: 'center'
        }}
          source={{
            uri: item.gambar,
            height: 150,
            width: 250,
            resizeMode: "cover",
          }}
        />
        <Text style={{
          textAlign: "center",
          fontWeight: "Bold",
        }}>{item.nama}</Text>
        <Text style={{
          textAlign: "center",
        }}>{item.lokasi}</Text>
      </View>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#8f838c",
    padding: 20,
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FDECF6",
  },
});

export default WisataDetail;