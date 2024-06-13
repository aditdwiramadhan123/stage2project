import PostThread from "../../thread/components/input-thread";
import { Card, Text, Grid, Box } from "@chakra-ui/react";
import ListPostItem from "../../thread/components/list-post-item";
import useGetThreads from "../../thread/hooks/use-get-thread";


function HomePage() {
  const {threads} = useGetThreads()

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
        <PostThread/>
        <ListPostItem threadsDB={threads} />
        {/* Tambahkan PostItem lagi sesuai kebutuhan */}
      </Card>
    </Grid>
  );
}

export default HomePage;
