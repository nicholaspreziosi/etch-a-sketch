let size = 16;
let colorvalue = [];

createSquare();
colorDivs();
reset();
changeDimensions();
colorColorPickerButton();
updateColorPickerButton();
toggleButtons();

function createSquare() {
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    const container = document.querySelector("#container");
    container.appendChild(div);
    div.classList.add("div");
  }
  const container = document.querySelector("#container");
  container.setAttribute(
    "style",
    `grid-template-rows: repeat(${size}, auto); grid-template-columns: repeat(${size}, auto)`
  );
}

function colorDivs() {
  const colorDiv = (index) => {
    if (document.querySelector("#colorchoice").classList.contains("active")) {
      let color = document.querySelector("#colorpicker").value;
      divs[index].style.cssText = `background-color: ${color};`;
    } else if (
      document.querySelector("#rainbow").classList.contains("active")
    ) {
      let color = randomColor();
      divs[index].style.cssText = `background-color: ${color};`;
    } else if (
      document.querySelector("#shading").classList.contains("active")
    ) {
      let rgb = window
        .getComputedStyle(divs[index])
        .getPropertyValue("background-color");
      rgb = rgb.replace(/[^\d,]/g, "").split(",");
      let color = greyscale(rgb);
      divs[index].style.cssText = `background-color: ${color};`;
    } else {
      divs[index].style.cssText = "background-color: white";
    }
  };
  const divs = document.querySelectorAll(".div");
  let mouseDown = false;
  for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener("click", () => {
      colorDiv(i);
    });
    window.addEventListener("mousedown", () => {
      mouseDown = true;
    });
    window.addEventListener("mouseup", () => {
      mouseDown = false;
    });
    divs[i].addEventListener("mouseover", () => {
      if (mouseDown) {
        colorDiv(i);
      }
    });
  }
}

function reset() {
  const reset = document.querySelector("#reset");
  reset.addEventListener("click", () => {
    const divs = document.querySelectorAll(".div");
    for (let i = 0; i < divs.length; i++) {
      divs[i].style.cssText = "background-color: white;";
    }
  });
}

function changeDimensions() {
  const implementChange = () => {
    if (number.value < 1 || number.value > 100) {
      alert.textContent = "Dimensions must be between 1 and 100!";
    } else {
      alert.textContent = "";
      size = number.value;
      const container = document.querySelector("#container");
      container.textContent = "";
      createSquare();
      colorDivs();
    }
  };
  const dimensions = document.querySelector("#dimensions");
  const number = document.querySelector("#number");
  const alert = document.querySelector("#alert");
  dimensions.addEventListener("click", () => {
    implementChange();
  });
  number.addEventListener("change", () => {
    implementChange();
  });
}

function randomColor() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  return "rgb(" + r + "," + g + "," + b + ")";
}

function greyscale(colorValue) {
  for (i = 0; i < 3; i++) {
    if (colorValue[i] >= 0) {
      colorValue[i] = colorValue[i] - 26;
    }
  }
  return (
    "rgb(" + colorValue[0] + "," + colorValue[1] + "," + colorValue[2] + ")"
  );
}

function toggleButtons() {
  const colors = document.querySelectorAll(".color");
  for (let i = 0; i < colors.length; i++) {
    colors[i].addEventListener("click", () => {
      for (let i = 0; i < colors.length; i++) {
        if (colors[i].classList.contains("active")) {
          colors[i].classList.toggle("active");
        }
      }
      colors[i].classList.toggle("active");
      colorRainbowButton();
      colorColorPickerButton();
      colorEraseButton();
    });
  }
}

function updateColorPickerButton() {
  let colorpicker = document.querySelector("#colorpicker");
  colorpicker.addEventListener("input", () => {
    const colorchoice = document.querySelector("#colorchoice");
    if (colorchoice.classList.contains("active")) {
      let color = document.querySelector("#colorpicker").value;
      colorchoice.style.cssText = `background-color: ${color};`;
      colorchoice.style.color = "white";
    }
  });
}

function colorColorPickerButton() {
  const colorchoice = document.querySelector("#colorchoice");
  if (colorchoice.classList.contains("active")) {
    let color = document.querySelector("#colorpicker").value;
    colorchoice.style.cssText = `background-color: ${color};`;
    colorchoice.style.color = "white";
  } else if (!colorchoice.classList.contains("active")) {
    colorchoice.style.cssText = "white";
  }
}

function colorRainbowButton() {
  const rainbow = document.querySelector("#rainbow");
  if (rainbow.classList.contains("active")) {
    let color = randomColor();
    rainbow.style.cssText = `background-color: ${color};`;
    rainbow.style.color = "white";
  } else if (!rainbow.classList.contains("active")) {
    rainbow.style.cssText = "white";
  }
}

function colorEraseButton() {
  const erase = document.querySelector("#erase");
  if (erase.classList.contains("active")) {
    erase.style.cssText = "background-color: rgb(245,161,157);";
    erase.style.color = "white";
  } else if (!erase.classList.contains("active")) {
    erase.style.cssText = "white";
  }
}
