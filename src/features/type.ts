export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    password: string;
    quote: string | null;
    profilePictureUrl: string | null;
    coverPictureUrl: string | null;
    createdAt: string;
    updatedAt: string;
  }

  type Follower = {
    followingId: number;
  };
  
  type Following = {
    followerId: number;
  };

 export interface UserType extends User {
    followers: Follower[];
    following: Following[];
    _count: {
        followers: number;
        following: number;
      };
  }

export interface FriendCardType {
    id:number,
    name: string;
    profilePictureUrl: null | string;
    username: string;
    isFollow: boolean;
  }

