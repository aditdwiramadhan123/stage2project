interface FriendCardType {
  name: string;
  profilePictureUrl: null | string;
  username: string;
  isFollow: boolean;
}

const listFriend: FriendCardType[] = [
  {
    name: "John Doe",
    username: "john_doe",
    isFollow: true,
    profilePictureUrl:
      "https://cdn.windowsreport.com/wp-content/uploads/2020/04/Fotor-logo.jpg",
  },
  {
    name: "Alice Smith",
    username: "alice_smith",
    isFollow: false,
    profilePictureUrl: null, // Menjadi null karena tidak disediakan
  },
  {
    name: "Bob Johnson",
    username: "bob_johnson",
    isFollow: true,
    profilePictureUrl:
      "https://cdn.windowsreport.com/wp-content/uploads/2020/04/Fotor-logo.jpg",
  },
  {
    name: "Emma Davis",
    username: "emma_davis",
    isFollow: false,
    profilePictureUrl:
      "https://cdn.windowsreport.com/wp-content/uploads/2020/04/Fotor-logo.jpg",
  },
  {
    name: "Michael Wilson",
    username: "michael_wilson",
    isFollow: true,
    profilePictureUrl:
      "https://cdn.windowsreport.com/wp-content/uploads/2020/04/Fotor-logo.jpg",
    
  },
  {
    name: "Sophia Brown",
    username: "sophia_brown",
    isFollow: false,
    profilePictureUrl:
      "https://cdn.windowsreport.com/wp-content/uploads/2020/04/Fotor-logo.jpg", // profilePictureUrl sama dengan yang pertama
  },
  {
    name: "William Taylor",
    username: "william_taylor",
    isFollow: false,
    profilePictureUrl:
      "https://cdn.windowsreport.com/wp-content/uploads/2020/04/Fotor-logo.jpg",
  },
  {
    name: "Olivia Martinez",
    username: "olivia_martinez",
    isFollow: true,
    profilePictureUrl:
      "https://cdn.windowsreport.com/wp-content/uploads/2020/04/Fotor-logo.jpg",
  },
  {
    name: "James Garcia",
    username: "james_garcia",
    isFollow: false,
    profilePictureUrl:
      "https://cdn.windowsreport.com/wp-content/uploads/2020/04/Fotor-logo.jpg",
  },
  {
    name: "Charlotte Rodriguez",
    username: "charlotte_rodriguez",
    isFollow: true,
    profilePictureUrl:
      "https://cdn.windowsreport.com/wp-content/uploads/2020/04/Fotor-logo.jpg",
  },
];


export default listFriend;
