const list = document.getElementById('valores');
const vetorList = Array.from(list.querySelectorAll('li')).map(item => item.innerHTML);
console.log(vetorList);