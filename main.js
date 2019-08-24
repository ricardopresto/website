import { aboutPage, projectsPage, contactPage } from "./pages.js";

const main = document.getElementById("main");
const about = document.getElementById("about");
const projects = document.getElementById("projects");
const contact = document.getElementById("contact");

about.addEventListener("click", aboutPage);
projects.addEventListener("click", projectsPage);
contact.addEventListener("click", contactPage);
