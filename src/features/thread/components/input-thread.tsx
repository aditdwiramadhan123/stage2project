import {
  Avatar,
  Textarea,
  Button,
  Flex,
  Card,
  CardHeader,
  FormControl,
  useToast,
} from "@chakra-ui/react";
import usePostThread from "../hooks/use-post-threads";
import AddImageModal from "./modal-post-thread";
import useGetMyProfile from "../../profilCard/hook/use-get-my-profil";

function PostThread() {
  const { handleSubmit, onSubmit, register, handleImageChange, errors } =
    usePostThread();
  const imageUrlError = errors.imageUrl?.message || "";
  const captionError = errors.caption?.message || "";
  const errorMessage = [imageUrlError, captionError].filter(Boolean).join(" ");
  const { MyProfile } = useGetMyProfile();
  const toast = useToast();

  if (errorMessage) {
    toast({
      title: "Thread creation failed",
      description: errorMessage,
      status: "error",
      duration: 9000,
      isClosable: true,
    });
  }

  return (
    <Card bg={"#1e272e"} borderRadius={0} marginY={0.5}>
      <CardHeader py={2}>
        <Flex alignItems="center">
          <Avatar
            name={MyProfile?.username}
            src={MyProfile?.profilePictureUrl || "default.jpg"}
            size={"sm"}
          />
          <FormControl
            as="form"
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            onSubmit={handleSubmit(onSubmit)}
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
              style={{ display: "none" }}
              type="file"
              color={"white"}
              width={10}
              {...register("imageUrl")}
              onChange={handleImageChange}
            />

            <Button
              type="submit" // Tambahkan type submit untuk tombol "Post"
              bg="#009432"
              color="white"
              height="auto"
              px={2}
              py={1.5}
              borderRadius="md"
              _hover={{ bg: "teal.500" }}
              ml={2}
            >
              Post
            </Button>
          </FormControl>
          <AddImageModal />
        </Flex>
      </CardHeader>
    </Card>
  );
}

export default PostThread;
