export type Word = {
  name: string;
  category: string;
  clue: string;
  difficulty: string;
};

export const wordArray: Word[] = [
  {
    name: "london",
    category: "Cities",
    clue: "Think red buses and a royal palace",
    difficulty: "Easy",
  },
  {
    name: "paris",
    category: "Cities",
    clue: "Go here if you want to eat bread and see a big tower",
    difficulty: "Easy",
  },
  {
    name: "madrid",
    category: "Cities",
    clue: "Fancy a siesta after a cheeky sangria? This is the place to be",
    difficulty: "Easy",
  },
  {
    name: "sydney",
    category: "Cities",
    clue: "G'day mate",
    difficulty: "Easy",
  },
  {
    name: "amsterdam",
    category: "Cities",
    clue: "Known for its beautiful canals and not so wholesome activities...",
    difficulty: "Regular",
  },
  {
    name: "tokyo",
    category: "Cities",
    clue: "Home of sushi and the 2020 Olympics",
    difficulty: "Regular",
  },
  {
    name: "new york",
    category: "Cities",
    clue: "You won't find the big pear here",
    difficulty: "Regular",
  },
  {
    name: "chocolate",
    category: "Food",
    clue: "Be sure to buy this on sale the day after Valentines Day",
    difficulty: "Easy",
  },
  {
    name: "sandwich",
    category: "Food",
    clue: "Gotta love a Tesco meal deal",
    difficulty: "Easy",
  },
  {
    name: "banana",
    category: "Food",
    clue: "Good for potassium and throwing at people in Mario Kart",
    difficulty: "Regular",
  },
  {
    name: "pizza",
    category: "Food",
    clue: "Your favourite is either from Italy or New York",
    difficulty: "Regular",
  },
  {
    name: "spinach",
    category: "Food",
    clue: "If it's good for Popeye, it's good for me",
    difficulty: "Regular",
  },
];
