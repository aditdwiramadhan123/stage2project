import PostTextArea from "../components/BaseComponents/InputTextArea";
import PostItem from "../components/BaseComponents/PostItem";
import { Card, Text, Grid, Box } from "@chakra-ui/react";

function HomePage() {
  return (
    <Grid templateRows="auto 1fr" height="100vh">
      {/* text home */}
      <Box display="flex" alignItems="center" paddingX={4} paddingY={1}>
        <Text fontSize={20} color="white" fontWeight={600}>
          Home
        </Text>
      </Box>

      {/* postingan */}
      <Card
        borderRadius={0}
        bg="none"
        overflowY="auto"
        css={{
          "&::-webkit-scrollbar": {
            width: "2px", // Lebar scrollbar
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "gray", // Warna thumb scrollbar
            borderRadius: "4px", // Sudut thumb scrollbar
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "transparent", // Warna track scrollbar
          },
        }}
      >
        <PostTextArea placeHolder="What is happening?!" background="#1e272e" inputBackground="#374151" />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        {/* Tambahkan PostItem lagi sesuai kebutuhan */}
      </Card>
    </Grid>
  );
}

export default HomePage;
