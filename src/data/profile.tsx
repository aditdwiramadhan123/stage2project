export interface profileType {
  name: string;
  username: string;
  quote: string;
  following: number;
  follower: number;
  imageProfil: boolean;
  imageProfilLink?: string|null;
  coverImage: boolean;
  coverImageLink?: string|null;
}

const listProfile: profileType[] = [
  {
    name: "John Doe",
    username: "john_doe",
    quote: "Live and let live.",
    following: 150,
    follower: 200,
    imageProfil: true,
    imageProfilLink: "https://example.com/images/john_doe_profile.jpg",
    coverImage: true,
    coverImageLink: "https://example.com/images/john_doe_cover.jpg",
  },
  {
    name: "Jane Smith",
    username: "jane_smith",
    quote: "Carpe diem.",
    following: 300,
    follower: 450,
    imageProfil: true,
    imageProfilLink: "https://example.com/images/jane_smith_profile.jpg",
    coverImage: true,
    coverImageLink: "https://example.com/images/jane_smith_cover.jpg",
  },
  {
    name: "Michael Johnson",
    username: "michael_johnson",
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    following: 500,
    follower: 700,
    imageProfil: true,
    imageProfilLink: "https://example.com/images/michael_johnson_profile.jpg",
    coverImage: false,
  },
  {
    name: "Emily Davis",
    username: "emily_davis",
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    following: 200,
    follower: 300,
    imageProfil: true,
    imageProfilLink: "https://example.com/images/emily_davis_profile.jpg",
    coverImage: true,
    coverImageLink: "https://example.com/images/emily_davis_cover.jpg",
  },
  {
    name: "Christopher Wilson",
    username: "chris_wilson",
    quote: "Believe you can and you're halfway there.",
    following: 400,
    follower: 600,
    imageProfil: false,
    coverImage: true,
    coverImageLink: "https://example.com/images/chris_wilson_cover.jpg",
  },
];

export default listProfile;

