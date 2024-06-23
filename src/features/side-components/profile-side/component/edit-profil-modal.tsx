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
  FormLabel,
  Input,
  useDisclosure,
  Textarea,
  Box,
  Avatar,
  AvatarBadge,
  Image,
} from "@chakra-ui/react";
import { ButtonEffect1 } from "../../../../assets/hover-effets";
import useEditUser from "../hooks/use-edit-profile";

function EditProfil() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit, onSubmit, preview, handleImageChange } =
    useEditUser();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Button
        colorScheme="gray"
        variant="outline"
        color="white"
        borderRadius={20}
        fontSize={10}
        height={6}
        sx={ButtonEffect1}
        position={"relative"}
        bottom={2}
        onClick={onOpen}
      >
        Edit Profile
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />

        <ModalContent bg={"brand.tertiary"}>
          
          <FormControl
            color="white"
            as={"form"}
            onSubmit={handleSubmit(onSubmit)}
          >
            <ModalHeader color={"white"}>Edit profil</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <Box>
                <Box width="100%" bg="pink" height={65} borderRadius={10} />
                <Box position={"relative"} bottom={7}>
                  <Avatar
                    size="lg"
                    border="solid #2C3A47 3px"
                    name="Segun Adebayo"
                    src="https://bit.ly/sage-adebayo"
                    position={"relative"}
                    left={3}
                    p={0}
                    m={0}
                  >
                    <AvatarBadge
                      boxSize="0.75em"
                      bg="green.500"
                      borderWidth={3}
                    />
                  </Avatar>
                </Box>
              </Box>

              <FormLabel fontSize={13}>name</FormLabel>
              <Input fontSize={13} placeholder="name" {...register("name")} />

              <FormLabel fontSize={13}>username</FormLabel>
              <Input
                fontSize={13}
                placeholder="username"
                {...register("username")}
              />

              <FormLabel fontSize={13}>bio</FormLabel>
              <Textarea
                rows={3}
                resize="none"
                padding={3}
                color="white"
                bg={"#374151"}
                borderRadius={10}
                _placeholder={{ color: "gray.400" }}
                _focus={{ borderColor: "teal.400" }}
                {...register("quote")}
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

              <Box width={"100%"} px={7} my={3}>
                <input
                  id="addImage"
                  type="file"
                  {...register("profilePictureUrl")}
                  onChange={handleImageChange}
                />
              </Box>
            </ModalBody>

            <ModalFooter>
              <Button
                colorScheme="blue"
                mr={3}
                fontSize={14}
                bg={"brand.green"}
                type="submit"
              >
                Save
              </Button>
              <Button fontSize={14} onClick={onClose}>
                Cancel
              </Button>
            </ModalFooter>
          </FormControl>
        </ModalContent>
      </Modal>
    </>
  );
}

export default EditProfil;
