/*  loader js*/

$(document).on("ready",function(){
    $(window).on('load', function(){
        $('#pageloader-overlay').fadeOut(4500);
    });
});


/* hamburger nav js*/

const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());


/*slogan*/

const elts = {
  text1: document.getElementById("text1"),
  text2: document.getElementById("text2")
};

const texts = [
  "Descubrí",
  "Nuevos",
  "Vinos.",
];

const morphTime = 1;
const cooldownTime = 0.60;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
  morph -= cooldown;
  cooldown = 0;

  let fraction = morph / morphTime;

  if (fraction > 1) {
      cooldown = cooldownTime;
      fraction = 1;
  }

  setMorph(fraction);
}

function setMorph(fraction) {
  elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  fraction = 1 - fraction;
  elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  elts.text1.textContent = texts[textIndex % texts.length];
  elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
  morph = 0;

  elts.text2.style.filter = "";
  elts.text2.style.opacity = "100%";

  elts.text1.style.filter = "";
  elts.text1.style.opacity = "0%";
}

function animate() {
  requestAnimationFrame(animate);

  let newTime = new Date();
  let shouldIncrementIndex = cooldown > 0;
  let dt = (newTime - time) / 1000;
  time = newTime;

  cooldown -= dt;

  if (cooldown <= 0) {
      if (shouldIncrementIndex) {
          textIndex++;
      }

      doMorph();
  } else {
      doCooldown();
  }
}

animate();


/* slider1*/

const images = document.querySelectorAll(".slide"),
  next = document.querySelector(".next"),
  prev = document.querySelector(".prev");

let current = 0;

function changeImage() {
  images.forEach(img => {
    img.classList.remove("show");
    img.style.display = "none";
  });

  images[current].classList.add("show");
  images[current].style.display = "block";
}

// Calling first time
changeImage();

next.addEventListener("click", function() {
  current++;

  if (current > images.length - 1) {
    current = 0;
  } else if (current < 0) {
    current = images.length - 1;
  }

  changeImage();
});
prev.addEventListener("click", function() {
  current--;

  if (current > images.length - 1) {
    current = 0;
  } else if (current < 0) {
    current = images.length - 1;
  }

  changeImage();
});

// Auto change in 5 seconds, out of design at moment

//setInterval(() => {
//next.click();
//}, 6000);


/* slider2*/

const images2 = document.querySelectorAll(".slide2"),
  next2 = document.querySelector(".next2"),
  prev2 = document.querySelector(".prev2");

let current2 = 0;

function changeImage2() {
  images2.forEach(img => {
    img.classList.remove("show");
    img.style.display = "none";
  });

  images2[current2].classList.add("show");
  images2[current2].style.display = "block";
}

// Calling first time
changeImage2();

next2.addEventListener("click", function() {
  current2++;

  if (current2 > images2.length - 1) {
    current2 = 0;
  } else if (current2 < 0) {
    current2 = images2.length - 1;
  }

  changeImage2();
});
prev2.addEventListener("click", function() {
  current2--;

  if (current2 > images2.length - 1) {
    current2 = 0;
  } else if (current2 < 0) {
    current2 = images2.length - 1;
  }

  changeImage2();
});

// Auto change in 5 seconds

//setInterval(() => {
//next2.click();
//}, 6000);


/* slider3*/

const images3 = document.querySelectorAll(".slide3"),
  next3 = document.querySelector(".next3"),
  prev3 = document.querySelector(".prev3");

let current3 = 0;

function changeImage3() {
  images3.forEach(img => {
    img.classList.remove("show");
    img.style.display = "none";
  });

  images3[current3].classList.add("show");
  images3[current3].style.display = "block";
}

// Calling first time
changeImage3();

next3.addEventListener("click", function() {
  current3++;

  if (current3 > images3.length - 1) {
    current3 = 0;
  } else if (current3 < 0) {
    current3 = images3.length - 1;
  }

  changeImage3();
});
prev3.addEventListener("click", function() {
  current3--;

  if (current3 > images3.length - 1) {
    current3 = 0;
  } else if (current3 < 0) {
    current3 = images3.length - 1;
  }

  changeImage3();
});

// Auto change in 5 seconds

//setInterval(() => {
//next2.click();
//}, 6000);