import { Box, Grid, Image } from "@chakra-ui/react";
// import listImage from "../../../data/image";
import { ThreadTypeFromDB } from "../../thread/types/get-thread-types";



function ListMedia({mediaDB}:{mediaDB:ThreadTypeFromDB[]|undefined}) {
  return (
    <Box p={4}>
      <Grid templateColumns="repeat(3, 1fr)" gap={1} bg={"none"}>
        {mediaDB?.map((media, index) => (
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
              src={media.threadData.imageUrl||"default.jpg"}
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
