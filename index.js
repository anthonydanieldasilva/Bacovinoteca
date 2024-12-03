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
const cooldownTime = 0.35;

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
  let dt = (newTime - time) / 895;
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

/*slider*/


var carousel = (function () {
  var startInterval,
    slide_container = $(".slider"),
    ul = $(".slider ul:first-child"),
    slide_count = ul.children().length,
    slide_width_pc = 100.0 / slide_count,
    slide_index = 0,
    first_slide = ul.find("li:first-child"),
    last_slide = ul.find("li:last-child"),
    slide_indicators = $(".slider ul.nav-dots"),
    slide_indicator = $(".slider ul.nav-dots li");
  // Clone the last slide and add as first li element
  last_slide.clone().prependTo(ul);

  // Clone the first slide and add as last li element
  first_slide.clone().appendTo(ul);

  ul.find("li").each(function (indx) {
    var left_percent = slide_width_pc * indx + "%";
    $(this).css({
      left: left_percent
    });
    $(this).css({
      width: 100 / slide_count + "%"
    });
  });

  ul.css("margin-left", "-100%");

  // Listen for click of prev button
  $(".slider .prev").click(function () {
    console.log("prev button clicked");
    slide(slide_index - 1);
  });

  // Listen for click of next button
  $(".slider .next").click(function () {
    console.log("next button clicked");
    slide(slide_index + 1);
  });

  //Listen for slide-indicator click event
  slide_indicator.click(function () {
    console.log("click slide indicator");
    slide($(this).data("index"));
  });

  function slide(new_slide_index) {
    var margin_left_pc = new_slide_index * -100 - 100 + "%";

    ul.animate(
      {
        "margin-left": margin_left_pc
      },
      400,
      function () {
        // If new slide is before first slide...
        if (new_slide_index < 0) {
          ul.css("margin-left", slide_count * -100 + "%");
          new_slide_index = slide_count - 1;
        }
        // If new slide is after last slide...
        else if (new_slide_index >= slide_count) {
          ul.css("margin-left", "-100%");
          new_slide_index = 0;
        }
        // move indicator with the new_slide_index
        slide_indicators.find(".active").removeClass("active");
        slide_indicator.eq(new_slide_index).addClass("active");
        slide_index = new_slide_index;
      }
    );
  }

  function init() {
    startInterval = window.setInterval(function () {
      slide(slide_index + 1);
    }, 2100);
  }

  function pauseSlider() {
    clearInterval(startInterval);
  }

  slide_container.on("mouseenter", pauseSlider).on("mouseleave", init);

  return {
    init: init
  };
})();

$(document).ready(function () {
  carousel.init();
});


/* final slider*/