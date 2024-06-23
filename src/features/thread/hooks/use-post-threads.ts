import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { api } from "../../../services/api";
import ThreadForm from "../types/post-thread-with-image-types";
import useGetThreads from "./use-get-thread";
import { useState, ChangeEvent } from "react";
import { useToast } from "@chakra-ui/react";
import ThreadSchema from "../../validators/thread-schema";
import { zodResolver } from "@hookform/resolvers/zod";

function usePostThread() {
  const { refetchGetThreads } = useGetThreads();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ThreadForm>({
    resolver: zodResolver(ThreadSchema),
    mode: "onSubmit",
  });

  console.log(errors);

  const toast = useToast();
  const [preview, setPreview] = useState<string | null>(null);

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

  const postThread = async (newThread: ThreadForm) => {
    const formData = new FormData();
    formData.append("caption", newThread.caption);

    if (newThread.imageUrl && newThread.imageUrl[0]) {
      formData.append("imageUrl", newThread.imageUrl[0]);
    }

    return await api.post("/api/v1/thread", formData, {
      headers: {
        Authorization: token,
      },
    });
  };

  const token = localStorage.getItem("token");

  const { mutateAsync } = useMutation({
    mutationFn: postThread,
    onSuccess: () => {
      toast({
        title: "Thread created successfully",
        description:
          "Your new thread is now live. Enjoy exploring and contributing to the community!",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      setPreview(null); // Reset pratinjau gambar
      reset();
      refetchGetThreads(); // Refetch thread untuk memperbarui daftar
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

export default usePostThread;
