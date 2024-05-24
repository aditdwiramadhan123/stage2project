import PostTextArea from "./PostTextArea";
import PostItem from "./PostItem";
import { Card } from "@chakra-ui/react";
function CardPost() {
  return (
    <Card borderRadius={0}  maxWidth={"100%"} bg={"none"}>
      <PostTextArea />
      <PostItem />
      <PostItem />
    </Card>
  );
}

export default CardPost;
