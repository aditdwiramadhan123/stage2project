export interface postItemType {
  name: string;
  username: string;
  time: string;
  caption:string;
  image: boolean;
  linkImageAva:string|null
  linkImage?: string;
  likesCount: number;
  isLike: boolean;
  commentCount: number;
}

const postList: postItemType[] = [
  {
    name: "Alice Johnson",
    username: "alice_j",
    time: "2h",
    caption: "Enjoying a lovely day out!",
    image: true,
    linkImageAva: "https://www.wowkeren.com/images/photo/mario_teguh.jpg",
    linkImage: "https://cdn.windowsreport.com/wp-content/uploads/2020/04/Fotor-logo.jpg",
    likesCount: 120,
    isLike: false,
    commentCount: 45,
  },
  {
    name: "Bob Smith",
    username: "bob_smith",
    time: "3d",
    caption: "Throwback to a great time with friends!",
    image: false,
    linkImageAva: null,
    linkImage: "https://cdn.windowsreport.com/wp-content/uploads/2020/04/Fotor-logo.jpg",
    likesCount: 85,
    isLike: false,
    commentCount: 20,
  },
  {
    name: "Catherine Lee",
    username: "cat_lee",
    time: "12h",
    caption: "Feeling grateful for the little things in life.",
    image: true,
    linkImageAva: "https://www.wowkeren.com/images/photo/mario_teguh.jpg",
    linkImage: "https://cdn.windowsreport.com/wp-content/uploads/2020/04/Fotor-logo.jpg",
    likesCount: 150,
    isLike: true,
    commentCount: 60,
  },
  // Data tambahan:
  {
    name: "David Kim",
    username: "david_kim",
    time: "1d",
    caption: "Exploring the city streets!",
    image: true,
    linkImageAva: "https://www.wowkeren.com/images/photo/mario_teguh.jpg",
    linkImage: "https://cdn.windowsreport.com/wp-content/uploads/2020/04/Fotor-logo.jpg",
    likesCount: 180,
    isLike: false,
    commentCount: 55,
  },
  {
    name: "Eva Brown",
    username: "eva_brown",
    time: "6h",
    caption: "Relaxing by the beach.",
    image: true,
    linkImageAva: null,
    linkImage: "https://cdn.windowsreport.com/wp-content/uploads/2020/04/Fotor-logo.jpg",
    likesCount: 95,
    isLike: true,
    commentCount: 30,
  },
  {
    name: "Frank Harris",
    username: "frank_h",
    time: "2d",
    caption: "Enjoying delicious food!",
    image: false,
    linkImageAva: "https://www.wowkeren.com/images/photo/mario_teguh.jpg",
    linkImage: "https://cdn.windowsreport.com/wp-content/uploads/2020/04/Fotor-logo.jpg",
    likesCount: 110,
    isLike: true,
    commentCount: 40,
  },
  {
    name: "Grace Wilson",
    username: "grace_w",
    time: "1h",
    caption: "Reflecting on the beauty of nature.",
    image: true,
    linkImageAva: null,
    linkImage: "https://cdn.windowsreport.com/wp-content/uploads/2020/04/Fotor-logo.jpg",
    likesCount: 75,
    isLike: false,
    commentCount: 15,
  },
  {
    name: "Henry Young",
    username: "henry_y",
    time: "8h",
    caption: "A day filled with laughter and joy!",
    image: false,
    linkImageAva: "https://www.wowkeren.com/images/photo/mario_teguh.jpg",
    linkImage: "https://cdn.windowsreport.com/wp-content/uploads/2020/04/Fotor-logo.jpg",
    likesCount: 130,
    isLike: false,
    commentCount: 50,
  },
  {
    name: "Isabella Martinez",
    username: "isabella_m",
    time: "5d",
    caption: "Embracing the beauty of simplicity.",
    image: true,
    linkImageAva: "https://www.wowkeren.com/images/photo/mario_teguh.jpg",
    linkImage: "https://cdn.windowsreport.com/wp-content/uploads/2020/04/Fotor-logo.jpg",
    likesCount: 160,
    isLike: true,
    commentCount: 65,
  },
  {
    name: "Jack Thompson",
    username: "jack_t",
    time: "4h",
    caption: "Appreciating the wonders of life.",
    image: true,
    linkImageAva: null,
    linkImage: "https://cdn.windowsreport.com/wp-content/uploads/2020/04/Fotor-logo.jpg",
    likesCount: 100,
    isLike: false,
    commentCount: 35,
  },
];

export default postList;

