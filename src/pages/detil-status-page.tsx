import CommentItem from "../components/detil-post-page-components/comment-items";
import { BiArrowBack } from "react-icons/bi";
import PostTextArea from "../components/base-components/input-text-area";
import PostItem from "../components/base-components/post-item";
import { Card, Text, Grid, Box, Icon } from "@chakra-ui/react";

function DetilStatusPage() {
  return (
    <Grid templateRows="auto 1fr" height="100vh" bg={"none"}>
      {/* text home */}
      <Box display="flex" alignItems="center" paddingX={4} paddingY={2}>
        {/* Menambahkan ikon panah ke kiri */}
        <Icon as={BiArrowBack} boxSize={6} color="white" />
        <Text fontSize={25} color="white" fontWeight={600} marginLeft={2}>
          Status
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
        <PostItem />
        <PostTextArea
          placeHolder="masukan komen"
          background="none"
          inputBackground="none"
        />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        {/* Tambahkan PostItem lagi sesuai kebutuhan */}
      </Card>
    </Grid>
  );
}

export default DetilStatusPage;
