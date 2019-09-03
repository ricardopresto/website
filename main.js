import { aboutPage, projectsPage, contactPage } from "./pages.js";

const main = document.getElementById("main");
const about = document.getElementById("about");
const projects = document.getElementById("projects");
const contact = document.getElementById("contact");
let activePage = "projects";

projectsPage();

const aboutPageClick = () => {
  activePage = "about";
  aboutPage();
};

const projectsPageClick = () => {
  activePage = "projects";
  projectsPage();
};

const contactPageClick = () => {
  activePage = "contact";
  contactPage();
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
