import captions from "./captions.js";

const fullpic = document.getElementById("fullpic");
const modal = document.getElementById("modal");
const wrapper = document.getElementById("wrapper");
let thumbs = document.getElementsByClassName("thumb");
const left = document.getElementById("left");
const right = document.getElementById("right");
const caption = document.getElementById("caption");

wrapper.addEventListener("click", expand);
modal.addEventListener("click", hide);
left.addEventListener("click", leftClick);
right.addEventListener("click", rightClick);
document.addEventListener("keydown", keyPress);
fullpic.addEventListener("touchstart", touchS);
fullpic.addEventListener("touchmove", touchM);
fullpic.addEventListener("touchend", touchE);

let currentImage = "";
thumbs = Array.from(thumbs);
let fullPicDisplay = false;
let touchOne,
  touchTwo = null;

thumbs.forEach(thumb => {
  if (thumb.clientHeight > thumb.clientWidth) {
    thumb.style.height = "300px";
  } else {
    thumb.style.width = "300px";
  }
});

function expand(event) {
  let clicked = event.srcElement;
  if (clicked !== wrapper && document.documentElement.clientWidth > 500) {
    fullPicDisplay = true;
    currentImage = String(clicked.id).slice(-1);
    currentImage = Number(currentImage);
    let image = clicked.getAttribute("src");
    let pic = document.createElement("img");
    pic.setAttribute("src", image);
    picSize(pic);
    fullpic.appendChild(pic);
    modal.style.display = "flex";
    caption.textContent = captions[currentImage];
    if (currentImage != 0) {
      left.style.visibility = "visible";
    }
    if (currentImage != thumbs.length - 1) {
      right.style.visibility = "visible";
    }
  }
}

function leftClick() {
  right.style.visibility = "visible";
  if (currentImage > 0) {
    currentImage = currentImage - 1;
    changePic(currentImage);
    if (currentImage == 0) {
      left.style.visibility = "hidden";
    }
  }
}

function rightClick() {
  left.style.visibility = "visible";
  if (currentImage < thumbs.length - 1) {
    currentImage = currentImage + 1;
    changePic(currentImage);
    if (currentImage == thumbs.length - 1) {
      right.style.visibility = "hidden";
    }
  }
}

function changePic(currentImage) {
  let image = thumbs[Number(currentImage)].getAttribute("src");
  let pic = document.createElement("img");
  pic.setAttribute("src", image);
  picSize(pic);
  fullpic.replaceChild(pic, fullpic.firstChild);
  caption.textContent = captions[currentImage];
}

function hide(event) {
  let clicked = event.srcElement;
  if (clicked == modal || clicked == fullpic || clicked == fullpic.firstChild) {
    fullpic.removeChild(fullpic.firstChild);
    fullPicDisplay = false;
    modal.style.display = "none";
    left.style.visibility = "hidden";
    right.style.visibility = "hidden";
  }
}

function keyPress(event) {
  if (fullPicDisplay == true) {
    if (event.key == "ArrowRight") {
      rightClick();
    }
    if (event.key == "ArrowLeft") {
      leftClick();
    }
    if (event.key == "Escape") {
      fullpic.removeChild(fullpic.firstChild);
      fullPicDisplay = false;
      modal.style.display = "none";
      left.style.visibility = "hidden";
      right.style.visibility = "hidden";
    }
  }
}

function picSize(pic) {
  if (screenOrientation() == "landscape") {
    pic.setAttribute("height", document.documentElement.clientHeight - 140);
  } else {
    pic.setAttribute("width", document.documentElement.clientWidth - 180);
  }

  if (
    document.documentElement.clientHeight < 400 ||
    document.documentElement.clientWidth < 400
  ) {
    fullpic.style.padding = "10px";
  } else {
    fullpic.style.padding = "20px";
  }

  left.setAttribute("height", pic.height + 60);
  right.setAttribute("height", pic.height + 60);
}

function screenOrientation() {
  if (
    document.documentElement.clientHeight > document.documentElement.clientWidth
  ) {
    return "portrait";
  } else {
    return "landscape";
  }
}

function touchS(e) {
  e.preventDefault();
  touchOne = e.targetTouches[0].clientX;
}

function touchM(e) {
  touchTwo = e.targetTouches[0].clientX;
}

function touchE() {
  touchOne < touchTwo ? leftClick() : rightClick();
}
