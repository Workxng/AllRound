import { FlatList, TextInput, View, Text } from "react-native";
import React, { useState } from 'react';
import WisataDetail from "../../components/Wisata";


  const data = [
    {
      id: "1",
      gambar: "https://i2.wp.com/blog.tripcetera.com/id/wp-content/uploads/2020/03/leebudihart_76864081_2484833498431751_3194446755026370817_n.jpg",
      nama: "Pantai Kuta",
      lokasi: "Bali"
    },
    {
      id: "2",
      gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmhHSH0gqsJf0rrsosUwSElVUN1PcKvEDwYQ&s",
      nama: "Borobudur",
      lokasi: "Magelang, Jawa Tengah"
    },
    {
      id: "3",
      gambar: "https://asset.kompas.com/crops/9GFOX2-n00eSy8EvhR2r0nlFd_w=/0x1:1000x668/1200x800/data/photo/2021/08/06/610d24fd0501a.jpg",
      nama: "Danau Toba",
      lokasi: "Sumatera Utara"
    },
    {
      id: "4",
      gambar: "https://torch.id/cdn/shop/articles/Artikel_167_-_Preview.webp?v=1713337145",
      nama: "Gunung Bromo",
      lokasi: "Jawa Timur"
    },
    {
      id: "5",
      gambar: "https://imgx.parapuan.co/crop/0x0:0x0/x/photo/2023/09/25/picture1jpg-20230925082943.jpg",
      nama: "Taman Mini Indonesia Indah",
      lokasi: "Jakarta"
    },
    {
      id: "6",
      gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6i56-AGJ7cSEh9mId1BCgtAgQazLA4fDsTQ&s",
      nama: "Pulau Komodo",
      lokasi: "Nusa Tenggara Timur"
    },
    {
      id: "7",
      gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRExRhfJAJ3fmREbv2l9qPcoS-XfLuO32yp0Q&s",
      nama: "Raja Ampat",
      lokasi: "Papua Barat"
    },
    {
      id: "8",
      gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmow3v4Vbs28oEig-bl81bZhNvP2yE0BPOpA&s",
      nama: "Ujung Kulon",
      lokasi: "Banten"
    },
    {
      id: "9",
      gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMa1qcJ0GUYYjznjUoNz4Xq4G0MY0fbSIjDw&s",
      nama: "Kawah Ijen",
      lokasi: "Banyuwangi, Jawa Timur"
    },
    {
      id: "10",
      gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Z42jww4AsudN7BeOUOA1IsFUOjOak86fUw&s",
      nama: "Candi Prambanan",
      lokasi: "Yogyakarta"
    },
    {
      id: "11",
      gambar: "https://bnp.jambiprov.go.id/wp-content/uploads/2023/02/tana-toraja-1.png",
      nama: "Tana Toraja",
      lokasi: "Sulawesi Selatan"
    },
    {
      id: "12",
      gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHUWTqYFmf0JbW2w2YrPenfH2-QOZqcVYKqw&s",
      nama: "Pulau Belitung",
      lokasi: "Bangka Belitung"
    },
    {
      id: "13",
      gambar: "https://awsimages.detik.net.id/community/media/visual/2023/05/03/puncak-jayawijaya-carstensz-pyramid_169.png?w=600&q=90",
      nama: "Puncak Jaya",
      lokasi: "Papua"
    },
    {
      id: "14",
      gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeLHux4Vq4vg0TjFzWFJuxS6NdNc46RYyjlA&s",
      nama: "Bukit Lawang",
      lokasi: "Sumatera Utara"
    },
    {
      id: "15",
      gambar: "https://awsimages.detik.net.id/community/media/visual/2021/07/05/wisata-super-prioritas-labuan-bajo_169.jpeg?w=650",
      nama: "Labuan Bajo",
      lokasi: "Nusa Tenggara Timur"
    },
    {
      id: "16",
      gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_h_Wjx8wjPBfpgFCcCC-YBpaZIUvFKvkOww&s",
      nama: "Gunung Rinjani",
      lokasi: "Lombok, Nusa Tenggara Barat"
    },
    {
      id: "17",
      gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP1Fo94_Au-JDTMKq6tElqw4eFQUhWR__Urw&s",
      nama: "Pantai Parangtritis",
      lokasi: "Yogyakarta"
    },
    {
      id: "18",
      gambar: "https://ik.imagekit.io/tvlk/blog/2020/01/keindahan-alam-indonesia-5-Super-Adventure.jpg?tr=dpr-2,w-675",
      nama: "Taman Laut Bunaken",
      lokasi: "Sulawesi Utara"
    },
    {
      id: "19",
      gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6TTuNc6P4Wak41WRM93XNu5OyomfzqANXlA&s",
      nama: "Pantai Senggigi",
      lokasi: "Lombok, Nusa Tenggara Barat"
    },
    {
      id: "20",
      gambar: "https://dlh.bulelengkab.go.id/uploads/konten/60-pentingnya-hutan-mangrove-bagi-lingkungan-hidup.jpg",
      nama: "Hutan Mangrove Bali",
      lokasi: "Bali"
    }
  ];

  const MyList = () => {
    return (
      <FlatList 
        data={data}
        numColumns={2}
        renderItem={({ item }) => <WisataDetail item={item} />}
        keyExtractor={(item) => item.id}
      />
    );
  };
  
  export default MyList;
