const aboutPage = () => {
  main.innerHTML = `
  <div id="aboutContainer">
  <div>I love the feeling that anything is possible with software, and am 
  happiest when I have a problem to solve.</div>
  <div>I started to teach myself web development at the end of 2018, looking for a change
  of career. Before that, programming was just a hobby, beginning with the ZX Spectrum in 
  the early 1980s.</div>
  <div>My university degree is in philosophy, which could be described as 'conceptual 
  engineering'. I find that the precision and logical analysis that philosophy teaches is
  frequently applicable to the process of writing software.</div>
  <div>
  <ul>
    <li>HTML5</li>
    <li>CSS</li>
    <li>JavaScript/ES6</li>
    <li>Git</li>
    <li>Webpack/Parcel</li>
    <li>Linux</li>
    <li>GIMP/Photoshop</li>
  </ul>
  </div>
  <div>I'm currently looking for my first web development job, so I don't have industry
  experience, but I'm highly motivated and a fast learner. I'm currrently studying React 
  and Vue in my spare time and enjoying it very much.</div>
  </div>`;

  about.style.color = "#fff";
  projects.style.color = "darkslategray";
  contact.style.color = "darkslategray";
};

const projectsPage = () => {
  main.innerHTML = `
  <div id="projectContainer">
        <div id="mandelbrotApp" class="projectBox">
      <a href="./mandelbrot/index.html" target="_blank" ><img src="./images/mandelbrot.jpg" /></a>
      <div class="description">
      A Mandelbrot Set generator
      </div>
      <div class="linksBox">
        <a href="./mandelbrot/index.html" target="_blank" >Webpage</a>
        <a href="https://github.com/ricardopresto/website/tree/master/mandelbrot" target="_blank" >
        <i class="fab fa-github fa-lg"></i> Code</a>
      </div>
    </div>
    <div id="weatherApp" class="projectBox">
      <a href="./weather_app/index.html" target="_blank" ><img src="./images/weather.jpg" /></a>
      <div class="description">
      A front-end for the OpenWeatherMap API
      </div>
      <div class="linksBox">
        <a href="./weather_app/index.html" target="_blank" >Webpage</a>
        <a href="https://github.com/ricardopresto/website/tree/master/weather_app" target="_blank" >
        <i class="fab fa-github fa-lg"></i> Code</a>
      </div>
    </div> 
    <div id="bounceApp" class="projectBox">
      <a href="./bounce/index.html" target="_blank" ><img src="./images/bounce.jpg" /></a>
      <div class="description">
      A traditional old-school Breakout game
      </div>
      <div class="linksBox">
        <a href="./bounce/index.html" target="_blank" >Webpage</a>
        <a href="https://github.com/ricardopresto/website/tree/master/bounce" target="_blank" >
        <i class="fab fa-github fa-lg"></i> Code</a>
      </div>
    </div>
    <div id="galleryApp" class="projectBox">
      <a href="./gallery/index.html" target="_blank" ><img src="./images/gallery.jpg" /></a>
      <div class="description">
      A simple image gallery
      </div>
      <div class="linksBox">
        <a href="./gallery/index.html" target="_blank" >Webpage</a>
        <a href="https://github.com/ricardopresto/website/tree/master/gallery" target="_blank" >
        <i class="fab fa-github fa-lg"></i> Code</a>
      </div>
    </div> 
  </div>`;

  about.style.color = "darkslategray";
  projects.style.color = "#fff";
  contact.style.color = "darkslategray";
};

const contactPage = () => {
  main.innerHTML = `
  <div id="contactDetails">
    <h2><i class="fas fa-globe-europe"></i> Helmond, Noord-Brabant, NL</h2>
    <h2><i class="far fa-envelope"></i>
    <a id="emailLink" href="mailto:ricardopresto5@gmail.com"> ricardopresto5@gmail.com</a></h2>
    <h2><i class="fas fa-phone"></i> +31 6 85426290</h2>
  </div>`;

  about.style.color = "darkslategray";
  projects.style.color = "darkslategray";
  contact.style.color = "#fff";
};

export { aboutPage, projectsPage, contactPage };
