const navLinks = [
  {
    id: "cocktails",
    title: "Signature Cocktails",
  },
  {
    id: "about",
    title: "Our Story",
  },
  {
    id: "work",
    title: "Mixology Magic",
  },
  {
    id: "contact",
    title: "Get in Touch",
  },
];

const cocktailLists = [
  {
    name: "Kala Khatta Twist",
    country: "IN",
    detail: "300 ml",
    price: "₹250",
  },
  {
    name: "Mango Mirchi Mojito",
    country: "IN",
    detail: "350 ml",
    price: "₹299",
  },
  {
    name: "Kokum Cooler",
    country: "IN",
    detail: "300 ml",
    price: "₹220",
  },
  {
    name: "Jamun Gin Fizz",
    country: "IN",
    detail: "330 ml",
    price: "₹280",
  },
];

const mockTailLists = [
  {
    name: "Masala Soda Splash",
    country: "IN",
    detail: "300 ml",
    price: "₹120",
  },
  {
    name: "Aam Panna Bliss",
    country: "IN",
    detail: "350 ml",
    price: "₹140",
  },
  {
    name: "Nimbu Basil Pop",
    country: "IN",
    detail: "300 ml",
    price: "₹110",
  },
  {
    name: "Rose Sharbat Fizz",
    country: "IN",
    detail: "330 ml",
    price: "₹135",
  },
];

const profileLists = [
  { imgPath: "/images/profile1.png" },
  { imgPath: "/images/profile2.png" },
  { imgPath: "/images/profile3.png" },
  { imgPath: "/images/profile4.png" },
];

const featureLists = [
  "Locally-sourced ingredients",
  "Fresh herbs & spices",
  "Infused Indian flavors",
  "Served with traditional charm",
];

const goodLists = [
  "Ayurvedic-inspired blends",
  "Time-tested family recipes",
  "Flair bartending & theatre",
  "Seasonal, regional fruits",
];

const storeInfo = {
  heading: "Visit Us",
  address: "12, MG Road, Koregaon Park, Pune, Maharashtra 411001",
  contact: {
    phone: "+91 98765 43210",
    email: "namaste@desicocktailbar.in",
  },
};

const openingHours = [
  { day: "Mon–Thu", time: "12:00pm – 11:00pm" },
  { day: "Fri", time: "12:00pm – 1:00am" },
  { day: "Sat", time: "11:00am – 1:30am" },
  { day: "Sun", time: "11:00am – 11:30pm" },
];

const socials = [
  {
    name: "Instagram",
    icon: "/images/insta.png",
    url: "https://instagram.com/desicocktailbar",
  },
  {
    name: "X (Twitter)",
    icon: "/images/x.png",
    url: "https://x.com/desicocktailbar",
  },
  {
    name: "Facebook",
    icon: "/images/fb.png",
    url: "https://facebook.com/desicocktailbar",
  },
];

const allCocktails = [
  {
    id: 1,
    name: "Mango Mirchi Mojito",
    image: "/images/drink1.png",
    title: "Bold Desi Zing with a Minty Finish",
    description:
      "Raw mango pulp, green chilli, mint, and soda — this fiery and refreshing twist is India in a glass.",
  },
  {
    id: 2,
    name: "Rose Gulabo",
    image: "/images/drink2.png",
    title: "Fragrant. Floral. Fabulous.",
    description:
      "Rose syrup, basil seeds, lemon juice and fizz. An elegant floral escape for your senses.",
  },
  {
    id: 3,
    name: "Kokum Kamikaze",
    image: "/images/drink3.png",
    title: "Konkan Meets Cocktail Culture",
    description:
      "Tart kokum, lime, mint and a dash of vodka— a coastal breeze in every sip.",
  },
  {
    id: 4,
    name: "Spiced Masala Rum",
    image: "/images/drink4.png",
    title: "Classic Rum with Indian Heat",
    description:
      "Old Monk infused with cinnamon, star anise, and clove, served over crushed ice.",
  },
];

export {
  navLinks,
  cocktailLists,
  mockTailLists,
  profileLists,
  featureLists,
  goodLists,
  openingHours,
  storeInfo,
  socials,
  allCocktails,
};
