import {
  Avatar,
  Textarea,
  Button,
  Flex,
  Card,
  CardHeader,
  FormControl,
} from "@chakra-ui/react";
import usePostThread from "../hooks/use-post-thread";

function PostThread() {
  const { handleSubmit, onSubmit, register } = usePostThread();
  return (
    <Card bg={"#1e272e"} borderRadius={0} marginY={0.5}>
      <CardHeader py={2}>
        <Flex alignItems="center">
          <Avatar
            name="Segun Adebayo"
            src="https://bit.ly/sage-adebayo"
            size={"sm"}
          />
          <FormControl
            as="form"
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            onSubmit={handleSubmit(onSubmit)} // Tambahkan onSubmit untuk menangani pengiriman formulir
          >
            <Textarea
              fontSize={12}
              placeholder={"What is happening?!"}
              rows={1}
              resize="none"
              padding={3}
              ml={3}
              color="white"
              bg={"#374151"}
              borderRadius={30}
              _placeholder={{ color: "gray.400" }}
              _focus={{ borderColor: "teal.400" }}
              {...register("caption")}
            />

            <input
              type="file"
              color={"white"}
              width={10}
              {...register("imageUrl")}
            />

            <Button
              type="submit" // Tambahkan type submit untuk tombol "Post"
              bg="#009432"
              color="white"
              height="auto"
              px={4}
              ml={3}
              borderRadius="md"
              _hover={{ bg: "teal.500" }}
            >
              Post
            </Button>
          </FormControl>
        </Flex>
      </CardHeader>
    </Card>
  );
}

export default PostThread;
