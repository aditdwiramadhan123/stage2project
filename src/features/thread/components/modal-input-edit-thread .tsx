import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  useDisclosure,
  Textarea,
  Box,
  Image,
  Text,
} from "@chakra-ui/react";
import { ButtonEffect1 } from "../../../assets/hover-effets";
import useEditThread from "../hooks/use-edit-thread ";
import { FaEdit } from "react-icons/fa";

function ModalFormEditThread({
  threadId,
}: {
  threadId: number;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const { register, handleSubmit, onSubmit, preview, handleImageChange } =
  useEditThread( threadId);

  const handleOpen = () => {
    onOpen();
  };

  return (
    <>
      <Button
        sx={ButtonEffect1}
        onClick={handleOpen}
        bg={"none"}
        p={2}
        m={1}
        leftIcon={<FaEdit />}
      >
        <Text fontWeight={400}>Edit</Text>
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent bg={"brand.tertiary"}>
          <ModalHeader color={"white"}>Edit your thread!</ModalHeader>
          <ModalCloseButton />
          <FormControl as="form" onSubmit={handleSubmit(onSubmit)}>
            <ModalBody pb={6}>
              <Textarea
                fontSize={12}
                placeholder={"What is happening?!"}
                rows={3}
                resize="none"
                padding={3}
                color="white"
                bg={"#374151"}
                borderRadius={10}
                _placeholder={{ color: "gray.400" }}
                _focus={{ borderColor: "teal.400" }}
                {...register("caption")}
              />

              {preview && (
                <Box mt={4} textAlign="center">
                  <Image
                    src={preview}
                    alt="Image Preview"
                    boxSize="300px"
                    objectFit="cover"
                    borderRadius="10px"
                  />
                </Box>
              )}
            </ModalBody>

            <Box width={"100%"} px={7} my={3}>
              <input
                id="addImage"
                type="file"
                {...register("imageUrl")}
                onChange={handleImageChange}
              />
            </Box>

            <ModalFooter
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
              px={30}
            >
              <Box>
                <Button
                  colorScheme="blue"
                  mr={3}
                  fontSize={14}
                  bg={"brand.green"}
                  type="submit"
                >
                  Post
                </Button>

                <Button fontSize={14} onClick={onClose}>
                  Cancel
                </Button>
              </Box>
            </ModalFooter>
          </FormControl>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalFormEditThread;
