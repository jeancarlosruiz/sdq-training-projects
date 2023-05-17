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
    console.log('Funcionando hidden');
  }

  if (select.value === 'Distancia' || 'Tiempo' || 'Velocidad') {
    input1.type = 'number';
    input2.type = 'number';
    btn.textContent = 'Cacular';
    subTitle.textContent = `${select.value} de un vehiculo en movimiento constante.`;

    wrapper.appendChild(input1);
    wrapper.appendChild(input2);
    wrapper.appendChild(btn);

    console.log('funcionando');
  }

  if (select.value === 'table') {
    input1.type = 'number';
    btn.textContent = 'Cacular';
    subTitle.textContent = `Algoritmo que me permita escribir un número y muestre la tabla de multiplicar de ese número (1 - 12).`;

    wrapper.appendChild(input1);
    wrapper.removeChild(input2);
    wrapper.appendChild(btn);

    console.log('funcionando');
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
};

select.addEventListener('change', handleSelection);
form.addEventListener('submit', handleCalculate);
