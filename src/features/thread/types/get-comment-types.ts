// Define interfaces for each included model
export interface UserType {
  name: string;
  username: string;
  profilePictureUrl: string | null;
}

export interface LikeType {
  user: UserType;
}


export interface CommentType extends UserType {
  id: number;
  caption: string;
  imageUrl: string | null;
  duration: string;
  likes: number;
  isLike: boolean;
}


export interface CommentTypeFromDB {
  commentData: CommentType
  likesData: UserType
  commentsData:UserType
}

