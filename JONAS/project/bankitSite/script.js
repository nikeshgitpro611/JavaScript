// Window Modals

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

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

document.querySelector('.nav').addEventListener('click', (e) => {
  let test = e.target.classList.contains('nav__link');
  console.log('test : ', test);
  if(test) {
    e.preventDefault();
    const id = e.target.getAttribute("href");
    console.log('id : ', id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
})

const h1 = document.querySelector('h1');
h1.firstElementChild.style.color = 'red';
h1.lastElementChild.style.color = 'yellow';
console.log('h1 : ', h1.children);
