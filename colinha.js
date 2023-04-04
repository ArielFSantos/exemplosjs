
const lista = [1, 2, 3, 4, 5];
const ul = document.getElementById('valores');

const listaHTML = lista.map(item => `<li>${item}</li>`).join('');

ul.innerHTML = listaHTML;