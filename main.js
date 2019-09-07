import {
  aboutPage,
  aboutEN,
  aboutNL,
  langSelect,
  projectsPage,
  contactPage
} from "./pages.js";

const main = document.getElementById("main");
const about = document.getElementById("about");
const projects = document.getElementById("projects");
const contact = document.getElementById("contact");

let activePage = "projects";

let dutch = true;

const aboutPageClick = () => {
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }
  let el = document.createElement("div");

  dutch
    ? (el.innerHTML = langSelect + aboutNL + aboutPage)
    : (el.innerHTML = langSelect + aboutEN + aboutPage);

  main.appendChild(el);

  const ned = document.getElementById("ned");
  ned.addEventListener("click", function() {
    dutch = true;
    aboutPageClick();
  });

  const eng = document.getElementById("eng");
  eng.addEventListener("click", function() {
    dutch = false;
    aboutPageClick();
  });

  dutch ? (ned.style.color = "#fff") : (eng.style.color = "#fff");

  activePage = "about";
  about.style.color = "#fff";
  projects.style.color = "darkslategray";
  contact.style.color = "darkslategray";

  ned.addEventListener("click", function() {
    dutch = true;
    aboutPageClick();
  });

  eng.addEventListener("click", function() {
    dutch = false;
    aboutPageClick();
  });

  document.body.scrollTop = document.documentElement.scrollTop = 0;
};

const projectsPageClick = () => {
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }
  let el = document.createElement("div");
  el.innerHTML = projectsPage;
  main.appendChild(el);

  activePage = "projects";
  about.style.color = "darkslategray";
  projects.style.color = "#fff";
  contact.style.color = "darkslategray";

  document.body.scrollTop = document.documentElement.scrollTop = 0;
};

const contactPageClick = () => {
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }
  let el = document.createElement("div");
  el.innerHTML = contactPage;
  main.appendChild(el);

  activePage = "contact";
  about.style.color = "darkslategray";
  projects.style.color = "darkslategray";
  contact.style.color = "#fff";
};

about.addEventListener("click", aboutPageClick);
projects.addEventListener("click", projectsPageClick);
contact.addEventListener("click", contactPageClick);

about.onmouseover = function() {
  this.style.color = "#fff";
};

about.onmouseout = function() {
  activePage == "about" ? null : (this.style.color = "darkslategray");
};

projects.onmouseover = function() {
  this.style.color = "#fff";
};

projects.onmouseout = function() {
  activePage == "projects" ? null : (this.style.color = "darkslategray");
};

contact.onmouseover = function() {
  this.style.color = "#fff";
};

contact.onmouseout = function() {
  activePage == "contact" ? null : (this.style.color = "darkslategray");
};

projectsPageClick();
