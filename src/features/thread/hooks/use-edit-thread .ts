import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { api } from "../../../services/api";
import { useState, ChangeEvent } from "react";
import { useToast } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import ThreadSchema from "../../validators/thread-schema";
import ThreadForm from "../types/post-thread-with-image-types";
import useGetThreads from "./use-get-thread";

function useEditThread(threadId:number) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ThreadForm>({
    resolver: zodResolver(ThreadSchema),
    mode: "onChange",
  });

  console.log(errors);

  const toast = useToast();
  const [preview, setPreview] = useState<string | null>(null);
  const {refetchGetThreads} = useGetThreads()

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

  const editThread = async (editThread: ThreadForm) => {
    const formData = new FormData();
    formData.append("caption", editThread.caption);

    if (editThread.imageUrl && editThread.imageUrl[0]) {
      formData.append("imageUrl", editThread.imageUrl[0]);
    }

    return await api.patch(`/api/v1/thread/${threadId}`, formData, {
      headers: {
        Authorization: token,
      },
    });
  };

  const token = localStorage.getItem("token");

  const { mutateAsync } = useMutation({
    mutationFn: editThread,
    onSuccess: () => {
      toast({
        title: "Thread edited successfully",
        description:
          "Your thread has been successfully updated. Check it out in the thread!",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      setPreview(null);
      reset();
      refetchGetThreads();
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

  const onSubmit: SubmitHandler<ThreadForm> = async (data) => {
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

export default useEditThread;
