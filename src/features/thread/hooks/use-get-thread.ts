import { api } from "../../../services/api";
import { useQuery } from "@tanstack/react-query";
import { ThreadTypeFromDB } from "../types/get-thread-types";

const useGetThreads = () => {
  const { data: threads, refetch: refetchGetThreads } = useQuery({
    queryKey: ["threads"],
    queryFn: getThreads,
  });
  async function getThreads() {
    const token = localStorage.getItem("token");
    if (token) {
      const response = await api.get("/api/v1/threads", {
        headers: {
          Authorization: token,
        },
      });
      const threads:ThreadTypeFromDB[] = response.data
      return threads;
    }
  }

  refetchGetThreads()
  return {threads,refetchGetThreads};
};

export default useGetThreads