/** Only add contact information and media confirmed by LuxeGrid. */
export const siteConfig = {
  name: "LuxeGrid",
  descriptor: "Construction & Marketing",
  location: "Islamabad",
  email: null as string | null,
  phone: null as string | null,
  whatsapp: null as string | null,
  address: null as string | null,
  storyVideo: null as string | null,
  enquiryEndpoint: null as string | null,
  socials: {
    instagram: null,
    facebook: null,
    linkedin: null,
    youtube: null,
  } as Record<string, string | null>,
};
export const services = [
  {
    id: "buy",
    name: "Buy Property",
    description: "Find and acquire the right property with expert guidance.",
    icon: "home",
    image: "architecture.webp",
  },
  {
    id: "sell",
    name: "Sell Property",
    description:
      "Market your property to the right buyers and get the best value.",
    icon: "tag",
    image: "living.webp",
  },
  {
    id: "rent",
    name: "Rent Property",
    description: "Residential and commercial rentals made simple.",
    icon: "key",
    image: "interior.webp",
  },
  {
    id: "consultancy",
    name: "Real Estate Consultancy",
    description: "Practical advice and market insight for smarter decisions.",
    icon: "chart",
    image: "islamabad.webp",
  },
  {
    id: "marketing",
    name: "Property Marketing",
    description:
      "Professional marketing, from creative content to targeted promotion.",
    icon: "camera",
    image: "hero.webp",
  },
  {
    id: "construction",
    name: "Construction Services",
    description: "From planning to execution, we help build with confidence.",
    icon: "hardhat",
    image: "construction.webp",
  },
] as const;
