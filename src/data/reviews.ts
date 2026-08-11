/**
 * Themes drawn from public customer sentiment described for All Goode.
 * Do not invent names, star counts, or review platform statistics.
 * Replace with attributed public quotes when you have permission/source links.
 */
export type Review = {
  id: string;
  quote: string;
  attribution: string;
  themes: string[];
};

export const reviews: Review[] = [
  {
    id: "responsive",
    quote:
      "Responsive, friendly and attentive — made the whole process easier than expected.",
    attribution: "Customer feedback theme",
    themes: ["responsive", "friendly", "attentive"],
  },
  {
    id: "reliable",
    quote:
      "Reliable, professional and affordable. Showed up when promised and got it done.",
    attribution: "Customer feedback theme",
    themes: ["reliable", "professional", "affordable"],
  },
  {
    id: "efficient",
    quote:
      "Worked efficiently and made a difficult job feel stress-free.",
    attribution: "Customer feedback theme",
    themes: ["efficient", "stress-free"],
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
