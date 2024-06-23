import { api } from "../../../services/api";
import { useQuery } from "@tanstack/react-query";
import { CommentTypeFromDB } from "../../thread/types/get-comment-types";

const useGetComments = (threadId:number) => {
  const { data: comments, refetch: refetchGetComments } = useQuery({
    queryKey: [`comment for threadId: ${threadId}`],
    queryFn: getComments,
  });
  
  async function getComments() {
    const token = localStorage.getItem("token");
    if (token) {
      const response = await api.get(`/api/v1/comments/${threadId}`, {
        headers: {
          Authorization: token,
        },
      });
      const comments:CommentTypeFromDB[] = response.data
      return comments;
    }
  }

  refetchGetComments()
  return {comments,refetchGetComments};
};

export default useGetComments