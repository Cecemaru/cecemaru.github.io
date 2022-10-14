// show menu
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("nav-toggle", "navMenu");

// remove menu
const navLink = document.querySelectorAll(".nav-link");
function linkAction() {
  const navMenu = document.getElementById("navMenu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// active link nav menu
/*
const sections = document.querySelectorAll("section[id]")
function scrollActive(){
    const scrollY = window.pageYOffset
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute("id");
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.add("active-link")
            }else{
            document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.remove("active-link")
            }
        }
    })
}*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);
// show scroll top
function scrollTop() {
  const scrollTop = document.getElementById("scroll-top");
  if (this.scrollY >= 200) {
    scrollTop.classList.add("show-scroll");
  } else {
    scrollTop.classList.remove("show-scroll");
  }
}
window.addEventListener("scroll", scrollTop);
// dark light theme

// a4 sheet dowenload button
function scaleCv() {
  document.body.classList.add("scale-cv");
}
function removeScale() {
  document.body.classList.remove("scale-cv");
}
// generate pdf
let areaCv = document.getElementById("area-cv");
let resumeButton = document.getElementById("resume-button");
// html2pdf options
let opt = {
  margin: 0,
  filename: "cece.pdf",
  image: { type: "jpg", quality: 0.98 },
  html2canvas: { scale: 4 },
  jsPDF: { unit: "in", format: "A4", orientation: "portrait" },
};
// function to call area options
function generateResume() {
  hmtl2pdf(areaCv, opt);
}
// button clicked
resumeButton.addEventListener("click", () => {
  scaleCv();
  setTimeout(removeScale, 5000);
});
