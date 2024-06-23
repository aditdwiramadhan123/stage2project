import { BiArrowBack } from "react-icons/bi";
import PostItem from "../../thread/components/post-item";
import { Card, Text, Grid, Box, Icon } from "@chakra-ui/react";
import ListComment from "../component/list-comment-item";
import useGetThread from "../hook/use-get-thread"
import { useParams } from "react-router-dom";
import useGetComments from "../hook/use-get-comment";
import InputComment from "../component/input-comment";


function DetilStatusPage() {
  const {threadId} = useParams()
  const threadIdNumber = Number(threadId)
  const {thread} = useGetThread(threadIdNumber)
  const {comments} = useGetComments(threadIdNumber)
  console.log("ini comments dari page comments",comments)
  const threadData = thread?.threadData
  console.log("ini data thread", thread)
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
        overflowX={"hidden"}
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
        {threadData? <PostItem  post={threadData}/> : <div></div>}
       
        <InputComment threadId={threadIdNumber}
        />

        {/* comment */}
        <ListComment commentsDB={comments}/>
      
      </Card>
    </Grid>
  );
}

export default DetilStatusPage;
