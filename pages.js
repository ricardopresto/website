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
    <img src="weather.jpg" />
    <a href="./weather_app/index.html" >Weather</a>
    </div>

    <div id="mandelbrotApp" class="projectBox">
    <img src="mandelbrot.jpg" />
    <a href="./mandelbrot/index.html" >Mandelbrot</a>
    </div> 

    <div id="bounceApp" class="projectBox">
    <img src="bounce.jpg" />
    <a href="./bounce/index.html" >Bounce</a>
    </div>

    <div id="galleryApp" class="projectBox">
    <img src="gallery.jpg" />
    <a href="./gallery/index.html" >Gallery</a>
    </div> 

  </div>
  `;
};

const contactPage = () => {
  main.innerHTML = `<h1>GO AWAY</h1>`;
};

export { aboutPage, projectsPage, contactPage };
