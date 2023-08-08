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
];
