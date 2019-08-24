const aboutPage = () => {
  const template = `<h1 id="arse">Arseface</h1>
  <div>hello hello hello hello hello hello hello hello hello hello hello hello hello hello 
  hello hello hello hello hello hello hello hello hello hello hello hello hello hello</div>`;
  main.innerHTML = template;
};

const projectsPage = () => {
  main.innerHTML = `<a href="./weather_app/index.html" >Weather</a>
  <a href="./mandelbrot/index.html" >Mandelbrot</a>
  <a href="./bounce/index.html" >Bounce</a>
  <a href="./gallery/index.html" >Gallery</a>`;
};

const contactPage = () => {
  main.innerHTML = `<h1>GO AWAY</h1>`;
};

export { aboutPage, projectsPage, contactPage };
