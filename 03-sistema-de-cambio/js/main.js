'use strict'

// Nombramos las constantes y variables
const form = document.querySelector('.form');
const description = document.querySelector('.description');
const amount = document.querySelector('.amount');
const submit = document.querySelector('.submit-btn');

const list = document.querySelector('.list');
const listChange = document.querySelector('.list-change');
const payment = document.querySelector('.payment');
const cash = document.querySelector('.cash');
const total = document.querySelector('.total-amount');
const pay = document.querySelector('.payment-btn');

let prevAmount = 0;

// Resultado de cambio fuera para que sea global
let result = {};

const amountChange = (cash, totalAmount) => {
  let change = parseInt(cash) - totalAmount;

  // Tipos de billetes y modenas
  let coins = [2000, 1000, 500, 200, 100, 50, 25, 10, 5, 1]

  // Para cada tipo de moneda...
  for (let i = 0; i < coins.length; i++) {
    const coin = coins[i];
    const coinQuantity = Math.floor(change / coin);

    if (coinQuantity > 0) {
      result[coin] = coinQuantity;
      change -= coin * coinQuantity;
    }
  }

  return result
};

// Funcion para eliminar un item de la lista.
const deleteItem = (e) => {
  // Obtener el elemento padre del boton
  const item = e.target.parentElement;
  // Obtener el valor del item y le quita el signo de dolar
  const itemAmount = item.querySelector('.item-amount').textContent.slice(1);

  // Eliminar el item de la lista
  item.remove();

  // Restar el valor del item eliminado al total.
  prevAmount -= itemAmount
  // Mostrar el total actualizado
  total.textContent = `$${prevAmount}`;

  // Si el total es igual a 0, ocultar el pago y el cambio
  if (prevAmount === 0) {
    payment.classList.add('hidden');
    listChange.innerHTML = '';
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Validar los campos
  if (description.value === '' || amount.value === '') {
    description.classList.add('error');
    amount.classList.add('error');
  } else {
    description.classList.remove('error');
    amount.classList.remove('error');
  }

  // Agregar los valores a la lista
  if (description.value && amount.value !== '') {
    // Crear un elemento li
    const li = document.createElement('li');
    // Agregar la clase "item"
    li.className = 'item';
    // Agregar el contenido al li
    li.innerHTML = `<span class="item-description">${description.value}</span><span class="item-amount">$${amount.value}</span><button class="item-delete-btn">Eliminar</button>`;

    // Agregar el elmento a la lista
    list.appendChild(li);
    
    // Sumar el valor del item al total
    prevAmount += parseInt(amount.value)
    
    // Mostrar el total
    total.textContent = `$${prevAmount}`;

  
    // Obtener todos los botones de eliminar  
    const deleteBtn = document.querySelectorAll('.item-delete-btn')
    deleteBtn.forEach((btn) => {
      // Agregar el evento click con la función deleteItem
      btn.addEventListener('click', deleteItem);
    });

    // Opciones de pago y total
    payment.classList.remove('hidden');

    // Limpiar los campos
    description.value = '';
    amount.value = '';
  }
});

pay.addEventListener('click', () => {

  amountChange(cash.value, prevAmount);

  // Si el pago es menor al total
  if (parseInt(cash.value)  < prevAmount) {
    listChange.innerHTML = '';

    const li = document.createElement('li');
    li.innerHTML = `<span>El pago es menor al total</span>`;

    listChange.appendChild(li);
  } 

  // Si el pago es igual al total
  if(parseInt(cash.value)  === prevAmount) {
    listChange.innerHTML = '';

    const li = document.createElement('li');
    li.innerHTML = `<span>Gracias por su compra!</span>`;

    listChange.appendChild(li);
  }

  // Si el pago es mayor al total, realizar el cambio
  if(parseInt(cash.value) > prevAmount) {
    listChange.innerHTML = '';

    // Proceso de cambio
    for (const [key, i] of Object.entries(result)) {
      const li = document.createElement('li');
      li.innerHTML = `<span>${i}</span> x <span>$${key}</span>`;

      // Agregar el elmento a la lista
      listChange.appendChild(li);
    }
  }  

  // Limpiar el campo
  cash.value = '';
});