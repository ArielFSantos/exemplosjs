
const swap = (Valor1,Valor2) =>{
    let aux = Valor1;
    Valor1=Valor2; 
    Valor2=aux;
    return {Valor1,Valor2} ;   
}
const shuffle = (Vetor,Trocas) =>{
    for (let t = 0 ; t<Trocas ; t++){
        for (let i = Vetor.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [Vetor[i], Vetor[j]] = [Vetor[j], Vetor[i]];   
        }
        console.log(Vetor)        
    }
    return Vetor;
}

console.log(swap(1,5))
vetor = [1,2,3,4,5]

shuffle(vetor,1);
shuffle(vetor,2)