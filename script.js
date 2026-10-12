const chapters = [
  {
    kicker: "YEAR ONE · OUR START",
    title: "Where a simple hello turned into us.",
    description:
      "The beginning: new college days, first conversations I probably don't know whether you will talk or not, I kept assuring you ki i always be good with you no matter what",
   
    image: "WhatsApp Image 2026-10-12 at 4.11.27 PM.jpeg",
    alt: "A photo from our first year of friendship.",
    caption: "Where it all began",
  },
  {
    kicker: "YEAR TWO · THE IN-BETWEEN",
    title: "Somewhere along the way, we just got it.",
    description:
      "More conversations, running jokes, little disagreements, and showing up for each other. Somewhere in the middle of ordinary days, we found a friendship that felt like home",
    
    image: "WhatsApp Image 2026-10-12 at 3.41.14 PM.jpeg",
    alt: "A photo from our second year of friendship.",
    caption: "Growing closer",
  },
  {
    kicker: "YEAR THREE · STILL US",
    title: "Three years in, and still glad we met.",
    description:
      "Countless talks, familiar laughs, and the comfort of knowing we can be ourselves. Three years later, and we’re still making memories together.",
   
    image: "WhatsApp Image 2026-10-12 at 3.41.20 PM.jpeg",
    alt: "A photo from our third year of friendship.",
    caption: "Still making memories",
  }
];

const quizQuestions = [
  {
    question: "Where did this friendship get its start?",
    options: ["College", "A road trip", "A shared pet", "A cooking class"],
    answer: 0,
    right: "Correct! College did one thing very, very right. ☺",
    wrong: "Not quite—but the real answer is a pretty good one: college."
  },
  {
    question: "What do our conversations have a habit of doing?",
    options: ["Ending after one minute", "Going on way longer than planned", "Staying strictly serious", "Turning into lectures"],
    answer: 1,
    right: "Exactly. “One quick thing” is never one quick thing. ✦",
    wrong: "We both know a quick chat can turn into a whole evening."
  },
  {
    question: "What kind of moments become the stories we keep retelling?",
    options: ["The perfectly planned ones", "The random, unplanned ones", "Only exam days", "The quietest meetings"],
    answer: 1,
    right: "You know us. The random ones always win. ☺",
    wrong: "It’s usually the random moments that turn into our favorite stories."
  },
  {
    question: "What’s one thing that makes our friendship feel like ours?",
    options: ["Being able to be ourselves", "A strict meeting agenda", "Never disagreeing", "Only talking about college"],
    answer: 0,
    right: "Yes. No need to pretend or perform—just us. ♡",
    wrong: "The best part is that we can just be ourselves."
  },
  {
    question: "After three years, what are we still doing?",
    options: ["Collecting more stories", "Running out of things to say", "Avoiding all jokes", "Keeping score of arguments"],
    answer: 0,
    right: "That’s the plan: more stories, more laughs, more us. ✿",
    wrong: "Still collecting stories—and there are plenty more to come."
  }
];

const appreciationNotes = [
  "Thank you for making room for the long conversations and the silly ones.",
  "I appreciate how easy it is to be myself around you.",
  "Thanks for being someone I can count on, in the little ways that matter.",
  "Some of my favorite college memories have you in them.",
  "I’m grateful for your honesty, your humor, and your very-you-ness.",
  "Three years later, I’m still really happy that we're friends.",
];

const welcome = document.getElementById("welcome");
const openWelcome = document.getElementById("openWelcome");
const chapterTabs = [...document.querySelectorAll(".chapter-tab")];
chapterTabs.forEach((tab, index) => {
  tab.tabIndex = index === 0 ? 0 : -1;
});
const chapterImage = document.getElementById("chapterImage");
const chapterPhotoCaption = document.getElementById("chapterPhotoCaption");
const chapterKicker = document.getElementById("chapterKicker");
const chapterTitle = document.getElementById("chapterTitle");
const chapterDescription = document.getElementById("chapterDescription");

const selectChapter = (index) => {
  chapterTabs.forEach((item, itemIndex) => {
    const selected = itemIndex === index;
    item.classList.toggle("selected", selected);
    item.setAttribute("aria-selected", String(selected));
    item.tabIndex = selected ? 0 : -1;
  });

  const chapter = chapters[index];
  chapterImage.src = chapter.image;
  chapterImage.alt = chapter.alt;
  chapterPhotoCaption.textContent = chapter.caption;
  chapterKicker.textContent = chapter.kicker;
  chapterTitle.textContent = chapter.title;
  chapterDescription.textContent = chapter.description;
};

const quizQuestion = document.getElementById("quizQuestion");
const quizOptions = document.getElementById("quizOptions");
const quizFeedback = document.getElementById("quizFeedback");
const quizStep = document.getElementById("quizStep");
const quizScore = document.getElementById("quizScore");
const quizProgress = document.getElementById("quizProgress");
const quizNext = document.getElementById("quizNext");
const quizRestart = document.getElementById("quizRestart");
const revealedNote = document.getElementById("revealedNote");
const noteCounter = document.getElementById("noteCounter");
const moodReveal = document.querySelector("#moodReveal p");
const letterEnvelope = document.getElementById("letterEnvelope");
const friendshipLetter = document.getElementById("friendshipLetter");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");

