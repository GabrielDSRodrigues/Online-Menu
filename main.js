function id(e) { return document.getElementById(e); }

function soma(e, total, pos) {
  let value = e.value;
  e.value = parseInt(value) + 1;
  total.innerText = "Total R$" + (parseFloat(itens[pos].valor) * e.value);
}

function subtrai(e, total, pos) {
  let value = e.value;
  if (value > 0) {
    e.value = parseInt(value) - 1;
  }
  total.innerText = "Total R$" + (parseFloat(itens[pos].valor) * e.value);
}

class cardapioItem {
  nome;
  valor;
  ingredientes;
}

let ids = 0;
let itens = [];

function addItem(nome, valor, ingredientes, img, categoria) {
  let novo = new cardapioItem;
  novo.nome = nome;
  novo.valor = valor;
  novo.ingredientes = ingredientes;
  itens.push(novo);
  id(categoria).insertAdjacentHTML("afterbegin", `
  <li>
    <div class="linha">
      <div class="img" style="background:url(IMGS/${img});background-size: cover;"></div>
        <p>
          ${ingredientes}
        </p>
      </div>
    <div class="linha">
      <div class="container">
        <h3>${nome}</h3>
        <h4>R$${valor}</h4>
      </div>
    </div>
    <div class="linha">
      <div class="btnMmN">
        <button onClick="subtrai(item${ids}, total${ids}, ${ids})">-</button>
        <input type="number" value="0" id="item${ids}">
        <button onClick="soma(item${ids}, total${ids}, ${ids})">+</button>
      </div>
      <h5 id="total${ids}">Total R$0</h5>
    </div>
  </li>
  `);
  ids++;
}

addItem("X Salada", "10.00", "Pão, hambúrguer, queijo, alface, tomate, maionese, ketchup, mostarda, molho verde", "xSalada.jpeg", "lanchesLista");
addItem("X Salada", "10.00", "Pão, hambúrguer, queijo, alface, tomate, maionese, ketchup, mostarda, molho verde", "xSalada.jpeg", "lanchesLista");
addItem("X Salada", "10.00", "Pão, hambúrguer, queijo, alface, tomate, maionese, ketchup, mostarda, molho verde", "xSalada.jpeg", "lanchesLista");