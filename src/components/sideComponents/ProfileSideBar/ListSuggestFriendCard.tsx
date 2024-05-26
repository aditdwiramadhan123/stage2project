import React from "react";
import { Card, Text, Box } from "@chakra-ui/react";
import FriendCard from "./SuggestFriendCard";

function ListFriendCard() {
  return (
    <Card
      bg="#374151"
      padding={3}
      paddingBottom={0}
      height="95%"
      width="95%"
      overflow="hidden" // Mengatasi masalah overflow yang mungkin terjadi
    >
      <Text color="white" fontSize={14} fontWeight={500} marginY={1}>
        Suggest for you
      </Text>
      <Box
        maxHeight="80%" // Menggunakan maxHeight agar batas scroll tercapai
        overflowY="auto" // Menggunakan overflowY auto agar scroll muncul hanya jika konten melebihi batas maxHeight
        css={{
          "&::-webkit-scrollbar": {
            width: "0px", // Lebar scrollbar disesuaikan agar terlihat
            backgroundColor: "#4a6272", // Warna track scrollbar
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#718096", // Warna thumb scrollbar
            borderRadius: "4px", // Sudut thumb scrollbar
          },
        }}
      >
        {/* Menambahkan FriendCard sebanyak yang dibutuhkan */}
        <FriendCard />
        <FriendCard />
        <FriendCard />
        <FriendCard />
        <FriendCard />
        <FriendCard />
        <FriendCard />
      </Box>
    </Card>
  );
}

export default ListFriendCard;
