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
import { FaTrash, FaChevronDown } from "react-icons/fa";
import useDelComment from "../hook/use-del-comments";
import useGetComments from "../hook/use-get-comment";
import ModalFormEditComment from "./modal-input-edit-comment ";

const HamburgerMenu = ({
  commentId,
  threadId,
}: {
  commentId: number;
  threadId: number;
}) => {
  const { deleteComment } = useDelComment(commentId);
  const { refetchGetComments } = useGetComments(threadId);
  const toast = useToast();

  const onClickDelete = async () => {
    try {
      await deleteComment();
      console.log("Comment deleted successfully");
      toast({
        title: "Comment deleted successfully",
        description: "The comment has been removed.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });

      refetchGetComments();
    } catch (error) {
      console.error("Error deleting comment:");
    }
  };

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<FaChevronDown color="white" />}
        variant="NoneEffect" // Pastikan variant menggunakan casing yang benar
      />
      <MenuList>
        <Box>
          <ModalFormEditComment commentId={commentId} threadId={threadId} />
        </Box>
        <MenuItem icon={<FaTrash />} onClick={onClickDelete}>
          Delete
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default HamburgerMenu;
