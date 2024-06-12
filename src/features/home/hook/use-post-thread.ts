import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { api } from "../../../services/api";
import { zodResolver } from "@hookform/resolvers/zod";
import ThreadSchema from "../validators/post-thread";
import ThreadForm from "../types/post-thread-types";
import useGetThreads from "./use-get-thread";

function usePostThread() {
  const {refetch} =useGetThreads()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ThreadForm>({
    mode: "onSubmit",
    resolver: zodResolver(ThreadSchema),
  });

  console.log("submit error",errors)

  const token = localStorage.getItem("token");

  const { mutateAsync } = useMutation({
    mutationFn: (newThread: ThreadForm) => {
      const formData = new FormData();
      formData.append("caption", newThread.caption);

      if (newThread.imageUrl && newThread.imageUrl[0]) {
        formData.append("imageUrl", newThread.imageUrl[0]);
      }

      return api.post("/api/v1/thread", formData, {
        headers: {
          Authorization: token,
        },
      });
    },
  });

  const onSubmit: SubmitHandler<ThreadForm> = async (data) => {
   
    const response = await mutateAsync(data);
    console.log(response.data);
    refetch()
  };

  return { register, handleSubmit, onSubmit, errors };
}

export default usePostThread;
