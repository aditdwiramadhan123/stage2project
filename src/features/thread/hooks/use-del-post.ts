import { api } from "../../../services/api";

const useDelThread = (threadId:number) => {
  async function deleteThread() {
    const token = localStorage.getItem("token");
    if (token) {
      const response = await api.delete(`/api/v1/thread/${threadId}`, {
        headers: {
          Authorization: token,
        },
      });
      const deleteComment= response.data
      console.log(deleteComment)
    }
  }

  return {deleteThread};
};

export default useDelThread