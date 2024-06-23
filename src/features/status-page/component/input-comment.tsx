import React from "react";
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
import usePostComment from "../hook/use-post-comment";
import ModalFormComment from "./modal-post-comment";
import useGetMyProfile from "../../profilCard/hook/use-get-my-profil";

function InputComment({ threadId }: { threadId: number }) {
  const { handleSubmit, onSubmit, register, handleImageChange, errors } =
    usePostComment(threadId);
  const imageUrlError = errors.imageUrl?.message || "";
  const captionError = errors.content?.message || "";
  const errorMessage = [imageUrlError, captionError].filter(Boolean).join(" ");
  const { MyProfile } = useGetMyProfile();
  const toast = useToast();

  if (errorMessage) {
    toast({
      title: "comment creation failed",
      description: errorMessage,
      status: "error",
      duration: 9000,
      isClosable: true,
    });
  }
  return (
    <Card bg={"none"} borderRadius={0} marginY={0.5}>
      <CardHeader py={2}>
        <Flex alignItems="center">
          <Avatar
            name={MyProfile?.name}
            src={MyProfile?.profilePictureUrl || ""}
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
              placeholder="write a comment!"
              rows={1}
              resize="none"
              padding={3}
              ml={3}
              color="white"
              bg={"none"}
              borderRadius={30}
              _placeholder={{ color: "gray.400" }}
              _focus={{ borderColor: "teal.400" }}
              {...register("content")}
            />
            <input
              style={{ display: "none" }}
              id="addImage"
              type="file"
              {...register("imageUrl")}
              onChange={handleImageChange}
            />
            <Button
              bg="#009432"
              color="white"
              height="auto"
              px={4}
              ml={3}
              borderRadius="md"
              _hover={{ bg: "teal.500" }}
              type="submit"
            >
              Post
            </Button>
          </FormControl>
          <ModalFormComment threadId={threadId} />
        </Flex>
      </CardHeader>
    </Card>
  );
}

export default InputComment;
