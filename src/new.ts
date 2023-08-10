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
const clueButton = document.querySelector(".clue-button") as HTMLButtonElement;
const clueDiv = document.querySelector(".clue") as HTMLDivElement;

if (
  !answerDisplay ||
  !categoryMenu ||
  !difficultyMenu ||
  !alphabetButtons ||
  !chosenCategory ||
  !clueButton ||
  !clueDiv
) {
  throw new Error("Issue with QS");
}

let allWords: string[] = [];
let allClues: string[] = [];

wordArray.forEach((word) => {
  allWords.push(word.name);
  allClues.push(word.clue);
});
console.log(allWords);
console.log(allClues);

// -----------------------------------------------------

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

  //   if (word.name == mysteryWord) {
  //     clueButton.addEventListener("click", () => {
  //       clueDiv.innerHTML = `Clue: ${word.clue}`;
  //     });
  //   }
};

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

let guess = alphabetButtons.innerText;

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

// HTML with 2 menus

<header>
  <nav>
    <h1>Guess the Word</h1>
    <button class="clue-button">
      <img src="./images/lightbulb-nb.png" alt="lightbulb" />
    </button>
  </nav>
  <p>Welcome to Guess the Word!</p>
  <p>Choose your category using the dropdown menu below.</p>
  <div class="menus">
    <div class="menus__category">
      <label for="category">Category:</label>
      <select name="category" id="category-menu">
        <option value="">Category</option>
        <option value="Animals">Animals</option>
        <option value="Cities">Cities</option>
        <option value="Food">Food</option>
        <option value="Movies">Movies</option>
        <option value="Random">Random</option>
      </select>
    </div>
    <div class="menus__difficulty">
      <label for="difficulty">Difficulty:</label>
      <select name="difficulty" id="difficulty-menu">
        <option value="">Difficulty</option>
        <option value="easy">Easy</option>
        <option value="regular">Regular</option>
        <option value="beast-mode">BEAST MODE</option>
      </select>
    </div>
  </div>
</header>;

// Close to correct

const checkGuesses = (letterArray: string[], letter: any) => {
  // guesses = [];
  for (let i = 0; i < letterArray.length; i++) {
    // let guesses: string[] = [];
    console.log(guesses);
    console.log(letter);
    console.log(letterArray);

    // Check if:
    // -- button = correct letter

    if (letter == letterArray[i]) {
      guesses.splice(i, 1, letterArray[i]);
      // guesses.push(letterArray[i]);
      console.log("first if"); //['m']
    } else if (letter != letterArray[i] && guesses[i] == letterArray[i]) {
      return;
      // guesses.push(letterArray[i]);
      console.log("if else"); //['m']
    } else if (letterArray[i] == guesses[i]) {
      return;
    } else {
      guesses.splice(i, 1, "__  ");
      console.log("else"); //['m']

      // guesses.push("__  ");
    }
    // console.log(guesses); // ['m', '__  ', '__  ', '__  ', '__  ', '__  ']
    // console.log(letterArray); // ['m', 'a', 'd', 'r', 'i', 'd']
  }
  // wordDisplay.innerText = guesses.join("");
};
