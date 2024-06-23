import { api } from "../../../services/api";

const useDelComment = (commentId:number) => {
  async function deleteComment() {
    const token = localStorage.getItem("token");
    if (token) {
      const response = await api.delete(`/api/v1/comment/${commentId}`, {
        headers: {
          Authorization: token,
        },
      });
      const deleteComment= response.data
      console.log(deleteComment)
    }
  }

  return {deleteComment};
};

export default useDelComment