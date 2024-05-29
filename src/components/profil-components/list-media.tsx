import React from "react";
import { Box, Grid, Image } from "@chakra-ui/react";

const images = [
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  // Tambahkan URL gambar lainnya sesuai kebutuhan
];

const ListMedia: React.FC = () => {
  return (
    <Box p={4}>
      <Grid templateColumns="repeat(3, 1fr)" gap={1} bg={"none"}>
        {images.map((src, index) => (
          <Box
            key={index}
            bg="none"
            border="1px solid"
            borderColor="gray.200"
            overflow="hidden"
            position="relative"
            _before={{
              content: '""',
              display: "block",
              paddingBottom: "100%", // Membuat elemen berbentuk persegi
            }}
          >
            <Image
              src={src}
              alt={`Gambar ${index + 1}`}
              objectFit="cover"
              width="100%"
              height="100%"
              position="absolute"
              top="0"
              left="0"
            />
          </Box>
        ))}
      </Grid>
    </Box>
  );
}

export default ListMedia;
