import { useState } from "react";

function UseLikePost(like: boolean, countLikes: number | undefined) {
  const [isLike, setIsLike] = useState<boolean>(like);
  const [viewCountLike, setViewCountLike] = useState<number | undefined>(
    countLikes
  );
  const changeStatus = () => {
    setViewCountLike((viewCountLike) => {
      if (isLike && viewCountLike != undefined) {
        return viewCountLike -1;
      } else if (!isLike && viewCountLike != undefined) {
        return viewCountLike + 1;
      }
    });
    setIsLike(!isLike);
  };
  return { isLike, changeStatus, viewCountLike };
}

export default UseLikePost;
