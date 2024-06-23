import { api } from "../../../services/api";
import { useQuery } from "@tanstack/react-query";
import { ThreadTypeFromDB } from "../../thread/types/get-thread-types"; 

const useGetMediaByName = (username:string) => {
  async function getMediaByName() {
    const token = localStorage.getItem("token");
    if (token) {
      const response = await api.get(`/api/v1/media/${username}`, {
        headers: {
          Authorization: token,
        },
      });
      const media:ThreadTypeFromDB[] = response.data
      return media;
    }
  }

  const { data: media, refetch: refetchMediaByName } = useQuery({
    queryKey: [`mediaByNName-${username}`],
    queryFn: getMediaByName,
  });

  refetchMediaByName()

  return {media,refetchMediaByName};
};

export default useGetMediaByName