const releaseLetterSparks = () => {
  const gift = document.querySelector(".letter-gift");
  gift.classList.add("is-celebrating");

  for (let index = 0; index < 9; index += 1) {
    const spark = document.createElement("span");
    spark.className = "letter-spark";
    spark.style.setProperty("--spark-x", `${(Math.random() - 0.5) * 270}px`);
    spark.style.setProperty("--spark-y", `${-45 - Math.random() * 150}px`);
    spark.style.setProperty("--spark-delay", `${Math.random() * 180}ms`);
    gift.append(spark);
    window.setTimeout(() => spark.remove(), 1200);
  }

  window.setTimeout(() => gift.classList.remove("is-celebrating"), 900);
};

openWelcome.addEventListener("click", () => {
  welcome.classList.add("is-dismissed");
  document.getElementById("home").scrollIntoView({ behavior: "smooth" });
  document.querySelector(".site-header a").focus({ preventScroll: true });
});

chapterTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => selectChapter(index));
  tab.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const offset = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = (index + offset + chapterTabs.length) % chapterTabs.length;
    chapterTabs[nextIndex].focus();
    chapterTabs[nextIndex].click();
  });
});
selectChapter(0);

const memoryCards = document.querySelectorAll(".memory-card");
memoryCards.forEach((card) => {
  card.addEventListener("click", () => {
    const image = card.querySelector("img");
    lightboxImage.src = card.dataset.photo;
    lightboxImage.alt = image.alt;
    lightboxCaption.textContent = card.dataset.caption;
    lightbox.showModal();
  });
});

document.getElementById("closeLightbox").addEventListener("click", () => {
  lightbox.close();
});

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) lightbox.close();
});

let questionIndex = 0;
let correctAnswers = 0;
let hasAnswered = false;

const renderQuestion = () => {
  hasAnswered = false;
  const question = quizQuestions[questionIndex];
  quizStep.textContent = `QUESTION ${questionIndex + 1} OF ${quizQuestions.length}`;
  quizScore.textContent = `${correctAnswers} right`;
  quizProgress.style.width = `${(questionIndex / quizQuestions.length) * 100}%`;
  quizQuestion.textContent = question.question;
  quizFeedback.textContent = "";
  quizNext.hidden = true;
  quizRestart.hidden = true;
  quizOptions.replaceChildren();

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "quiz-option";
    button.type = "button";
    button.textContent = option;
    button.addEventListener("click", () => answerQuestion(index));
    quizOptions.append(button);
  });
};

const answerQuestion = (selectedIndex) => {
  if (hasAnswered) return;
  hasAnswered = true;

  const question = quizQuestions[questionIndex];
  const options = [...quizOptions.querySelectorAll(".quiz-option")];
  options.forEach((option, index) => {
    option.disabled = true;
    if (index === question.answer) option.classList.add("is-correct");
    if (index === selectedIndex && index !== question.answer) option.classList.add("is-wrong");
  });

  const correct = selectedIndex === question.answer;
  if (correct) correctAnswers += 1;
  quizScore.textContent = `${correctAnswers} right`;
  quizFeedback.textContent = correct ? question.right : question.wrong;

  if (questionIndex === quizQuestions.length - 1) {
    quizProgress.style.width = "100%";
    quizStep.textContent = "THAT’S A WRAP";
    quizQuestion.textContent = "Three years of friendship—and still plenty of stories left.";
    quizFeedback.textContent = `You got ${correctAnswers} out of ${quizQuestions.length}. Thanks for playing, bestie. ♡`;
    quizRestart.hidden = false;
  } else {
    quizNext.hidden = false;
  }
};

quizNext.addEventListener("click", () => {
  questionIndex += 1;
  renderQuestion();
});

quizRestart.addEventListener("click", () => {
  questionIndex = 0;
  correctAnswers = 0;
  renderQuestion();
});

renderQuestion();

let noteDeck = [];
let notesDrawn = 0;

const shuffleNotes = () => {
  noteDeck = appreciationNotes.map((_, index) => index);
  for (let index = noteDeck.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [noteDeck[index], noteDeck[randomIndex]] = [noteDeck[randomIndex], noteDeck[index]];
  }
};

shuffleNotes();

document.getElementById("pickNote").addEventListener("click", () => {
  if (noteDeck.length === 0) shuffleNotes();
  const noteIndex = noteDeck.pop();
  notesDrawn = (notesDrawn % appreciationNotes.length) + 1;
  noteCounter.textContent = `A NOTE FOR YOU · ${notesDrawn} / ${appreciationNotes.length}`;
  revealedNote.classList.remove("is-changing");
  void revealedNote.offsetWidth;
  revealedNote.textContent = appreciationNotes[noteIndex];
  revealedNote.classList.add("is-changing");
});

document.querySelectorAll(".mood-card").forEach((card) => {
  card.addEventListener("click", () => {
    document.querySelectorAll(".mood-card").forEach((item) => {
      item.classList.toggle("selected", item === card);
    });
    moodReveal.textContent = card.dataset.message;
  });
});

document.querySelectorAll(".gift-card").forEach((card) => {
  card.addEventListener("click", () => {
    const isExpanded = card.getAttribute("aria-expanded") === "true";
    card.setAttribute("aria-expanded", String(!isExpanded));
  });
});

letterEnvelope.addEventListener("click", () => {
  if (letterEnvelope.getAttribute("aria-expanded") === "true") return;

  letterEnvelope.setAttribute("aria-expanded", "true");
  letterEnvelope.setAttribute("aria-label", "Friendship letter opened");
  letterEnvelope.classList.add("is-opening");
  letterEnvelope.disabled = true;

  window.setTimeout(() => {
    letterEnvelope.classList.add("is-open");
  }, 560);

  releaseLetterSparks();

  window.setTimeout(() => {
    friendshipLetter.hidden = false;
    friendshipLetter.classList.add("is-visible");
  }, 1420);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox.open) lightbox.close();
});
