export interface commentType {
  name: string;
  username: string;
  time: string;
  caption: string;
  image: boolean;
  isLike: boolean;
  linkImage?: string;
  likesCount: number;
  commentCount: number;
}

const commentList: commentType[] = [
  {
    name: "Alice Johnson",
    username: "alice_j",
    time: "2h",
    caption: "Beautiful morning at the park!",
    image: true,
    linkImage: "https://cdn.windowsreport.com/wp-content/uploads/2020/04/Fotor-logo.jpg",
    likesCount: 120,
    isLike: false,
    commentCount: 45,
  },
  {
    name: "Bob Smith",
    username: "bob_smith",
    time: "3d",
    caption: "Coffee time!",
    image: false,
    linkImage: "",
    likesCount: 85,
    isLike: false,
    commentCount: 20,
  },
  {
    name: "Catherine Lee",
    username: "cat_lee",
    time: "12h",
    caption: "Loving the new art exhibition.",
    image: true,
    linkImage: "https://cdn.windowsreport.com/wp-content/uploads/2020/04/Fotor-logo.jpg",
    likesCount: 150,
    isLike: false,
    commentCount: 60,
  },
  {
    name: "David Kim",
    username: "david_kim",
    time: "1h",
    caption: "Hiking adventures!",
    image: true,
    linkImage: "https://cdn.windowsreport.com/wp-content/uploads/2020/04/Fotor-logo.jpg",
    likesCount: 200,
    isLike: false,
    commentCount: 80,
  },
  {
    name: "Eva Brown",
    username: "eva_brown",
    time: "5d",
    caption: "Delicious homemade pizza.",
    image: false,
    linkImage: "",
    likesCount: 90,
    isLike: false,
    commentCount: 25,
  },
  {
    name: "Frank Harris",
    username: "frank_h",
    time: "30m",
    caption: "Enjoying a day at the beach.",
    image: true,
    linkImage: "https://cdn.windowsreport.com/wp-content/uploads/2020/04/Fotor-logo.jpg",
    likesCount: 175,
    isLike: false,
    commentCount: 70,
  },
  {
    name: "Grace Wilson",
    username: "grace_w",
    time: "15h",
    caption: "Reading my favorite book.",
    image: false,
    linkImage: "",
    likesCount: 60,
    isLike: false,
    commentCount: 10,
  },
  {
    name: "Henry Young",
    username: "henry_y",
    time: "7h",
    caption: "New blog post is up! Check it out.",
    image: true,
    linkImage: "https://cdn.windowsreport.com/wp-content/uploads/2020/04/Fotor-logo.jpg",
    likesCount: 110,
    isLike: true,
    commentCount: 40,
  },
  {
    name: "Isabella Martinez",
    username: "isabella_m",
    time: "1d",
    caption: "A day well spent with friends.",
    image: true,
    linkImage: "https://cdn.windowsreport.com/wp-content/uploads/2020/04/Fotor-logo.jpg",
    likesCount: 190,
    isLike: false,
    commentCount: 65,
  },
  {
    name: "Jack Thompson",
    username: "jack_t",
    time: "4h",
    caption: "Sunset vibes.",
    image: true,
    linkImage: "https://cdn.windowsreport.com/wp-content/uploads/2020/04/Fotor-logo.jpg",
    likesCount: 130,
    isLike: true,
    commentCount: 50,
  },
];

export default commentList;
