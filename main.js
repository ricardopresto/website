import {
  aboutPage,
  aboutEN,
  aboutNL,
  projectsPage,
  contactPage
} from "./pages.js";

const main = document.getElementById("main");
const about = document.getElementById("about");
const projects = document.getElementById("projects");
const contact = document.getElementById("contact");
let activePage = "projects";

let dutch = false;

const aboutPageClick = () => {
  activePage = "about";
  about.style.color = "#fff";
  projects.style.color = "darkslategray";
  contact.style.color = "darkslategray";
  dutch
    ? (main.innerHTML = aboutNL + aboutPage)
    : (main.innerHTML = aboutEN + aboutPage);
};

const projectsPageClick = () => {
  activePage = "projects";
  about.style.color = "darkslategray";
  projects.style.color = "#fff";
  contact.style.color = "darkslategray";
  main.innerHTML = projectsPage;
};

const contactPageClick = () => {
  activePage = "contact";
  about.style.color = "darkslategray";
  projects.style.color = "darkslategray";
  contact.style.color = "#fff";
  main.innerHTML = contactPage;
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
