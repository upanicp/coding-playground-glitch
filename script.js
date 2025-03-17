//make comments like this in the script.js file
//by adding two slashes at the start of lines of code you can 'comment out' the code
//it's helpful to write comments to keep track of what each line of code does

//a function to select random item from a list (do not edit)
const buttonEmail = document.getElementById("poem");
function getRandomFromList(list) {
  return list[Math.floor(Math.random() * list.length)];
}
var i = 0;
var speed = 50;

//function for network error message
const sent1 = [
  "Try again.",
  "Don't count it.",
  "Signs point to yes.",
  "Very doubtful.",
  "Reply hazy, try again.",
  "Outlook good.",
  "Outlook bad.",
  "Ask again later.",
  "Bad connection.",
];

const buttonRetry = document.getElementById("button-network");

function changeResultsError() {
  const paragraph = document.getElementById("networkError");
  paragraph.innerText = getRandomFromList(sent1);
}
buttonRetry.addEventListener("click", changeResultsError);
//end of network error function

//function dropdown menu (do not edit this first part)
function addEval(evalText) {
  const subjectContent = document.getElementById("subject-content");
  subjectContent.innerText = evalText;
}
//when selected in the dropdown menu, the x variables trigger the associated text. Edit the x variables (and make sure to also update them in the index.html file) and edit the associated text/emojis within the quotes
//think about what use you might have for a dropdown menu: you could have someone select their 'mood' and give them an appropriate song, a bit of good or bad advice, an emoji, etc.
function dropdownFunction() {
  var x = document.getElementById("subject").value;
  if (x === "2025") {
    addEval("This is your last opportunity to be young. Stop thinking about it, just be young.");
  } else if (x === "2020") {
    addEval("You have no idea what is waiting for you. There is nothing you can do to prepare. Sorry.");
  } else if (x === "2015") {
    addEval("You do not know it yet but this is the last year you have to feel true joy. You will spend most of it being miserable.");
  } else if (x === "2010") {
    addEval("You are just learning what the world really is. You will get used to it.");
  } else if (x === "2005") {
    addEval("You know nothing. This is the happiest you will ever be.");
  }
}
//end of dropdown function

//start of haiku function
//lists of variables: replace all of the 5 and 7 syllable constants in the two arrays below. The more constants you write, the more variety you will have in your poem
const fiveSyllables = [
  "grow into your clothes",
  "warmth blooms in your chest",
  "start floating away",
  "you ask, so I do",
  "you eat sunflowers",
  "i am so hungry",
  "you are not so small",
  "in old hand-me-downs",
  "you will always love",
];
const sevenSyllables = [
  "robbed of something you can't name",
  "i want to live in your ribs",
  "back aching, joints, become sore",
  "your heart is sliced wide open",
  "you meet a girl who loves you",
];
//code for haiku function (do not edit)
const buttonHaiku = document.getElementById("button-haiku");
function changeResults() {
  const paragraph = document.getElementById("haiku-1-1");
  const paragraphTwo = document.getElementById("haiku-1-2");
  const paragraphThree = document.getElementById("haiku-1-3");
  const paragraphFour = document.getElementById("haiku-2-1");
  const paragraphFive = document.getElementById("haiku-2-2");
  const paragraphSix = document.getElementById("haiku-2-3");
  const paragraphSeven = document.getElementById("haiku-3-1");
  const paragraphEight = document.getElementById("haiku-3-2");
  const paragraphNine = document.getElementById("haiku-3-3");
  paragraph.innerText = getRandomFromList(fiveSyllables);
  paragraphTwo.innerText = getRandomFromList(sevenSyllables);
  paragraphThree.innerText = getRandomFromList(fiveSyllables);
  paragraphFour.innerText = getRandomFromList(fiveSyllables);
  paragraphFive.innerText = getRandomFromList(sevenSyllables);
  paragraphSix.innerText = getRandomFromList(fiveSyllables);
  paragraphSeven.innerText = getRandomFromList(fiveSyllables);
  paragraphEight.innerText = getRandomFromList(sevenSyllables);
  paragraphNine.innerText = getRandomFromList(fiveSyllables);
}
buttonHaiku.addEventListener("click", changeResults);
//end of haiku function

