import { api } from "../../../services/api";
import { useQuery } from "@tanstack/react-query";
import { ThreadTypeFromDB } from "../types/get-thread-types";

const useGetThreadsByName = (username:string) => {
  async function getThreadsByName() {
    const token = localStorage.getItem("token");
    if (token) {
      const response = await api.get(`/api/v1/threads/${username}`, {
        headers: {
          Authorization: token,
        },
      });
      const threads:ThreadTypeFromDB[] = response.data
      return threads;
    }
  }

  const { data: threadsByName, refetch: refetchThreadByName } = useQuery({
    queryKey: [`threadsByName${username}`],
    queryFn: getThreadsByName,
  });

  refetchThreadByName()

  return {threadsByName,refetchThreadByName};
};

export default useGetThreadsByName