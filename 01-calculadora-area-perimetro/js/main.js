"use strict";

// Triangulo Area
const trglBase = document.querySelector(".tr-area-base");
const trglHeight = document.querySelector(".tr-area-height");
const trglBtnArea = document.querySelector(".btn-tr-area");

// Triangulo Perimetro
const trglSide1 = document.querySelector(".tr-side-1");
const trglSide2 = document.querySelector(".tr-side-2");
const trglSide3 = document.querySelector(".tr-side-3");
const trglBtnPer = document.querySelector(".btn-tr-per");

// Cuadrado Area
const sqArea1 = document.querySelector(".sq-area-1");
const sqArea2 = document.querySelector(".sq-area-2");
const sqBtnArea = document.querySelector(".btn-sq-area");

// Cuadrado Perimetro
const sides = document.querySelector(".sides");
const btnSqPer = document.querySelector(".btn-sq-per");

// Rectangulo Area
const rectBase1 = document.querySelector(".rect-base-1");
const rectHeight1 = document.querySelector(".rect-height-1");
const rectBtnArea = document.querySelector(".btn-rect-area");

// Rectangulo Perimetro
const rectBase2 = document.querySelector(".rect-base-2");
const rectHeight2 = document.querySelector(".rect-height-2");
const rectBtnPer = document.querySelector(".btn-rect-per");

// Circulo Area
const cirRadio = document.querySelector(".cir-radio");
const cirAreaBtn = document.querySelector(".cir-area-btn");

// Circulo Perimetro
const cirDiameter = document.querySelector(".cir-diameter");
const cirPerBtn = document.querySelector(".cir-per-btn");

const getTriangleArea = () => {
  const base = parseFloat(trglBase.value);
  const height = parseFloat(trglHeight.value);
  const result = document.querySelector(".result-trgl-area");

  if (Number(base) && Number(height)) {
    const area = (base * height) / 2;

    trglBase.value = "";
    trglHeight.value = "";

    result.textContent = `El area de este triangulo ▲ es de: ${area.toFixed(
      2
    )}`;
  } else {
    result.textContent = "Uno o mas valores no son numeros";
  }
};

const getTrianglePerimeter = () => {
  const side1 = parseFloat(trglSide1.value);
  const side2 = parseFloat(trglSide2.value);
  const side3 = parseFloat(trglSide3.value);

  const result = document.querySelector(".result-trgl-per");

  trglSide1.value = "";
  trglSide2.value = "";
  trglSide3.value = "";

  if (Number(side1) && Number(side2) && Number(side3)) {
    const perimeter = side1 + side2 + side3;

    result.textContent = `El perimetro de este triangulo ▲ es de: ${perimeter.toFixed(
      2
    )}`;
  } else {
    result.textContent = "Uno o mas valores no son numeros";
  }
};

const getSquareArea = () => {
  const side1 = parseFloat(sqArea1.value);
  const side2 = parseFloat(sqArea2.value);
  const result = document.querySelector(".result-sq-area");

  if (Number(side1) && Number(side2)) {
    const area = side1 * side2;

    sqArea1.value = "";
    sqArea2.value = "";

    result.textContent = `El area de este cuadrado ◽️ es de: ${area.toFixed(
      2
    )}`;
  } else {
    result.textContent = "Uno o mas valores no son numeros";
  }
};

const getSquarePer = () => {
  const sqSides = parseFloat(sides.value);
  const result = document.querySelector(".result-sq-per");

  if (Number(sqSides)) {
    const perimeter = 4 * sqSides;

    sides.value = "";

    result.textContent = `El perimetro de este cuadrado ◽️ es de: ${perimeter.toFixed(
      2
    )}`;
  } else {
    result.textContent = "Uno o mas valores no son numeros";
  }
};

const getRectArea = () => {
  const base = parseFloat(rectBase1.value);
  const height = parseFloat(rectHeight1.value);
  const result = document.querySelector(".result-rect-area");

  if (Number(base) && Number(height)) {
    const area = base * height;

    rectBase1.value = "";
    rectHeight1.value = "";

    result.textContent = `El area de este rectangulo ▬ es de: ${area.toFixed(
      2
    )}`;
  } else {
    result.textContent = "Uno o mas valores no son numeros";
  }
};

const getRectPer = () => {
  const base = parseFloat(rectBase2.value);
  const height = parseFloat(rectHeight2.value);
  const result = document.querySelector(".result-rect-per");

  if (Number(base) && Number(height)) {
    const perimeter = 2 * base * (2 * height);

    rectBase2.value = "";
    rectHeight2.value = "";

    result.textContent = `El perimetro de este rectangulo ▬ es de: ${perimeter.toFixed(
      2
    )}`;
  } else {
    result.textContent = "Uno o mas valores no son numeros";
  }
};

const getCirArea = () => {
  const radio = parseFloat(cirRadio.value);
  const result = document.querySelector(".result-cir-area");

  if (Number(radio)) {
    const area = Math.PI * (radio * radio);

    cirRadio.value = "";

    result.textContent = `El area de este circulo ⏺ es de: ${area.toFixed(2)}`;
  } else {
    result.textContent = "El valor radio no es un numero";
  }
};

const getCirPer = () => {
  const diameter = parseFloat(cirDiameter.value);
  const result = document.querySelector(".result-cir-per");

  if (Number(diameter)) {
    const perimeter = diameter * Math.PI;

    cirDiameter.value = "";

    result.textContent = `El area de este circulo ⏺ es de: ${perimeter.toFixed(
      2
    )}`;
  } else {
    result.textContent = "El valor diametro no es un numero";
  }
};

trglBtnArea.addEventListener("click", getTriangleArea);
trglBtnPer.addEventListener("click", getTrianglePerimeter);
sqBtnArea.addEventListener("click", getSquareArea);
btnSqPer.addEventListener("click", getSquarePer);
rectBtnArea.addEventListener("click", getRectArea);
rectBtnPer.addEventListener("click", getRectPer);
cirAreaBtn.addEventListener("click", getCirArea);
cirPerBtn.addEventListener("click", getCirPer);
