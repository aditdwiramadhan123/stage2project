export interface listFrienType {
  name: string;
  username: string;
  isFollow?: boolean;
  linkImageAva: string | null;
}

const listFriend: listFrienType[] = [
  {
    name: "John Doe",
    username: "john_doe",
    isFollow: true,
    linkImageAva:
      "https://cdn.windowsreport.com/wp-content/uploads/2020/04/Fotor-logo.jpg",
  },
  {
    name: "Alice Smith",
    username: "alice_smith",
    isFollow: false,
    linkImageAva: null, // Menjadi null karena tidak disediakan
  },
  {
    name: "Bob Johnson",
    username: "bob_johnson",
    isFollow: true,
    linkImageAva:
      "https://cdn.windowsreport.com/wp-content/uploads/2020/04/Fotor-logo.jpg",
  },
  {
    name: "Emma Davis",
    username: "emma_davis",
    isFollow: false,
    linkImageAva:
      "https://cdn.windowsreport.com/wp-content/uploads/2020/04/Fotor-logo.jpg",
  },
  {
    name: "Michael Wilson",
    username: "michael_wilson",
    isFollow: true,
    linkImageAva:
      "https://cdn.windowsreport.com/wp-content/uploads/2020/04/Fotor-logo.jpg",
  },
  {
    name: "Sophia Brown",
    username: "sophia_brown",
    linkImageAva:
      "https://cdn.windowsreport.com/wp-content/uploads/2020/04/Fotor-logo.jpg", // LinkImageAva sama dengan yang pertama
  },
  {
    name: "William Taylor",
    username: "william_taylor",
    isFollow: false,
    linkImageAva:
      "https://cdn.windowsreport.com/wp-content/uploads/2020/04/Fotor-logo.jpg",
  },
  {
    name: "Olivia Martinez",
    username: "olivia_martinez",
    isFollow: true,
    linkImageAva:
      "https://cdn.windowsreport.com/wp-content/uploads/2020/04/Fotor-logo.jpg",
  },
  {
    name: "James Garcia",
    username: "james_garcia",
    isFollow: false,
    linkImageAva:
      "https://cdn.windowsreport.com/wp-content/uploads/2020/04/Fotor-logo.jpg",
  },
  {
    name: "Charlotte Rodriguez",
    username: "charlotte_rodriguez",
    isFollow: true,
    linkImageAva:
      "https://cdn.windowsreport.com/wp-content/uploads/2020/04/Fotor-logo.jpg",
  },
];

export default listFriend;
