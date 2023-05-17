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
  if (select.value === 'Distancia' || 'Tiempo' || 'Velocidad') {
    input1.type = 'number';
    input2.type = 'number';
    btn.textContent = 'Cacular';
    wrapper.classList.remove('hidden');
    subTitle.textContent = `${select.value} de un vehiculo en movimiento constante.`;

    wrapper.appendChild(input1);
    wrapper.appendChild(input2);
    wrapper.appendChild(btn);

    console.log('funcionando');
  }
};

const handleCalculate = (e) => {
  e.preventDefault();
  wrapper.classList.remove('hidden');

  if (select.value === 'Distancia') {
    result.classList.remove('hidden');
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
};

select.addEventListener('change', handleSelection);
form.addEventListener('submit', handleCalculate);
