const aboutPage = () => {
  const template = `<h1 id="arse">Arseface</h1>
  <div>hello hello hello hello hello hello hello hello hello hello hello hello hello hello 
  hello hello hello hello hello hello hello hello hello hello hello hello hello hello</div>`;
  main.innerHTML = template;
};

const projectsPage = () => {
  main.innerHTML = `
  <div id="projectContainer">

    <div id="weatherApp" class="projectBox">
    <img src="./images/weather.jpg" />
    <a href="./weather_app/index.html" >Weather</a>
    <a href="https://github.com/ricardopresto/website2/tree/master/weather_app"  target="_blank" >Code</a>
    </div>

    <div id="mandelbrotApp" class="projectBox">
    <img src="./images/mandelbrot.jpg" />
    <a href="./mandelbrot/index.html" >Mandelbrot</a>
    <a href="https://github.com/ricardopresto/website2/tree/master/mandelbrot"  target="_blank" >Code</a>

    </div> 

    <div id="bounceApp" class="projectBox">
    <img src="./images/bounce.jpg" />
    <a href="./bounce/index.html" >Bounce</a>
    <a href="https://github.com/ricardopresto/website2/tree/master/bounce"  target="_blank" >Code</a>

    </div>

    <div id="galleryApp" class="projectBox">
    <img src="./images/gallery.jpg" />
    <a href="./gallery/index.html" >Gallery</a>
    <a href="https://github.com/ricardopresto/website2/tree/master/gallery"  target="_blank" >Code</a>

    </div> 

  </div>
  `;
};

const contactPage = () => {
  main.innerHTML = `<h1>GO AWAY</h1>`;
};

export { aboutPage, projectsPage, contactPage };
