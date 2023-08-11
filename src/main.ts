import "./style.scss";
import { Word, wordArray } from "./types/Words";

const wordDisplay = document.querySelector(".mystery-word") as HTMLDivElement;
const categoryMenu = document.querySelector(
  "#category-menu"
) as HTMLSelectElement;

const alphabetButtons = document.querySelectorAll(".letters__button") as any;
const chosenCategory = document.querySelector(
  ".chosen-category"
) as HTMLParagraphElement;
const clueButton = document.querySelector(".clue-button") as HTMLButtonElement;
const clueDiv = document.querySelector(".clue") as HTMLDivElement;
const answerText = document.querySelector(
  ".answer__text"
) as HTMLParagraphElement;
const guessesDiv = document.querySelector("#guesses-left") as HTMLSpanElement;
const answerButton = document.querySelector(".answer__button");
const hangmanDiv = document.querySelector("#letters-used");
const againButton = document.querySelector(
  ".again__button"
) as HTMLButtonElement;

if (
  !wordDisplay ||
  !categoryMenu ||
  !alphabetButtons ||
  !chosenCategory ||
  !clueButton ||
  !clueDiv ||
  !answerText ||
  !guessesDiv ||
  !answerButton ||
  !hangmanDiv ||
  !againButton
) {
  throw new Error("Issue with QS");
}

const animalWords = wordArray.filter((word: Word) => {
  return word.category.includes("Animals");
});

const cityWords = wordArray.filter((word: Word) => {
  return word.category.includes("Cities");
});

const foodWords = wordArray.filter((word: Word) => {
  return word.category.includes("Food");
});

const movieWords = wordArray.filter((word: Word) => {
  return word.category.includes("Movies");
});

alphabetButtons.forEach((button: any) => {
  button.disabled = true;
  button.style.color = "lightblue";
});

let mysteryWord: string = "";
answerText.innerText = "answer";

const generateAnswer = () => {
  chosenCategory.innerHTML = `Your chosen category is: ${categoryMenu.value}`;

  if (categoryMenu.value == "Animals") {
    const animalName =
      animalWords[Math.floor(Math.random() * animalWords.length)].name;
    wordDisplay.innerText = animalName.replace(/[a-z]/g, "__  ");
    mysteryWord = animalName;
  } else if (categoryMenu.value == "Cities") {
    const cityName =
      cityWords[Math.floor(Math.random() * cityWords.length)].name;
    wordDisplay.innerText = cityName
      .replace(/[ ]/g, "/")
      .replace(/[a-z]/g, "__  ");
    mysteryWord = cityName;
  } else if (categoryMenu.value == "Food") {
    const foodName =
      foodWords[Math.floor(Math.random() * foodWords.length)].name;
    wordDisplay.innerText = foodName.replace(/[a-z]/g, "__  ");
    mysteryWord = foodName;
  } else if (categoryMenu.value == "Movies") {
    const movieName =
      movieWords[Math.floor(Math.random() * movieWords.length)].name;
    wordDisplay.innerText = movieName.replace(/[a-z]/g, "__  ");
    mysteryWord = movieName;
  } else if (categoryMenu.value == "Random") {
    const Name = wordArray[Math.floor(Math.random() * wordArray.length)].name;
    wordDisplay.innerText = Name.replace(/[a-z]/g, "__  ");
    mysteryWord = Name;
  }
  answerText.innerText = mysteryWord;
};

const handleClueButtonPress = () => {
  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i].name == answerText.innerText) {
      clueDiv.innerHTML = `Clue: ${wordArray[i].clue}`;
    }
  }
};

const handleAnswerButtonPress = () => {
  alert("Bit embarrassing but okay...");
  answerText.style.color = "black";
  alphabetButtons.forEach((button: any) => {
    button.disabled = true;
    button.style.color = "lightblue";
  });
};

categoryMenu.addEventListener("change", generateAnswer);
clueButton.addEventListener("click", handleClueButtonPress);
answerButton.addEventListener("click", handleAnswerButtonPress);

let guessesLeft = 10;

let guesses: string[] = [];
let letterArray = answerText.innerText.split("");
guesses = letterArray.map((letter) => {
  return (letter = "");
  console.log(letter);
});

alphabetButtons.forEach((button: any) => {
  button.addEventListener("click", () => {
    guessesLeft -= 1;
    guessesDiv.innerHTML = `Guesses: <br> ${guessesLeft}`;

    if (guessesLeft >= 4) {
      guessesDiv.style.color = "black";
    } else if (guessesLeft < 4) {
      guessesDiv.style.color = "red";
    }

    if (guessesLeft == 0) {
      alert("You lost...this is awkward. Press 'Play Again'.");
    }

    let letterArray = answerText.innerText.split("");
    checkGuesses(letterArray, button.textContent);

    wordDisplay.innerText = guesses.join("");

    if (wordDisplay.innerText == answerText.innerText) {
      alert(
        "Winner winner, chicken dinner. To play again, click the button at the bottom of the screen."
      );
    }
  });
});

const checkGuesses = (letterArray: string[], letter: any) => {
  for (let i = 0; i < letterArray.length; i++) {
    if (letter == letterArray[i]) {
      guesses.splice(i, 1, letterArray[i]);
    } else if (letter != letterArray[i] && guesses[i] == letterArray[i]) {
      guesses.splice(i, 1, letterArray[i]);
    } else if (letterArray[i] == guesses[i]) {
      return;
    } else {
      guesses.splice(i, 1, "__  ");
    }
  }
  return guesses;
};

let lettersUsedArray: string[] = [];

alphabetButtons.forEach((button: any) => {
  button.addEventListener("click", () => {
    lettersUsedArray.push(button.textContent);
    let lettersUsed = lettersUsedArray.join(" ");
    hangmanDiv.innerHTML = `Letters used: <br> ${lettersUsed}`;

    button.disabled = true;
    button.style.color = "lightblue";
  });
});

categoryMenu.addEventListener("change", () => {
  guessesLeft = 10;
  guessesDiv.innerHTML = `Guesses: <br> ${guessesLeft}`;
  clueDiv.innerHTML = `Clue:`;
  guessesDiv.style.color = "black";
  answerText.style.color = "transparent";
  lettersUsedArray = [];
  let lettersUsed = lettersUsedArray.join(" ");
  hangmanDiv.innerHTML = `Letters used: <br> ${lettersUsed}`;

  alphabetButtons.forEach((button: any) => {
    button.disabled = false;
    button.style.color = "black";
  });
});

againButton.addEventListener("click", () => {
  window.location.reload();
});
