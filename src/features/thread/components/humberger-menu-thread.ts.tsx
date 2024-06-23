import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useToast,
  Box
} from "@chakra-ui/react";
import { FaTrash, FaEllipsisH } from "react-icons/fa";
import useDelThread from "../hooks/use-del-post";
import useGetThreads from "../hooks/use-get-thread";
import ModalFormEditThread from "./modal-input-edit-thread ";

const HamburgerMenu = ({
  threadId,
}: {
  threadId: number;
}) => {

  const toast = useToast();
  const {deleteThread} = useDelThread(threadId)
  const {refetchGetThreads} = useGetThreads()

  const onClickDelete = async () => {
    try {
      await deleteThread();
      console.log("Thread deleted successfully");
      toast({
        title: "Thread deleted successfully",
        description: "The Thread has been removed.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });

      refetchGetThreads();
    } catch (error) {
      console.error("Error deleting thread:");
    }
  };

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<FaEllipsisH color="white" size={15}/>}
        variant="NoneEffect" // Pastikan variant menggunakan casing yang benar
      />
      <MenuList>
        <Box>
          <ModalFormEditThread threadId={threadId}/>
        </Box>
        <MenuItem icon={<FaTrash />} onClick={onClickDelete}>
          Delete
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default HamburgerMenu;
