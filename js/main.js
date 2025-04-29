
// latest events date
let datenow = new Date();
let birthday = new Date("Apr 29,25");
let diff = datenow - birthday;

const dayss = document.querySelector(".events .time .days");
const hourss = document.querySelector(".events .time .hours");
const Minutess = document.querySelector(".events .time .minutes");
const Secondss = document.querySelector(".events .time .seconds");

dayss.innerHTML =   `${ Math.floor(diff /1000 /60 /60 /24)}`;
hourss.innerHTML =  `${ Math.floor(diff /1000 /60 /60)    }`;
Minutess.innerHTML =`${ Math.floor(diff /1000 /60)        }`;
Secondss.innerHTML =`${ Math.floor(diff /1000)            }`;



/*
 ** Animate Width On Scrolling
 ** Video URL: https://youtu.be/sbIoIKI9FOc
 */

/*
 ** Increase Numbers On Scrolling
 ** Video URL: https://youtu.be/PLsUdgLnzgQ
 */

let progressSpans = document.querySelectorAll(".the-progress span");
let section = document.querySelector(".our-skills");

let nums = document.querySelectorAll(".stats .number");
let statsSection = document.querySelector(".stats");
let started = false; // Function Started ? No

let scrollup = document.getElementById("button");
let scrolldown = document.getElementById("scrolldown");
scrolldown.onclick = function(){
  window.scrollTo(0,100000);
  
}
window.onscroll = function () {
  if (scrollup) {
    if (window.scrollY >= 500) {
      scrollup.style.display = 'block';
    } else {
      scrollup.style.display = 'none';
    }
  }
  
  // Skills Animate Width
  if (window.scrollY >= section.offsetTop - 250) {
    progressSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
  // Stats Increase Number
  if (window.scrollY >= statsSection.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};
scrollup.onclick = function (){
  window.scrollTo(0,0);
}

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}





