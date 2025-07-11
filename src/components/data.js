import { CiMap } from "react-icons/ci";
import { IoIosCalendar } from "react-icons/io";
import {
  Card1,
  Card2,
  Card3,
  Card4,
  Card5,
  Card6,
  User1,
  User2,
  User3,
} from "../assets/assets";
import { FaCalendarAlt, FaStar, FaUsers } from "react-icons/fa";
import { GiCommercialAirplane } from "react-icons/gi";
import { LuMap } from "react-icons/lu";

export const NavItem = ["Destinations", "Services", "Testamonials", "Contact"];

export const labelsData = [
  {
    label: "Destination",
    placeholder: "Where to go?",
    icon: <CiMap />,
  },
  {
    label: "Check In",
    placeholder: "Add date",
    icon: <IoIosCalendar />,
  },
  {
    label: "Check Out",
    placeholder: "Add date",
    icon: <IoIosCalendar />,
  },
];

// cardData

export const cardData = [
  {
    image: Card1,
    country: "Bali, Indonesia",
    price: "Starting from $1,200",
    rating: "5.2",
    starIcon: <FaStar />,
  },
  {
    image: Card2,
    country: "Santorini, Greece",
    price: "Starting from $1,500",
    rating: "5.2",
    starIcon: <FaStar />,
  },
  {
    image: Card3,
    country: "Kyoto, Japan",
    price: "Starting from $1,800",
    rating: "5.2",
    starIcon: <FaStar />,
  },
  {
    image: Card4,
    country: "Machu Picchu, Peru",
    price: "Starting from $2,100  ",
    rating: "5.2",
    starIcon: <FaStar />,
  },
  {
    image: Card5,
    country: "Maldives",
    price: "Starting from $2,400",
    rating: "5.2",
    starIcon: <FaStar />,
  },
  {
    image: Card6,
    country: "Paris, France",
    price: "Starting from $1,300",
    rating: "5.2",
    starIcon: <FaStar />,
  },
];

export const ServiceData = [
  {
    airIcon: <GiCommercialAirplane />,
    title: "Flight Booking",
    description: "Get the best deals on flights to any destination worldwide.",
  },
  {
    airIcon: <LuMap />,
    title: "Tour Packages",
    description: "All-inclusive packages with guided tours and activities.",
  },
  {
    airIcon: <FaCalendarAlt />,
    title: "Hotel Reservations",
    description: "Book luxury, mid-range, or budget accommodations.",
  },
  {
    airIcon: <FaUsers />,
    title: "Custom Itineraries",
    description: "Personalized travel plans tailored to your preferences.",
  },
];

// Testamonials Data

export const testamonialData = [
  {
    yulduzchalar: <FaStar />,
    about:
      "The trip to Bali was absolutely perfect. Every detail was taken care of, and the local guides were exceptional. ",
    usrImage: User1,
    userName: "Sarah Johnson",
    location: "New York, USA",
  },
  {
    yulduzchalar: <FaStar />,
    about:
      "Our family vacation to Greece exceeded all expectations. The accommodations were luxurious and the itinerary was perfectly balanced.",
    usrImage: User2,
    userName: "Michael Chen",
    location: "Toronto, Canada",
  },
  {
    yulduzchalar: <FaStar />,
    about:
      "I've traveled with many agencies before, but TravelWorld provides a level of service that's truly unmatched. Highly recommended!",
    usrImage: User3,
    userName: "Emma Rodriguez",
    location: "London, UK",
  },
];

export const footerData = [
  {
    footTitle: "Quick Links",
    foot1: "About Us",
    foot2: "Destinations",
    foot3: "Tour Packages",
    foot4: "Travel Blog",
  },
  {
    footTitle: "Support",
    foot1: "FAQs",
    foot2: "Contact Us",
    foot3: "Privacy Policy",
    foot4: "Terms of Service",
  },
  {
    footTitle: "Contact Info",
    foot1: `123 Travel Street New York, NY 10001`,
    foot2: `Email: info@travelworld.com Phone: +1 (555) 123-4567`,
  },
];
