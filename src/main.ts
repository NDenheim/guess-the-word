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

if (!answerDisplay || !categoryMenu || !difficultyMenu || !alphabetButtons) {
  throw new Error("Issue with QS");
}

// const easyCities = [
//   "london",
//   "paris",
//   "madrid",
//   "sydney",
//   "amsterdam",
//   "tokyo",
// ];

if (categoryMenu.innerText == "Cities" && difficultyMenu.innerText == "Easy") {
  const words = easyCities;
  console.log(words);
}
// const regularCities = [
//   "prague",
//   "venice",
//   "vienna",
//   "istanbul",
//   "bangkok",
//   "milan",
// ];
// const hardCities = [];

const handleMenuSelect = () => {};
