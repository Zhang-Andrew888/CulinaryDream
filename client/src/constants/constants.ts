export const BACKEND_BASE_PATH =
  import.meta.env.VITE_BACKENDURL || "http://localhost:8080";

// all mocked data and categories. These will all be stored on the backend
export const Categories: string[] = [
  "Top Recommendations",
  "Asian",
  "Big 5 Cuisine",
  "Trending",
];

export type recipe = {
  name: string;
  time: string;
  picture: string;
};

export const topRecs: recipe[] = [
  // Top Recommendations
  {
    name: "Honey Garlic Salmon",
    time: "25 mins",
    picture:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400",
  },
  {
    name: "Creamy Tuscan Pasta",
    time: "30 mins",
    picture:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400",
  },
  {
    name: "Avocado Toast with Poached Egg",
    time: "15 mins",
    picture:
      "https://images.unsplash.com/photo-1541519227354-08fa5d50c820?w=400",
  },
];

export const Asian: recipe[] = [
  {
    name: "Chicken Pad Thai",
    time: "20 mins",
    picture: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400",
  },
  {
    name: "Beef Bulgogi",
    time: "35 mins",
    picture:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400",
  },
  {
    name: "Vegetable Dim Sum",
    time: "45 mins",
    picture: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400",
  },
  {
    name: "Shrimp Fried Rice",
    time: "25 mins",
    picture:
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400",
  },
  {
    name: "Miso Ramen",
    time: "40 mins",
    picture:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400",
  },
  {
    name: "Korean Bibimbap",
    time: "30 mins",
    picture:
      "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400",
  },
  {
    name: "Thai Green Curry",
    time: "35 mins",
    picture:
      "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400",
  },
  {
    name: "Pork Gyoza",
    time: "30 mins",
    picture:
      "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400",
  },
  {
    name: "Mapo Tofu",
    time: "25 mins",
    picture:
      "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400",
  },
];

export const BigFive: recipe[] = [
  {
    name: "Beef Bourguignon",
    time: "2 hrs 30 mins",
    picture:
      "https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=400",
  },
  {
    name: "Margherita Pizza",
    time: "40 mins",
    picture:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400",
  },
  {
    name: "Chicken Tikka Masala",
    time: "50 mins",
    picture:
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400",
  },
];
export const Trending: recipe[] = [
  {
    name: "Smash Burger",
    time: "20 mins",
    picture:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400",
  },
  {
    name: "Birria Tacos",
    time: "3 hrs",
    picture: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400",
  },
  {
    name: "Whipped Feta Dip",
    time: "10 mins",
    picture:
      "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=400",
  },
];

export const RecipeMap: Record<string, recipe[]> = {
  "Top Recommendations": topRecs,
  Asian: Asian,
  "Big 5 Cuisine": BigFive,
  Trending: Trending,
};
