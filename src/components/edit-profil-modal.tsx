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
} from "@chakra-ui/react";
import { ButtonEffect1 } from "../assets/hover-effets";

function editProfil() {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
            <FormControl color="white">
              <FormLabel fontSize={13}>name</FormLabel>
              <Input fontSize={13} ref={initialRef} placeholder="name" />
            </FormControl>

            <FormControl mt={2} color="white">
              <FormLabel fontSize={13}>username</FormLabel>
              <Input fontSize={13} placeholder="username" />
            </FormControl>

            <FormControl mt={2} color="white">
              <FormLabel fontSize={13}>bio</FormLabel>
              <Textarea rows={4} resize="none" fontSize={13} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} fontSize={14} bg={"brand.green"}>
              Save
            </Button>
            <Button fontSize={14} onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default editProfil;
