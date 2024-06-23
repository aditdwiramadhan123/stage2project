import { api } from "../../../services/api";
import { useQuery } from "@tanstack/react-query";
import { CommentType } from "../type/post-comment-with-image-types";

const useGetComment = (commentId:number) => {
  const { data: comment, refetch: refetchGetComment } = useQuery({
    queryKey: [`comment for commentId: ${commentId}`],
    queryFn: getComments,
  });
  
  async function getComments() {
    const token = localStorage.getItem("token");
    if (token) {
      const response = await api.get(`/api/v1/comment/${commentId}`, {
        headers: {
          Authorization: token,
        },
      });
      const comment : CommentType= response.data
      return comment;
    }
  }

  refetchGetComment()
  return {comment,refetchGetComment};
};

export default useGetComment