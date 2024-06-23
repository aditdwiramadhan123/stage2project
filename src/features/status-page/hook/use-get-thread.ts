import { api } from "../../../services/api";
import { useQuery } from "@tanstack/react-query";
import { ThreadTypeFromDB } from "../../thread/types/get-thread-types";

const useGetThread = (threadId:number) => {
  const { data: thread, refetch: refetchGetThread } = useQuery({
    queryKey: [`thread ${threadId}`],
    queryFn: getThread,
  });
  
  async function getThread() {
    const token = localStorage.getItem("token");
    if (token) {
      const response = await api.get(`/api/v1/thread/${threadId}`, {
        headers: {
          Authorization: token,
        },
      });
      const thread:ThreadTypeFromDB = response.data
      return thread;
    }
  }

  refetchGetThread()
  return {thread,refetchGetThread};
};

export default useGetThread