import { useState } from "react";

function useFollowFriend(follow:boolean) {
  const [isFollow, setIsFollow] = useState<boolean>(follow);

  const changeStatus = () => {
    setIsFollow(!isFollow);
  };

  return { isFollow, changeStatus };
}

export default useFollowFriend
