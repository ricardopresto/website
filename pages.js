const aboutPage = `
  <div class="aboutContainer">
    <div id="skillsBox">
      <div id="listBox">
        <div>Skills:</div>
        <div>
        <ul>
        <li>HTML5</li>
        <li>CSS</li>
        <li>JavaScript/ES6</li>
        <li>Vue.js</li>
        <li>Responsive Design</li>
        <li>Git</li>
        <li>Linux</li>
        <li>GIMP/Photoshop</li>
        </ul>
        </div>
        <div>Currently learning:</div>
        <div>
        <ul>
        <li>Node.js</li>
        </ul>
        </div>
      </div>  
      <img src="./images/portrait.jpg" >
    </div>
  </div>`;

const aboutEN = `
<div class="aboutContainer" id="aboutText">
<div>I love the feeling that anything is possible with software, and am 
happiest when I have a problem to solve.</div>
<div>My university degree is in philosophy, and I find that the precision and logical 
analysis that philosophy teaches is a good preparation for the process of writing software.</div>
</div>`;

const aboutNL = `
<div class="aboutContainer" id="aboutText">
<div>​Ik hou ervan dat alles mogelijk is met software, en ik ben op mijn best als ik een 
probleem moet oplossen.</div>
<div>Mijn universitaire studie is filosofie, en ik ondervind dat de precisie en logische 
analyse vanuit de filosofie een goede basis is voor het proces van software ontwikkelen.</div>
</div>`;

const langSelect = `<div id="select"><span id="ned">NL&ensp;</span><span id="eng">&ensp;EN</span></div>`;

const projectsPage = `
  <div id="projectContainer">
  <div id="drumApp" class="projectBox">
    <a href="./drum/index.html" target="_blank" ><img src="./images/drum.jpg" /></a>
    <div class="description">
    A drum machine built with Vue.js
    </div>
    <div class="linksBox">
      <a href="./drum/index.html" target="_blank" >Webpage</a>
      <a href="https://github.com/ricardopresto/drumVue" target="_blank" >
      <i class="fab fa-github fa-lg"></i> Code</a>
    </div>
  </div> 
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
  </div>`;

const contactPage = `
  <div id="contactDetails">
    <p><i class="fas fa-globe-europe"></i>&ensp;Helmond, Noord-Brabant, NL</p>
    <p><i class="far fa-envelope"></i>&ensp;richard@ricardopresto.eu</p>
    <p><i class="fas fa-phone"></i>&ensp;+31 6 85426290</p>
  </div>`;

export { aboutPage, aboutEN, aboutNL, langSelect, projectsPage, contactPage };
