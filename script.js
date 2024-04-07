//menu
const button = document.getElementById("menu-toggle");

const toggle = () => {
  document.body.classList.toggle("menu-toggled");
  document.getElementById("menu-toggle").classList.toggle("dark");
};

const menuButtons = document.querySelectorAll(".link");

menuButtons.forEach((button) => {
  button.addEventListener("click", function () {
    toggle();
  });
});

button.onclick = () => toggle();

//gsap
let tl = gsap.timeline({});
tl.from("#hero", {
  scale: 1.2,
});
gsap.from("#heroTitle", {
  rotate: 6,
});

//smooth scroll
const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const keyboardCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "`",
  "~",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "=",
  "+",
  "[",
  "{",
  "]",
  "}",
  "\\",
  "|",
  ";",
  ":",
  "'",
  '"',
  ",",
  "<",
  ".",
  ">",
  "/",
  "?",
];

function getRandomCharacter() {
  const randomIndex = Math.floor(Math.random() * keyboardCharacters.length);
  return keyboardCharacters[randomIndex];
}

function scrambleLetters() {
  const scrambledElements = document.querySelectorAll("#scrambled");
  scrambledElements.forEach((scrambledElement) => {
    let scrambledText = "";
    for (let i = 0; i < 5; i++) {
      scrambledText += getRandomCharacter();
    }
    scrambledElement.textContent = scrambledText;
  });
}

setInterval(scrambleLetters, 50);

const trailer = document.getElementById("trailer");
const originalWidth = trailer.offsetWidth;
const originalHeight = trailer.offsetHeight;

const animateTrailer = (e, interacting) => {
  const x = e.clientX - trailer.offsetWidth / 2,
    y = e.clientY - trailer.offsetHeight / 2;

  const keyframes = {
    transform: `translate(${x}px , ${y}px)`,
  };

  trailer.animate(keyframes, {
    duration: 100,
    fill: "forwards",
  });
};

window.onmousemove = (e) => {
  let interacting = false;

  // Check if the mouse is over any button
  const buttons = document.querySelectorAll("button");
  const links = document.querySelectorAll("a");
  buttons.forEach((button) => {
    if (button.matches(":hover")) {
      interacting = true;
      trailer.style.width = button.offsetWidth + 20 + "px";
      trailer.style.height = button.offsetHeight + 20 + "px";
      trailer.style.background = "none";
      trailer.style.boxShadow = "none";
      trailer.style.border = "2px solid rgba(255,255,255, 0.3";
    }
  });

  links.forEach((a) => {
    if (a.matches(":hover")) {
      interacting = true;
      trailer.style.width = a.offsetWidth + 200 + "px";
      trailer.style.height = a.offsetHeight + 200 + "px";
      trailer.style.background = "none";
      trailer.style.boxShadow = "none";
      trailer.style.border = "2px solid rgba(255,255,255, 0.3";
    }
  });

  animateTrailer(e, interacting);

  // Reset trailer's size if not interacting with any button
  if (!interacting) {
    trailer.style.width = originalWidth + "px";
    trailer.style.height = originalHeight + "px";
    trailer.style.background = "rgba(165, 165, 165, 0.687)";
    trailer.style.boxShadow = "0px 8px 71px 0px rgba(165, 165, 165, 0.687)";
    trailer.style.border = "none";
  }
};

let index = 0,
    interval = 1000;

const rand = (min, max) => 
  Math.floor(Math.random() * (max - min + 1)) + min;

const animate = star => {
  star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
  star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

  star.style.animation = "none";
  star.offsetHeight;
  star.style.animation = "";
}

let timeouts = [],
    intervals = [];

const magic = document.querySelector(".magic");

magic.onmouseenter = () => {
  let index = 1;
  
  for(const star of document.getElementsByClassName("magic-star")) {
    timeouts.push(setTimeout(() => {  
      animate(star);
      
      intervals.push(setInterval(() => animate(star), 1000));
    }, index++ * 300));
  };
}

magic.onmouseleave = onMouseLeave = () => {
  for(const t of timeouts) clearTimeout(t);  
  for(const i of intervals) clearInterval(i);
  
  timeouts = [];
  intervals = [];
}