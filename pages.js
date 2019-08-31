const aboutPage = () => {
  main.innerHTML = `<h1 id="arse">Arseface</h1>
  <div>hello hello hello hello hello hello hello hello hello hello hello hello hello hello 
  hello hello hello hello hello hello hello hello hello hello hello hello hello hello</div>`;

  about.style.color = "#fff";
  projects.style.color = "darkslategray";
  contact.style.color = "darkslategray";
};

const projectsPage = () => {
  main.innerHTML = `
  <div id="projectContainer">
    <div id="weatherApp" class="projectBox">
      <img src="./images/weather.jpg" />
      <div class="description">
      A front-end for the OpenWeatherMap API
      </div>
      <div class="linksBox">
        <a href="./weather_app/index.html" target="_blank" >Webpage</a>
        <a href="https://github.com/ricardopresto/website2/tree/master/weather_app" target="_blank" >Code</a>
      </div>
    </div>
    <div id="mandelbrotApp" class="projectBox">
      <img src="./images/mandelbrot.jpg" />
      <div class="description">
      A Mandelbrot Set generator
      </div>
      <div class="linksBox">
        <a href="./mandelbrot/index.html" target="_blank" >Webpage</a>
        <a href="https://github.com/ricardopresto/website2/tree/master/mandelbrot" target="_blank" >Code</a>
      </div>
    </div> 
    <div id="bounceApp" class="projectBox">
      <img src="./images/bounce.jpg" />
      <div class="description">
      A traditional old-school Breakout game
      </div>
      <div class="linksBox">
        <a href="./bounce/index.html" target="_blank" >Webpage</a>
        <a href="https://github.com/ricardopresto/website2/tree/master/bounce" target="_blank" >Code</a>
      </div>
    </div>
    <div id="galleryApp" class="projectBox">
      <img src="./images/gallery.jpg" />
      <div class="description">
      A simple image gallery app
      </div>
      <div class="linksBox">
        <a href="./gallery/index.html" target="_blank" >Webpage</a>
        <a href="https://github.com/ricardopresto/website2/tree/master/gallery" target="_blank" >Code</a>
      </div>
    </div> 
  </div>`;

  about.style.color = "darkslategray";
  projects.style.color = "#fff";
  contact.style.color = "darkslategray";
};

const contactPage = () => {
  main.innerHTML = `<h1>GO AWAY</h1>`;

  about.style.color = "darkslategray";
  projects.style.color = "darkslategray";
  contact.style.color = "#fff";
};

export { aboutPage, projectsPage, contactPage };
