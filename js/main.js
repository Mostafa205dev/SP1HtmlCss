
let otherlinks = document.querySelector(".header .main-nav .otherlinks");
let lastli = document.querySelector(".header .main-nav li:last-child");

otherlinks.onclick = function () {
  let existingMenu = lastli.querySelector(".megamenu");

  if (existingMenu) {
    existingMenu.classList.toggle("active");
  } else {
    let megamenu = `
      <div class="megamenu active">
        <div class="image">
          <img src="imgs/megamenu.png" />
        </div>
        <ul class="links">
          <li><a href="#testimonials"><i class="far fa-comments fa-fw"></i> Testimonials</a></li>
          <li><a href="#team"><i class="far fa-user fa-fw"></i> Team Members</a></li>
          <li><a href="#services"><i class="far fa-building fa-fw"></i> Services</a></li>
          <li><a href="#our-skills"><i class="far fa-check-circle fa-fw"></i> Our Skills</a></li>
          <li><a href="#work-steps"><i class="far fa-clipboard fa-fw"></i> How It Works</a></li>
        </ul>
        <ul class="links">
          <li><a href="#events"><i class="far fa-calendar-alt fa-fw"></i> Events</a></li>
          <li><a href="#pricing"><i class="fas fa-server fa-fw"></i> Pricing Plans</a></li>
          <li><a href="#video"><i class="far fa-play-circle fa-fw"></i> Top Videos</a></li>
          <li><a href="#stats"><i class="far fa-chart-bar fa-fw"></i> Stats</a></li>
          <li><a href="#discount"><i class="fas fa-percent fa-fw"></i> Req A Discount</a></li>
        </ul>
      </div>
    `;
    lastli.insertAdjacentHTML("beforeend", megamenu);
  }
};
// Close the megamenu when clicking anywhere outside
document.addEventListener("click", function (event) {
  // Check if the click is outside the megamenu and other links
  let megamenu = document.querySelector(".megamenu");
  if (megamenu && !megamenu.contains(event.target) && !otherlinks.contains(event.target)) {
    megamenu.classList.remove("active"); // Hide the megamenu
  }
});



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
scrollup.onclick = function (){
  window.scrollTo(0,0);
}

window.onscroll = function () {
  if (scrollup) {
    if (window.scrollY >= 500) {
      scrollup.style.display = 'block';
    } else {
      scrollup.style.display = 'none';
    }
  }
  
  // Stats Increase Number
  if (window.scrollY >= statsSection.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};


function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}





