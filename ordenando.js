const swap = (Valor1, Valor2) => {
  let aux = Valor1;
  Valor1 = Valor2;
  Valor2 = aux;
  return { Valor1, Valor2 };
};
const shuffle = (Vetor, Trocas) => {
  for (let t = 0; t < Trocas; t++) {
    for (let i = Vetor.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [Vetor[i], Vetor[j]] = [Vetor[j], Vetor[i]];
    }
    console.log(Vetor);
  }
  return Vetor;
};
const bubble_sort = (Vetor) => {
  let len = Vetor.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (Vetor[j] > Vetor[j + 1]) {
        let tmp = Vetor[j];
        Vetor[j] = Vetor[j + 1];
        Vetor[j + 1] = tmp;
      }
    }
  }
  return Vetor;
};
const selection_sort = (Vetor) => {
  let n = Vetor.length;
  for (let i = 0; i < n; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (Vetor[j] < Vetor[min]) {
        min = j;
      }
    }
    if (min != i) {
      let tmp = Vetor[i];
      Vetor[i] = Vetor[min];
      Vetor[min] = tmp;
    }
  }
  return Vetor;
};
const quick_sort = (array, start = 0, end = array.length - 1) => {
  if (start >= end) {
    return;
  }
  const pivotIndex = partition(array, start, end);
  quick_sort(array, start, pivotIndex - 1);
  quick_sort(array, pivotIndex + 1, end);
  return array;
};
const partition = (array, start, end) => {
  const pivot = array[end];
  let i = start;
  for (let j = start; j < end; j++) {
    if (array[j] < pivot) {
      [array[i], array[j]] = [array[j], array[i]];
      i++;
    }
  }
  [array[i], array[end]] = [array[end], array[i]];
  return i;
};

//console.log(swap(1, 5));
vetor = [7, 3, 1, 5, 8];
//shuffle(vetor, 1);
//shuffle(vetor, 2);
//console.log(bubble_sort(vetor));
//console.log(selection_sort(vetor));
console.log(quick_sort(vetor));
