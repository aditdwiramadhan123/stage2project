import { api } from "../../../services/api";
import { useMutation } from "@tanstack/react-query";

export default function useFollow({
  followingId
}: {
  followingId: number
}) {

  const token = localStorage.getItem("token");  

  const onClick = async () => {
    try {
      const response = await api.post(
        `http://localhost:3000/api/v1/follow/${followingId}`,
        {},
        {
          headers: {
            Authorization: token,
          },
        }
      );

      console.log(response);

      return Response;
    } catch (error) {
      console.error;
      return error;
    }
  };

  // const { mutateAsync } = useMutation({ mutationFn: onClick });

  const handleClick = async () => {
    await onClick();

  };

  return { handleClick };
}
