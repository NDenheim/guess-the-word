import "./style.scss";
import { Word, wordArray } from "./types/Words";

const wordDisplay = document.querySelector(".mystery-word") as HTMLDivElement;
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
const clueButton = document.querySelector(".clue-button") as HTMLButtonElement;
const clueDiv = document.querySelector(".clue") as HTMLDivElement;
const answerText = document.querySelector(
  ".answer__text"
) as HTMLParagraphElement;

if (
  !wordDisplay ||
  !categoryMenu ||
  !difficultyMenu ||
  !alphabetButtons ||
  !chosenCategory ||
  !clueButton ||
  !clueDiv ||
  !answerText
) {
  throw new Error("Issue with QS");
}

const animalWords = wordArray.filter((word: Word) => {
  return word.category.includes("Animals");
});

const cityWords = wordArray.filter((word: Word) => {
  return word.category.includes("Cities");
});

// const easyCityWords = cityWords.filter((word: Word) => {
//   return word.difficulty.includes("Easy");
// });

// console.log(easyCityWords);

const foodWords = wordArray.filter((word: Word) => {
  return word.category.includes("Food");
});

const movieWords = wordArray.filter((word: Word) => {
  return word.category.includes("Movies");
});

let mysteryWord: string = "";

const changeMysteryWord = (incomingWord: string) => {
  mysteryWord = incomingWord;
};

const generateAnswer = (word: Word) => {
  chosenCategory.innerHTML = `Your chosen category is: ${categoryMenu.value}`;
  if (categoryMenu.value == "Animals") {
    const animalName =
      animalWords[Math.floor(Math.random() * animalWords.length)].name;
    wordDisplay.innerText = animalName.replace(/[a-z]/g, "__  ");
    changeMysteryWord(animalName);
  } else if (categoryMenu.value == "Cities") {
    const cityName =
      cityWords[Math.floor(Math.random() * cityWords.length)].name;
    wordDisplay.innerText = cityName
      .replace(/[ ]/g, "/")
      .replace(/[a-z]/g, "__  ");
    changeMysteryWord(cityName);
  } else if (categoryMenu.value == "Food") {
    const foodName =
      foodWords[Math.floor(Math.random() * foodWords.length)].name;
    wordDisplay.innerText = foodName.replace(/[a-z]/g, "__  ");
    changeMysteryWord(foodName);
  } else if (categoryMenu.value == "Movies") {
    const movieName =
      movieWords[Math.floor(Math.random() * movieWords.length)].name;
    wordDisplay.innerText = movieName.replace(/[a-z]/g, "__  ");
    changeMysteryWord(movieName);
  } else if (categoryMenu.value == "Random") {
    // chosenCategory.innerHTML = `Your chosen category is: ${word.category}`;
    const Name = wordArray[Math.floor(Math.random() * wordArray.length)].name;
    wordDisplay.innerText = Name.replace(/[a-z]/g, "__  ");
    changeMysteryWord(Name);
  }
  answerText.innerText = mysteryWord;
  //   const wordDisplayArr = wordDisplay.innerText.split(" ");
  //   console.log(wordDisplayArr);

  //   if (word.name == mysteryWord) {
  //     clueButton.addEventListener("click", () => {
  //       clueDiv.innerHTML = `Clue: ${word.clue}`;
  //     });
  //   }
};

const wordDisplayArr = wordDisplay.innerText.split(" ");
console.log(wordDisplayArr);

// console.log(answerText.innerText);

categoryMenu.addEventListener("change", generateAnswer);

// const categoryChange = () => {
//   categoryMenu.addEventListener("change", generateAnswer);

//   const handleClueButtonPress = async (mysteryWord: string, word: Word) => {
//     if (word.name.includes(mysteryWord)) {
//       clueDiv.innerHTML = `Clue: ${word.clue}`;
//     }
//   };

//   clueButton.addEventListener("click", handleClueButtonPress);
// };

// const retrieveMysteryWord = () => {
//   categoryMenu.addEventListener("change", generateAnswer);

//   console.log(mysteryWord);
// };

// retrieveMysteryWord;

const handleClueButtonPress = () => {
  //   console.log(answerText.innerText);
  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i].name == answerText.innerText) {
      clueDiv.innerHTML = `Clue: ${wordArray[i].clue}`;
    }
  }
};
clueButton.addEventListener("click", handleClueButtonPress);

// let letterGuessed = alphabetButtons.values;

alphabetButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // console.log(button.textContent);
    let letterArray = answerText.innerText.split("");
    // console.log(letterArray);

    for (let i = 0; i < letterArray.length; i++) {
      if (button.textContent == letterArray[i]) {
        console.log(button.textContent);
        //     let indices = [];
        //     // console.log(letterArray.indexOf(button.textContent));
        //     let idx = letterArray.indexOf(button.textContent);
        //     while (idx !== -1) {
        //       indices.push(idx);
        //       idx = letterArray.indexOf(button.textContent, idx + 1);
        //     }
        //     console.log(indices);
      }
    }
  });
});
