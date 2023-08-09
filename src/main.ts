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
const guessesDiv = document.querySelector("#guesses-left");
const answerButton = document.querySelector(".answer__button");
const hangmanDiv = document.querySelector("#hangman");

if (
  !wordDisplay ||
  !categoryMenu ||
  !difficultyMenu ||
  !alphabetButtons ||
  !chosenCategory ||
  !clueButton ||
  !clueDiv ||
  !answerText ||
  !guessesDiv ||
  !answerButton ||
  !hangmanDiv
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
};

// const wordDisplayArr = wordDisplay.innerText.split(" ");
// console.log(wordDisplayArr);

// console.log(answerText.innerText);

categoryMenu.addEventListener("change", generateAnswer);

const handleClueButtonPress = () => {
  //   console.log(answerText.innerText);
  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i].name == answerText.innerText) {
      clueDiv.innerHTML = `Clue: ${wordArray[i].clue}`;
    }
  }
};
clueButton.addEventListener("click", handleClueButtonPress);

const handleAnswerButtonPress = () => {
  answerText.style.color = "black";
};

answerButton.addEventListener("click", handleAnswerButtonPress);

// let letterGuessed = alphabetButtons.values;
let guessesLeft = 10;

// let guesses: string[] = [];

alphabetButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // guessesLeft -= 1;
    // guessesDiv.innerHTML = `Lives: <br> ${guessesLeft}`;

    // button.attributes("disabled", "disabled")

    let letterArray = answerText.innerText.split("");
    let guesses = [];

    if (letterArray.includes(button.textContent)) {
      guessesLeft -= 1;
      guessesDiv.innerHTML = `Lives: <br> ${guessesLeft}`;
    }

    for (let i = 0; i < letterArray.length; i++) {
      // let guesses: string[] = [];

      if (button.textContent == letterArray[i]) {
        guesses.push(letterArray[i]);
        // console.log(guesses); //['m']

        // console.log(letterArray[i]);
      } else if (
        button.textContent != letterArray[i] &&
        guesses[i] == letterArray[i]
      ) {
        guesses.push(letterArray[i]);
        // guesses[i] == letterArray[i];
      } else {
        guesses.push("__  ");
      }
      console.log(guesses); // ['m', '__  ', '__  ', '__  ', '__  ', '__  ']
      console.log(letterArray); // ['m', 'a', 'd', 'r', 'i', 'd']
    }

    // console.log(guesses); // ['m', '__  ', '__  ', '__  ', '__  ', '__  ']
    // console.log(letterArray); // ['m', '__  ', '__  ', '__  ', '__  ', '__  ']

    wordDisplay.innerText = guesses.join("");
  });
});

categoryMenu.addEventListener("change", () => {
  guessesLeft = 10;
  guessesDiv.innerHTML = `Lives: <br> ${guessesLeft}`;
  clueDiv.innerHTML = `Clue:`;
});

// alphabetButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     if(letter)
//   });
// });
// var HangmanArt = require("hangman-cli-art");

// var art = new HangmanArt({
//   marginX: 5,
//   marginY: 5,
// });

// var chance = 0;
// var timer = setInterval(function () {
//   if (chance < 10) {
//     art.next();
//     chance++;
//   } else {
//     clearInterval(timer);
//   }
// }, 1000);
