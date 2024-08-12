/*** ********************************** typing part *************************** */
var typed = new Typed(".typing", {
  strings: ["", "Front-End developer"],
  typeSpeed: 100,
  BackSpeed: 50,
  loop: true,
});

// ************************** nav part ***************************

const navgation = document.querySelector(".navgation"),
  navList = navgation.querySelectorAll("li"),
  totalNavList = navList.length,
  allsections = document.querySelectorAll(".section");
for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", (e) => {
    var target = e.target.href.split("#")[1];
    removeBackSection();

    for (let x = 0; x < totalNavList; x++) {
      if (
        navList[x].querySelector("a").classList.contains("active") &&
        allsections[x].id != target
      ) {
        addBackSection(x)
        
      }
      navList[x].querySelector("a").classList.remove("active");
    }
    a.classList.add("active");
    showSection(e);
    if (window.innerWidth < 1200) {
      asideSectionToggleBtn();
    }
  });
}
document.querySelector(".hire-me").addEventListener("click", function (e) {
  const sectionIndex = this.getAttribute("data-section-index");
 
  showSection(e);
  updateNav(e);
  removeBackSection();
  addBackSection(sectionIndex)
});
function addBackSection(num){
    allsections[num].classList.add("back-section");
}
function removeBackSection() {
  for (let i = 0; i < allsections.length; i++) {
    allsections[i].classList.remove("back-section");
  }
}
function showSection(element) {
  for (let i = 0; i < allsections.length; i++) {
    allsections[i].classList.remove("active");
  }
  var target = element.target.href.split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
  asideSectionToggleBtn();
});
function asideSectionToggleBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < allsections.length; i++) {
    allsections[i].classList.toggle("open");
  }
}
function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.target.href.split("#")[1];
    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}
