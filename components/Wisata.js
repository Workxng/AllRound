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
            height: 100,
            width: 100,
            resizeMode: "cover",
          }}
        />
        <Text style={{
          textAlign: "center",
        }}>{item.nama}</Text>
        <Text style={{
          textAlign: "center",
          fontWeight: "Bold",

        }}>{item.lokasi}</Text>
      </View>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#8f838c",
    width: 180,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FDECF6",
  },
});

export default WisataDetail;