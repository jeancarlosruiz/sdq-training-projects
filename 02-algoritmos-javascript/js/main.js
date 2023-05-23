import './attribution';
import { morseCode } from './morseCode';
import { textCode } from './textCode';

const select = document.querySelector('.select');
const form = document.querySelector('.form');
const input1 = document.createElement('input');
const input2 = document.createElement('input');
const btn = document.createElement('button');
const result = document.querySelector('.result');
const wrapper = document.querySelector('.wrapper');
const subTitle = document.querySelector('.sub-title');

btn.type = 'submit';
btn.className = 'button';

const handleSelection = () => {
  wrapper.classList.remove('hidden');

  if (select.value === '') {
    wrapper.classList.toggle('hidden');
  }

  if (select.value === 'Distancia' || 'Tiempo' || 'Velocidad') {
    input1.type = 'number';
    input2.type = 'number';
    btn.textContent = 'Cacular';
    subTitle.textContent = `${select.value} de un vehiculo en movimiento constante.`;

    wrapper.appendChild(input1);
    wrapper.appendChild(input2);
    wrapper.appendChild(btn);
  }

  if (select.value === 'table') {
    input1.type = 'number';
    btn.textContent = 'Cacular';
    subTitle.textContent = `Algoritmo que me permita escribir un número y muestre la tabla de multiplicar de ese número (1 - 12).`;

    wrapper.appendChild(input1);
    wrapper.removeChild(input2);
    wrapper.appendChild(btn);
  }

  if (select.value === 'morse') {
    input1.type = 'text';
    wrapper.removeChild(input2);
    btn.textContent = 'Traducir';
    subTitle.textContent = 'Algoritmo para transformar texto en Código Morse.';
  }

  if (select.value === 'text') {
    input1.type = 'text';
    wrapper.removeChild(input2);
    btn.textContent = 'Traducir';
    subTitle.textContent = 'Algoritmo para transformar codigo morse en texto.';
  }

  if (select.value === 'odd') {
    input1.type = 'number';
    wrapper.removeChild(input2);
    btn.textContent = 'Calcular';
    subTitle.textContent =
      'Algoritmo que me permita escribir un número y me retorne una lista de los números primos desde cerohasta el número indicado.';
  }

  if (select.value === 'binario') {
    input1.type = 'number';
    wrapper.removeChild(input2);
    btn.textContent = 'Calcular';
    subTitle.textContent =
      'Algoritmo que me permita escribir un número decimal y me retorne el número convertido en binario.';
  }

  if (select.value === 'descendente') {
    input1.type = 'number';
    wrapper.removeChild(input2);
    btn.textContent = 'Calcular';
    subTitle.textContent =
      'Algoritmo que me permita escribir un número y me retorne una lista de números desde 1 hasta el número indicado';
  }

  if (select.value === 'ascendente') {
    input1.type = 'number';
    wrapper.removeChild(input2);
    btn.textContent = 'Calcular';
    subTitle.textContent =
      'Algoritmo que me permita escribir un número y me retorne una lista de números desde el número indicado hasta 1';
  }

  if (select.value === 'odd-even') {
    input1.type = 'number';
    wrapper.removeChild(input2);
    btn.textContent = 'Calcular';
    subTitle.textContent =
      'Algoritmo que me permita escribir un número y me retorne una lista de números desde 1 hasta el número indicado separando pares e impares.';
  }
};

const handleCalculate = (e) => {
  e.preventDefault();

  wrapper.classList.remove('hidden');
  result.classList.remove('hidden');

  if (select.value === 'Distancia') {
    result.textContent = `Resultado: El carro mantenia una velocidad de ${
      input1.value
    } km/h en un tiempo de ${
      input2.value
    } minutos, la distancia recorrida fue: ${(
      input1.value *
      (input2.value / 60)
    ).toFixed(2)} kilometros 🚗`;

    input1.value = '';
    input2.value = '';
  }

  if (select.value === 'Tiempo') {
    result.textContent = `Resultado: El tiempo transcurrido de un carro que mantenia un movimiento contaste de ${
      input1.value
    } km/h a una distancia de ${input2.value} kilometros fue de: ${(
      (input1.value / input2.value) *
      60
    ).toFixed(2)} minutos`;
    input1.value = '';
    input2.value = '';
  }

  if (select.value === 'Velocidad') {
    result.textContent = `Resultado: La velocidad recorrida de un carro que mantenia un movimiento constante a una distancia de ${
      input1.value
    } kilometros en un tiempo de ${input2.value} minutos fue de: ${(
      input1.value /
      (input2.value / 60)
    ).toFixed(2)} km.`;
    input1.value = '';
    input2.value = '';
  }

  if (select.value === 'table') {
    const tableArr = [];
    for (let i = 1; i <= 12; i++) {
      const tableResult = `${input1.value} × ${i} = ${i * input1.value}`;
      tableArr.push(tableResult);
    }
    result.textContent = `Resultado: ${tableArr.join(', ')}`;
  }

  if (select.value === 'morse') {
    const text = input1.value;
    let translatedText = '';

    for (let c of text) {
      translatedText =
        c == ' '
          ? (translatedText += ' ')
          : (translatedText += `(${morseCode[c.toLocaleLowerCase()]})`);
    }
    result.textContent = translatedText;
  }

  if (select.value === 'text') {
    const text = input1.value;
    let translatedMorse = text
      .split(' ')
      .map((letter) => textCode[letter] || ' ')
      .join('');

    result.textContent = translatedMorse;
  }

  if (select.value === 'odd') {
    let oddArr = [];
    const num = input1.value;

    for (let i = 0; i <= num; i++) {
      if (i % 2 === 1) {
        oddArr.push(i);
      }
    }

    result.textContent = `Numeros Primos: ${oddArr.join(', ')}`;
  }

  if (select.value === 'binario') {
    let numeroDecimal;
    let divisor = 2;
    numeroDecimal = input1.value;
    let numeroSalida = '';
    while (numeroDecimal >= 2) {
      let cociente = Math.trunc(numeroDecimal / divisor);
      let residuo = numeroDecimal % divisor;
      numeroSalida += residuo.toString();
      numeroDecimal = cociente;
    }

    let auxiliar = numeroDecimal.toString();
    numeroSalida += auxiliar;

    console.log(numeroSalida, auxiliar);

    result.textContent = `Resultado: ${numeroSalida
      .split('')
      .reverse()
      .join('')}`;
  }

  if (select.value === 'descendente') {
    const num = input1.value;

    let numList = [];
    for (let i = 0; i <= num; i++) {
      numList.push(i);
    }

    result.textContent = `int = ${input1.value}; out = ${numList.join(',')}`;

    input1.value = '';
  }

  if (select.value === 'ascendente') {
    const num = input1.value;

    let numList = [];

    for (let i = num; i >= 1; i--) {
      numList.push(i);
    }

    result.textContent = `int = ${input1.value}; out = ${numList.join(',')}`;

    input1.value = '';
  }

  if (select.value === 'odd-even') {
    const num = input1.value;

    let evenList = [];
    let oddList = [];

    for (let i = num; i >= 1; i--) {
      i % 2 === 0 ? evenList.push(i) : oddList.push(i);
    }

    result.textContent = `Int = ${num} outEven = ${evenList.join(
      ','
    )} ; outOdd = ${oddList.join(',')}`;

    input1.value = '';
  }
};

select.addEventListener('change', handleSelection);
form.addEventListener('submit', handleCalculate);
