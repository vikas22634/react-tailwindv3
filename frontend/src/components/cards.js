import beggar from "./images/Beggar.png";
import plantTree from "./images/PlantTree.png";
import waterWaste from "./images/waterWaste.png";
const cards = [
  {
    id: 1,
    imgURL: beggar,
    name: "Food donate",
    description:
      "Plant a tree, so that the next generation can get air for free.",
    steps: "Take a step",
    Link: "/cardsDetails",
  },
  {
    id: 2,
    imgURL: plantTree,
    name: "plant a Tree",
    description:
      "Plant a tree, so that the next generation can get air for free.",
    steps: "Take a step",
    Link: "/RegistrationForm",
  },
  {
    id: 3,
    name: "Make a Voluteer",
    imgURL: waterWaste,
    description:
      "Plant a tree, so that the next generation can get air for free.",
    steps: "Take a step",
    Link: "/RegistrationForm",
    // <FontAwesomeIcon icon="fa-regular fa-arrow-right" />
  },
];

export default cards;
