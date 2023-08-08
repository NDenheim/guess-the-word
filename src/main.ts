import "./style.scss";
import { Word, wordArray } from "./types/Words";

const answerDisplay = document.querySelector(".answer") as HTMLDivElement;
const categoryMenu = document.querySelector(
  "#category-menu"
) as HTMLSelectElement;
const difficultyMenu = document.querySelector(
  "#difficulty-menu"
) as HTMLSelectElement;
const alphabetButtons = document.querySelectorAll(".letters__button");
const chosenCategory = document.querySelector(
  ".chosen-category"
) as HTMLParagraphElement;

if (
  !answerDisplay ||
  !categoryMenu ||
  !difficultyMenu ||
  !alphabetButtons ||
  !chosenCategory
) {
  throw new Error("Issue with QS");
}

// const handleMenuSelect = () => {
//   chosenCategory.innerHTML = `Your chosen category is: ${categoryMenu.value}`;
//   // const wordCities = wordArray.filter((word: Word) => {
//   //   // return word.name
//   //   // answerDisplay.innerHTML = wordCities
//   // });
//   //   answerDisplay.textContent = wordCities
// };

// categoryMenu.addEventListener("change", handleMenuSelect);

const animalWords = wordArray.filter((word: Word) => {
  return word.category.includes("Animals");
});

const cityWords = wordArray.filter((word: Word) => {
  return word.category.includes("Cities");
});

// const cityName = cityWords.name;

const foodWords = wordArray.filter((word: Word) => {
  return word.category.includes("Food");
});

const movieWords = wordArray.filter((word: Word) => {
  return word.category.includes("Movies");
});

const generateAnswer = (word: Word) => {
  chosenCategory.innerHTML = `Your chosen category is: ${categoryMenu.value}`;
  if (categoryMenu.value == "Animals") {
    const animalName =
      animalWords[Math.floor(Math.random() * animalWords.length)].name;
    console.log(animalName);
  } else if (categoryMenu.value == "Cities") {
    const cityName =
      cityWords[Math.floor(Math.random() * cityWords.length)].name;
    console.log(cityName);
  } else if (categoryMenu.value == "Food") {
    const foodName =
      foodWords[Math.floor(Math.random() * foodWords.length)].name;
    console.log(foodName);
  } else if (categoryMenu.value == "Movies") {
    const movieName =
      movieWords[Math.floor(Math.random() * movieWords.length)].name;
    console.log(movieName);
  } else if (categoryMenu.value == "Random") {
    // chosenCategory.innerHTML = `Your chosen category is: ${word.category}`;
    const Name = wordArray[Math.floor(Math.random() * wordArray.length)].name;
    console.log(Name);
  }

  // const splitWord = cityWords.name.split("");
  // console.log(splitWord);
};
//   const splitWord = cityWords.name.split("");
//   console.log(splitWord);

// for (let i = 0; i < splitWord.length; i++) {
//     if(splitWord[i])!== " ") {
//         answerDisplay.innerText += "_";
//     } else {
//         answerDisplay.innerText += " ";
//     }
//     return splitWord.join("  ")
// }

// cityWords.forEach((city) => {
//     let cityWord = city.name[Math.floor(Math.random() * cityWords.length)];
//     console.log(cityWord);
//   });

categoryMenu.addEventListener("change", generateAnswer);
