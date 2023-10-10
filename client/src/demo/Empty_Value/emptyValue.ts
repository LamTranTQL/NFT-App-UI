import { RadioType } from "@/components/Radio/radio.interface";
import USA from "@/assets/icons/usa.svg";
import Canada from "@/assets/icons/canada.svg";
import France from "@/assets/icons/france.svg";
import { SelectType } from "@/components/Single_Select/singleSelect.interface";
import { LocationsType } from "@/types/types";
import { RadioValueType } from "@/components/Radio_Button/radioButton.interface";

const emptyBidding: SelectType[] = [
  { id: "maximsize-conversion", content: "Maximize Conversion" },
  { id: "target-cpa", content: "Target CPA" },
];

const emptyCTA: SelectType[] = [
  { id: "apply-now", content: "Apply Now" },
  { id: "book-now", content: "Book Now" },
  { id: "contact-us", content: "Contact Us" },
  { id: "download", content: "Download" },
  { id: "learn-more", content: "Learn More" },
  { id: "install", content: "Install" },
  { id: "visit-site", content: "Visit Site" },
  { id: "shop-now", content: "Shop Now" },
  { id: "sign-up", content: "Sign Up" },
  { id: "get-quote", content: "Get Quote" },
  { id: "subscribe", content: "Subscribe" },
  { id: "see-more", content: "See More" },
];

const emptyLocation: LocationsType[] = [
  { id: "all-countries", content: "All countries and territories" },
  {
    id: "united-state",
    content: "United States",
    value: [
      {
        image: USA,
        countryName: "United States",
        stateName: "California",
        cityName: "LA",
        population: 11000000,
      },
      {
        image: USA,
        countryName: "United States",
        stateName: "New York",
        cityName: "Brooklyn",
        population: 4750000,
      },
    ],
  },
  {
    id: "another-conutry",
    content: "Choose another country or location",
    value: [
      {
        image: USA,
        countryName: "United States",
        stateName: "California",
        cityName: "LA",
        population: 11000000,
      },
      {
        image: USA,
        countryName: "United States",
        stateName: "New York",
        cityName: "Brooklyn",
        population: 4750000,
      },
      {
        image: Canada,
        countryName: "Canada",
        stateName: "British",
        cityName: "Vancouver",
        population: 3799000,
      },
      {
        image: France,
        countryName: "France",
        stateName: "Marseille",
        cityName: "112078",
        population: 1475000,
      },
    ],
  },
];
const emptyGender: RadioValueType[] = [
  { id: "any", value: "Any" },
  { id: "male", value: "Male" },
  { id: "female", value: "Female" },
];
const emptyAge: RadioType[] = [
  { id: "all", content: "All" },
  { id: "age-range", content: "Age range" },
];

const emptyAgeRange: SelectType[] = [
  {
    id: "between-18-and-24-years-old",
    content: "Between 18 and 24 years old",
  },
  {
    id: "between-25-and-34-years-old",
    content: "Between 25 and 34 years old",
  },
  {
    id: "between-35-and-44-years-old",
    content: "Between 35 and 44 years old",
  },
  {
    id: "between-45-and-54-years-old",
    content: "Between 45 and 54 years old",
  },
  {
    id: "between-55-and-64-years-old",
    content: "Between 55 and 64 years old",
  },
  { id: "65-years-old-and-beyond", content: "65 years old and beyond" },
];

export {
  emptyBidding,
  emptyCTA,
  emptyLocation,
  emptyGender,
  emptyAge,
  emptyAgeRange,
};
