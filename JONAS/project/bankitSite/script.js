// Window Modals

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");
const navLinks = document.querySelectorAll(".nav__link");
const nav = document.querySelector(".nav");
const section1 = document.querySelector("#section--1");
const header = document.querySelector("header");
const allSections = document.querySelectorAll(".section");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (const element of btnsOpenModal) {
  element.addEventListener("click", openModal);
  btnCloseModal.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);

  //keydown event
  document.addEventListener("keydown", (e) => {
    e.key === "Escape" && !modal.classList.contains("hidden") && closeModal();
  });
}

// document.querySelectorAll(".nav__link").forEach((el) =>
//   el.addEventListener("click", (e) => {
//     e.preventDefault();
//     const id = e.target.getAttribute("href");
//     console.log("id", id);

//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   })
// );

document.querySelector(".nav").addEventListener("click", (e) => {
  let test = e.target.classList.contains("nav__link");
  console.log("test : ", test);
  if (test) {
    e.preventDefault();
    const id = e.target.getAttribute("href");
    console.log("id : ", id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

const h1 = document.querySelector("h1");
h1.firstElementChild.style.color = "red";
h1.lastElementChild.style.color = "black";
h1.closest("header").style.backgroundColor = "var(--color-secondary-opacity)";

tabsContainer.addEventListener("click", (e) => {
  const clicked = e.target.closest(".operations__tab");

  if (!clicked) return;
  tabs.forEach((tab) => tab.classList.remove("operations__tab--active"));
  tabsContent.forEach((tab) =>
    tab.classList.remove("operations__content--active")
  );
  clicked.classList.add("operations__tab--active");

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

//Link fed animation

const refactoredLink = (e, opacity) => {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");
    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = opacity;
    });
    logo.style.opacity = opacity;
  }
};

nav.addEventListener("mouseover", (e) => refactoredLink(e, 0.5));

nav.addEventListener("mouseout", (e) => refactoredLink(e, 1));

//Sticky navigation
// const initialCoords = section1.getBoundingClientRect();
// console.log("initialCoords : ", initialCoords);
// window.addEventListener("scroll", (e) => {
//   console.log("window.scrollY : ", window.scrollY);
//   if (window.scrollY > initialCoords.top) nav.classList.add("sticky");
//   else nav.classList.remove("sticky");
// });

//Sticky navigation with Intersection Observer API

const stickyNav = (entries) => {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};
const option = {
  root: null,
  threshold: 0,
  rootMargin: "-80px",
};
const observer = new IntersectionObserver(stickyNav, option);
observer.observe(header);

const hiddenSection = (entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.remove("section--hidden");
    observer.unobserve(entry.target);
  });
};
const sectionObserver = new IntersectionObserver(hiddenSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

//lazy - loading
const imgTargets = document.querySelectorAll("img[data-src]");
console.log("imgTargets : ", imgTargets);

const loadImg = (entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.src = entry.target.dataset.src;
    entry.target.addEventListener("load", () => {
      entry.target.classList.remove("lazy-img");
    });
    observer.unobserve(entry.target);
  });
};

const omgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin:"200px"
});

imgTargets.forEach((img) => omgObserver.observe(img));

//slider

const slider = document.querySelector(".slider");

slider.addEventListener("click", (e) => {

  e.target.classList.contains("btn--slide-left") 
    slider.scrollLeft -= slider.offsetWidth;
  e.target.classList.contains("btn--slide-right") 
    slider.scrollLeft += slider.offsetWidth;
});


