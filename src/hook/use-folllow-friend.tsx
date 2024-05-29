import { useState } from "react";

function useFollowFriend() {
  const [isFollow, setIsFollow] = useState<boolean>(false);

  const changeStatus = () => {
    setIsFollow(!isFollow);
  };

  return { isFollow, changeStatus };
}

export default useFollowFriend
