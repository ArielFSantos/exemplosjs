const receitas = [
    {
        titulo: "Arroz de Couve-Flor",
        imagem: "../img/Arroz.jpg",
        preparo: "Deixe a couve-flor picada. Adicione os igredientes e refogue bem. Adicione sal, tampe a panela e deixe cozinhar.",
        ingredientes: [
            "Arroz",
            "Couve-Flor",
            "Cebola Média",
            "Azeite",
        ]
    },
    {
        titulo: "Bolo de Café",
        imagem: "../img/Bolo.jpg",
        preparo: "Bata o açucar, as gemas e o café. Adicione farinha e chocolate e mexa bem. Bata as claras e junte á mistura.",
        ingredientes: [
            "Farinha de Trigo",
            "Açúcar",
            "Café",
            "Chocolate em Pó",
            "Ovos"
        ]
    },
    {
        titulo: "Coxinha de Brigadeiro",
        imagem: "../img/Coxinha.jpg",
        preparo: "Junte o Leite condensado, chocolate em pó e manteiga. Aqueça no fogo baixo. Envolva os morangos e passe no granulado.",
        ingredientes: [
            "Leite Condensado",
            "Chocolate Em Pó",
            "Manteiga",
            "Morango",
            "Chocolate Granulado"
        ]
    },
]

function getListaIngredientes (receitas){
  let listaHTML = "<ul>";
  const listaIngredientes = receitas.ingredientes.map((ingredientes) => {
    return "<li>" + ingredientes + "</li>";
  }).reduce((acumulador, item) => {
    return acumulador + item; }, "");
  listaHTML += listaIngredientes;
  listaHTML += "</ul>";
  return listaHTML;

}
function getCard(receitas){
  const card = `
    <div class="card" style="width: 250px;">
      <img src="${receitas.imagem}" class="card-img-top" alt="${receitas.titulo}">
      <div class="card-body">
        <h5 class="card-title">${receitas.titulo}</h5>
        <div class="card-text">${getListaIngredientes(receitas.ingredientes)}</div>
        <hr>
        <p>${receita.preparo}</p>
      </div>
    </div>
  `;
  return card;
}
function preencheCatalogo(){
    const pnlCatalogo = document.getElementById("pnlCatalogo");

    const receitasHtml = receitas.map(receita => getCard(receita)).reduce((html, cardHtml) => html + cardHtml, "");
  
    pnlCatalogo.innerHTML = receitasHtml;
    
}

