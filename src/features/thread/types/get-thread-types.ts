// Define interfaces for each included model
export interface UserType {
  name: string;
  username: string;
  profilePictureUrl: string | null;
}

export interface CommentType {
  author: UserType;
}

export interface LikeType {
  user: UserType;
}



export interface ThreadType extends UserType {
  id: number;
  caption: string;
  imageUrl: string | null;
  duration: string;
  comments: number;
  likes: number;
  isLike: boolean;
}


export interface ThreadTypeFromDB {
  threadData: ThreadType
  likesData: UserType
  commentsData:UserType
}

