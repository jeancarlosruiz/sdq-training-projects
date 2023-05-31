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


const deleteItem = (e) => {
  const item = e.target.parentElement;
  const itemAmount = item.querySelector('.item-amount').textContent.slice(1);

  item.remove();
  prevAmount -= itemAmount

  total.textContent = `$${prevAmount}`;

  if (prevAmount === 0) {
    payment.classList.add('hidden');
  }

  console.log(prevAmount);

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

    const itemAmount = document.querySelectorAll('.item-amount');
    const deleteBtn = document.querySelectorAll('.item-delete-btn');

    

    itemAmount.forEach((item) => {
      prevAmount += parseInt(item.textContent.slice(1));
    });

    // Mostrar el total
    total.textContent = `$${prevAmount}`;

    deleteBtn.forEach((btn) => {
      // Agregar el evento click con la función deleteItem
      btn.addEventListener('click', deleteItem);
    });

    // Opciones de pago y total
    payment.classList.remove('hidden');

    // Limpiar los campos
    description.value = '';
    amount.value = '';
    console.log(prevAmount);
    console.log(arr);
  }
});

// Resultado de cambio fuera para que sea global
let result = {};

const amountChange = (cash, totalAmount) => {
  let change = parseInt(cash) - totalAmount;

  // Tipos de billetes y modenas
  let coins = [1, 5, 10, 25, 50, 100, 200, 500, 1000, 2000];

  // Para cada tipo de moneda...
  for (let i = 0; i < coins.length; i++) {
    const coin = coins[i];
    const coinQuantity = Math.floor(change / coin);

    if (coinQuantity > 0) {
      result[coin] = coinQuantity;
      change -= coin * coinQuantity;
    }
  }

  return result;
};

pay.addEventListener('click', () => {
  amountChange(cash.value, prevAmount);

  if (Object.keys(result).length === 0) {
    const li = document.createElement('li');
    li.innerHTML = `<span>No hay cambio</span>`;

    listChange.appendChild(li);
  } else {
    listChange.innerHTML = '';
  }

  for (const [key, i] of Object.entries(result)) {
    const li = document.createElement('li');
    li.innerHTML = `<span>${key}</span> x <span>$${i}</span>`;

    listChange.appendChild(li);
  }

  cash.value = '';
});