//start of search function
const textWrapper = document.getElementById("text-wrapper");
const textInput = document.getElementById("text-input");
//search function constants
//play with Google search function to come up with search terms most relevant to you. Think about how these search terms tell a story. Replace all of the placeholder text below (phrases in red font) with search terms of your own. If you keep the phrases organised alphabetically, you can ensure you have enough results for each word.
const words = [
  "akira bike slide compilation",
  "amazon mounting tape",
  "australian f1 grand prix",

  "broken mirror how many years bad luck",
  "backstreet boys reunion",
  "bee sting treatment",

  "can dogs eat lemon",
  "cut on hand how to wrap",
  "curved shoulders exercises",

  "doa: dead or alive watch online full free",
  "dog ate lemon, what do",
  "dog throw up how to",
  "disney plus cost how much",

  "eevee pokemon go",
  "emilia perez reviews",
  "ebay mirrors",

  "full length mirror ikea",
  "facebook marketplace",
  "ferrari f1 hat",
  
  "golden razz pokemon go",
  "gemma severance reddit theories",
  "golden globes 2025",
  
  "how to use scotch mounting tape",
  "headaches remedies",
  "how to fall asleep easiser",
  
  "iftar time",
  "ice or heat bone or muscle injury",
  "imposter syndrome",
  
  "joint pain remedies",
  "journey planner ptv",
  "jack doohan dad",
  
  "kmart casey central hours",
  "kayo f1",
  "knee bone pop how to"
  
];
//search function (do not edit)
function changeText(e) {
  const searchWord = e.target.value.toLowerCase().trim();
  const resultWords = words.filter((word) =>
    word.toLowerCase().startsWith(searchWord)
  );
  // clear exist words
  while (textWrapper.firstChild) {
    textWrapper.removeChild(textWrapper.firstChild);
  }
  if (searchWord != "") {
    for (var i = 0; i < resultWords.length; i++) {
      const line = document.createElement("div");
      line.innerHTML = resultWords[i];
      textWrapper.appendChild(line);
    }

    if (resultWords.length === 0) {
      const line = document.createElement("div");
      line.innerHTML = "no results";
      textWrapper.appendChild(line);
    }
  }
}
textInput.addEventListener("input", changeText);
// end search function code

//start of code for poem

const subjects =
    "girls, women, teachers, maids, nurses, wives, daughters, sisters, mothers".split(
      ","
    ),
  verbs =
    "labour, serve, toil, sweat, grind, create, build, operate, perform, achieve, produce, implement, cultivate, make, discover".split(
      ","
    ),
  objects =
    "houses, homes, food, life, lives, love, everything, people, children, men, boys, girls, eachother, everyone, society, humanity, sustenance, nourishment, vitality,community".split(
      ","
    );
// set up the counter
let counter = 0;

// a function to pull a random item from a list
function getRandomFromList2(list) {
  return list[Math.floor(Math.random() * list.length)];
}
// add a line to the poem constructed from the lists of words
function addLine(indent = false) {
  // create the line
  const line = document.createElement("div");
  if (indent === true) {
    // indent is true so add an indent class
    line.classList.add("indent");
  }
  const text =
    getRandomFromList2(subjects) +
    " " +
    getRandomFromList2(verbs) +
    " " +
    getRandomFromList2(objects);
  const lineText = document.createTextNode(text);
  line.appendChild(lineText);
  // get the poem
  const poem = document.getElementById("poem");
  poem.appendChild(line);
}
// add a blank line to the poem
function addBlankLine() {
  const line = document.createElement("div");
  const poem = document.getElementById("poem");
  poem.appendChild(line);
}
// remove the first line from the poem
function removeFirstLine() {
  const poem = document.getElementById("poem");
  poem.removeChild(poem.childNodes[0]);
}
// implement the rules of the poem
function processPoem() {
  counter++;
  if (counter % 5 === 0) {
    addBlankLine();
  } else if (counter % 5 === 2 || counter % 5 === 4) {
    // if the second or fourth line add the line with an indent
    addLine(true);
  } else {
    addLine();
  }
  if (counter > 15) {
    removeFirstLine();
  }
}
window.setInterval(processPoem, 1000);