const vetor = [1, 2, 3, 4, 5];
const shuffle = (Vetor, Trocas) => {
  for (let t = 0; t < Trocas; t++) {
    for (let i = Vetor.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [Vetor[i], Vetor[j]] = [Vetor[j], Vetor[i]];
    }
  }
  return Vetor;
};

console.log(shuffle(vetor, 3));