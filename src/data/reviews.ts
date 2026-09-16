/**
 * Public Facebook recommendations supplied by the business owner.
 * Keep the wording faithful to the source; only punctuation and capitalization
 * have been lightly normalized for readability.
 */
export type Review = {
  id: string;
  quote: string;
  attribution: string;
  source: "Facebook recommendation";
};

export const reviews: Review[] = [
  {
    id: "maria-microulis",
    quote:
      "We had the chance to use All Goode Property Services for what we thought would be a simple move of a refrigerator. It turned out to be a lot more difficult than we thought, but Hakeem and Devon were absolutely great. They were careful, creative and capable, and helped me with some things that went beyond the job. And more than fair. Recommend them heartily.",
    attribution: "Maria Microulis",
    source: "Facebook recommendation",
  },
  {
    id: "lisette-gomes",
    quote:
      "He handled junk removal at two different properties for me and was reliable, professional and affordable each time. He showed up when promised, worked efficiently and made the whole process stress-free. I would definitely use his services again.",
    attribution: "Lisette Gomes",
    source: "Facebook recommendation",
  },
  {
    id: "ivory-jefferies",
    quote:
      "Showed up the day after my inquiry, with a very prompt response and early arrival time. Fair price. Not only did they clean up the debris and junk, they also swept and leaf blew anything that remained. Very respectful and fast workers. I would give them a 10 out of 10!",
    attribution: "Ivory Jefferies",
    source: "Facebook recommendation",
  },
  {
    id: "mot-fazo",
    quote:
      "I had a great experience with this moving and junk removal company. He was very professional, showed up on time, worked efficiently and handled everything with care. He made the whole process quick and stress-free, and the pricing was fair. I’ll definitely be using them again!",
    attribution: "Møt Fazo",
    source: "Facebook recommendation",
  },
  {
    id: "marie-addison",
    quote:
      "From start to finish, the experience was absolutely amazing. He came out to help me and my son declutter my closet, and he was professional, respectful, efficient and incredible. If you’re looking for someone reliable and hardworking, I definitely recommend him.",
    attribution: "Marie Addison",
    source: "Facebook recommendation",
  },
  {
    id: "jasmine-nicole",
    quote:
      "You will get great service, great prices, the job will be done in a timely manner and you’ll always receive great quality service. I’ve used them for snow removal, junk removal and landscaping. I’ve never been disappointed.",
    attribution: "Jasmine Nicole",
    source: "Facebook recommendation",
  },
  {
    id: "vin-fernandez",
    quote: "Highly recommend Keem. Very responsive and honest about his work.",
    attribution: "Vin Fernandez",
    source: "Facebook recommendation",
  },
  {
    id: "maria-josee-mejia",
    quote:
      "They are efficient and effective. From junk removal, to yard clean up and snow removal, they are the best ones to do it all!",
    attribution: "Maria Josee Mejia",
    source: "Facebook recommendation",
  },
  {
    id: "eglasius-gomes",
    quote:
      "Great communication. Came when he said he would. Very nice. Will do business again.",
    attribution: "Eglasius Gomes",
    source: "Facebook recommendation",
  },
  {
    id: "carlos-monteiro",
    quote: "Great and quick service!",
    attribution: "Carlos Monteiro",
    source: "Facebook recommendation",
  },
  {
    id: "tyneil-cooper",
    quote:
      "Very professional and great to work with. I will be back and suggest people who want good service reach out.",
    attribution: "Tyneil Cooper",
    source: "Facebook recommendation",
  },
  {
    id: "joe-rockbarone-mannix",
    quote:
      "These guys are pure class! They went above and beyond any expectations. Got me moved in an hour and a half and came through in the clutch. Old-school gentlemen!",
    attribution: "Joe RockBarone Mannix",
    source: "Facebook recommendation",
  },
  {
    id: "joseph-testa",
    quote: "Best service I’ve ever had. Would recommend 10/10.",
    attribution: "Joseph Testa",
    source: "Facebook recommendation",
  },
  {
    id: "eboney-baker",
    quote:
      "Requested service for Saturday on a Thursday and he was here Saturday morning! Definitely recommend and will be using his services going forward!",
    attribution: "Eboney Baker",
    source: "Facebook recommendation",
  },
  {
    id: "dp-vibin",
    quote: "A1 service. Got my TV and mattress in my spot.",
    attribution: "Dp Vibin",
    source: "Facebook recommendation",
  },
  {
    id: "nata-lee",
    quote: "Professional, reliable service and great prices!",
    attribution: "Nata Lee",
    source: "Facebook recommendation",
  },
  {
    id: "onna-thompson",
    quote:
      "Very professional and reliable! I got a quick response, same-day service and affordable pricing. Very honest with prices. 10/10.",
    attribution: "Onna Thompson",
    source: "Facebook recommendation",
  },
];

export const whyPoints = [
  {
    title: "Shows Up",
    body: "Dependable scheduling and communication.",
  },
  {
    title: "Works Efficiently",
    body: "Get the property handled without dragging the job out unnecessarily.",
  },
  {
    title: "Straightforward Pricing",
    body: "Clear quotes before the work begins.",
  },
  {
    title: "Local Service",
    body: "A local business built on reputation, referrals and doing right by customers.",
  },
] as const;

export const propertyOwnerServices = [
  "Rental turnover cleanup",
  "Move-out cleanouts",
  "Exterior cleanup",
  "Junk hauling",
  "Seasonal property maintenance",
] as const;
