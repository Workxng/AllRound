import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';


const data = [
    {
      id: "1",
      provinsi: "Bali",
      gambar: "https://i2.wp.com/blog.tripcetera.com/id/wp-content/uploads/2020/03/leebudihart_76864081_2484833498431751_3194446755026370817_n.jpg",
      nama: "Pantai Kuta",
      lokasi: "Bali",
      detail: "Pantai dengan pasir putih dan ombak yang cocok untuk berselancar di Bali."
    },
    {
      id: "2",
      provinsi: "Jawa",
      gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmhHSH0gqsJf0rrsosUwSElVUN1PcKvEDwYQ&s",
      nama: "Borobudur",
      lokasi: "Magelang, Jawa Tengah",
      detail: "Candi Buddha terbesar di dunia yang terletak di Magelang, Jawa Tengah"
    },
    {
      id: "3",
      provinsi: "Sumatera",
      gambar: "https://asset.kompas.com/crops/9GFOX2-n00eSy8EvhR2r0nlFd_w=/0x1:1000x668/1200x800/data/photo/2021/08/06/610d24fd0501a.jpg",
      nama: "Danau Toba",
      lokasi: "Sumatera Utara",
      detail: "Danau vulkanik terbesar di Asia Tenggara yang berada di Sumatera Utara."
    },
    {
      id: "4",
      provinsi: "Jawa",
      gambar: "https://torch.id/cdn/shop/articles/Artikel_167_-_Preview.webp?v=1713337145",
      nama: "Gunung Bromo",
      lokasi: "Jawa Timur",
      detail: "Gunung berapi aktif dengan pemandangan matahari terbit yang spektakuler di Jawa Timur."
    },
    {
      id: "5",
      provinsi: "Jawa",
      gambar: "https://imgx.parapuan.co/crop/0x0:0x0/x/photo/2023/09/25/picture1jpg-20230925082943.jpg",
      nama: "Taman Mini Indonesia Indah",
      lokasi: "Jakarta",
      detail: "Taman yang menampilkan miniatur budaya dan rumah adat dari seluruh Indonesia"
    },
    {
      id: "6",
      provinsi: "Nusa Tenggara",
      gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6i56-AGJ7cSEh9mId1BCgtAgQazLA4fDsTQ&s",
      nama: "Pulau Komodo",
      lokasi: "Nusa Tenggara Timur",
      detail: "Habitat asli komodo dengan panorama alam yang memukau di Nusa Tenggara Timur"
    },
    {
      id: "7",
      provinsi: "Papua",
      gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRExRhfJAJ3fmREbv2l9qPcoS-XfLuO32yp0Q&s",
      nama: "Raja Ampat",
      lokasi: "Papua Barat",
      detail: "Kepulauan dengan keindahan bawah laut yang terkenal di Papua Barat."
    },
    {
      id: "8",
      provinsi: "Jawa",
      gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmow3v4Vbs28oEig-bl81bZhNvP2yE0BPOpA&s",
      nama: "Ujung Kulon",
      lokasi: "Banten",
      detail: "empat perlindungan badak Jawa yang terletak di Banten."
    },
    {
      id: "9",
      provinsi: "Jawa",
      gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMa1qcJ0GUYYjznjUoNz4Xq4G0MY0fbSIjDw&s",
      nama: "Kawah Ijen",
      lokasi: "Banyuwangi, Jawa Timur",
      detail: "Gunung dengan fenomena api biru yang unik di Banyuwangi, Jawa Timur."
    },
    {
      id: "10",
      provinsi: "Jawa",
      gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Z42jww4AsudN7BeOUOA1IsFUOjOak86fUw&s",
      nama: "Candi Prambanan",
      lokasi: "Yogyakarta",
      detail: "Candi Hindu terbesar di Indonesia yang berada di Yogyakarta."
    },
    {
      id: "11",
      provinsi: "Sulawesi",
      gambar: "https://bnp.jambiprov.go.id/wp-content/uploads/2023/02/tana-toraja-1.png",
      nama: "Tana Toraja",
      lokasi: "Sulawesi Selatan",
      detail: "Kawasan budaya dengan tradisi unik dan rumah adat Tongkonan di Sulawesi Selatan."
    },
    {
      id: "12",
      provinsi: "Sumatera",
      gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHUWTqYFmf0JbW2w2YrPenfH2-QOZqcVYKqw&s",
      nama: "Pulau Belitung",
      lokasi: "Bangka Belitung",
      detail: "Pulau dengan pantai berpasir putih dan batu granit besar di Bangka Belitung."
    },
    {
      id: "13",
      provinsi: "Papua",
      gambar: "https://awsimages.detik.net.id/community/media/visual/2023/05/03/puncak-jayawijaya-carstensz-pyramid_169.png?w=600&q=90",
      nama: "Puncak Jaya",
      lokasi: "Papua",
      detail: "Gunung tertinggi di Indonesia yang terletak di Papua."
    },
    {
      id: "14",
      provinsi: "Sumatera",
      gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeLHux4Vq4vg0TjFzWFJuxS6NdNc46RYyjlA&s",
      nama: "Bukit Lawang",
      lokasi: "Sumatera Utara",
      detail: "Pusat rehabilitasi orangutan yang berada di Sumatera Utara."
    },
    {
      id: "15",
      provinsi: "Nusa Tenggara",
      gambar: "https://awsimages.detik.net.id/community/media/visual/2021/07/05/wisata-super-prioritas-labuan-bajo_169.jpeg?w=650",
      nama: "Labuan Bajo",
      lokasi: "Nusa Tenggara Timur",
      detail: "Kota kecil yang menjadi pintu gerbang menuju Pulau Komodo di Nusa Tenggara Timur."
    },
    {
      id: "16",
      provinsi: "Nusa Tenggara",
      gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_h_Wjx8wjPBfpgFCcCC-YBpaZIUvFKvkOww&s",
      nama: "Gunung Rinjani",
      lokasi: "Lombok, Nusa Tenggara Barat",
      detail: "Gunung dengan pemandangan danau Segara Anak di Lombok, Nusa Tenggara Barat."
    },
    {
      id: "17",
      provinsi: "Jawa",
      gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP1Fo94_Au-JDTMKq6tElqw4eFQUhWR__Urw&s",
      nama: "Pantai Parangtritis",
      lokasi: "Yogyakarta",
      detail: "Pantai populer dengan mitos Nyai Roro Kidul di Yogyakarta."
    },
    {
      id: "18",
      provinsi: "Sulawesi",
      gambar: "https://ik.imagekit.io/tvlk/blog/2020/01/keindahan-alam-indonesia-5-Super-Adventure.jpg?tr=dpr-2,w-675",
      nama: "Taman Laut Bunaken",
      lokasi: "Sulawesi Utara",
      detail: "Destinasi menyelam kelas dunia dengan terumbu karang yang indah di Sulawesi Utara."
    },
    {
      id: "19",
      provinsi: "Nusa Tenggara",
      gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6TTuNc6P4Wak41WRM93XNu5OyomfzqANXlA&s",
      nama: "Pantai Senggigi",
      lokasi: "Lombok, Nusa Tenggara Barat",
      detail: "Pantai yang menawarkan pemandangan matahari terbenam yang indah di Lombok."
    },
    {
      id: "20",
      provinsi: "Bali",
      gambar: "https://dlh.bulelengkab.go.id/uploads/konten/60-pentingnya-hutan-mangrove-bagi-lingkungan-hidup.jpg",
      nama: "Hutan Mangrove Bali",
      lokasi: "Bali",
      detail: "Kawasan pelestarian mangrove dengan jalur trekking kayu di Bali"
    }
  ];

  export default function App() {
    const [selectedCategory, setSelectedCategory] = useState(null);
  
    // Filter data berdasarkan kategori yang dipilih
    const filteredItems = selectedCategory
      ? data.filter((item) => item.provinsi === selectedCategory)
      : [];
  
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Tekan Tombol untuk Melihat Gambar Berdasarkan Kategori</Text>
  
        {/* Render tombol berdasarkan kategori unik */}
        <View style={styles.buttonContainer}>
          {Array.from(new Set(data.map((item) => item.provinsi))).map((category, index) => (
            <View key={index} style={styles.buttonWrapper}>
              <Button
                title={category}
                color= "#4a4d4c"
                onPress={() => setSelectedCategory(category)}
              />
            </View>
          ))}
        </View>
  
        {selectedCategory && (
          <View style={styles.resultContainer}>
            <Text style={styles.categoryTitle}>Kategori: {selectedCategory}</Text>
            {filteredItems.map((item) => (
              <View key={item.id} style={styles.imageWrapper}>
                <Image source={{ uri: item.gambar }} style={styles.image} />
                <Text style={styles.imageText}>{item.nama}</Text>
                <Text style={styles.imageText}>{item.detail}</Text>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      backgroundColor: '#f6eef3',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },
    buttonContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginBottom: 20,
    },
    buttonWrapper: {
      margin: 10,
      width: 150,
    },
    resultContainer: {
      marginTop: 20,
      alignItems: 'center',
    },
    categoryTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    imageWrapper: {
      alignItems: 'center',
      marginBottom: 20,
    },
    image: {
      width: 200,
      height: 200,
      borderRadius: 10,
      marginBottom: 10,
    },
    imageText: {
      fontSize: 16,
      textAlign:"center"
    },
  });
  