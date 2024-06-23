import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { api } from "../../../services/api";
import { useState, ChangeEvent } from "react";
import { useToast } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import CommentSchema from "../validator/comment-schema";
import CommentForm from "../type/post-comment-with-image-types";
import useGetComments from "./use-get-comment";

function useEditComment(commentId: number,threadId:number) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CommentForm>({
    resolver: zodResolver(CommentSchema),
    mode: "onChange",
  });

  console.log(errors);

  const toast = useToast();
  const [preview, setPreview] = useState<string | null>(null);
  const {refetchGetComments} = useGetComments(threadId)

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];

      // Generate a preview URL for the image
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setPreview(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const editComment = async (editComment: CommentForm) => {
    const formData = new FormData();
    formData.append("content", editComment.content);

    if (editComment.imageUrl && editComment.imageUrl[0]) {
      formData.append("imageUrl", editComment.imageUrl[0]);
    }

    return await api.patch(`/api/v1/comment/${commentId}`, formData, {
      headers: {
        Authorization: token,
      },
    });
  };

  const token = localStorage.getItem("token");

  const { mutateAsync } = useMutation({
    mutationFn: editComment,
    onSuccess: () => {
      toast({
        title: "Comment edited successfully",
        description:
          "Your comment has been successfully updated. Check it out in the thread!",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      setPreview(null);
      reset();
      refetchGetComments();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    },
  });

  const onSubmit: SubmitHandler<CommentForm> = async (data) => {
    const response = await mutateAsync(data);
    console.log(response.data);
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    preview,
    handleImageChange,
  };
}

export default useEditComment;
