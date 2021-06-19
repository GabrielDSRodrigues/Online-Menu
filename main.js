function id(e) { return document.getElementById(e); }
function WhatsAppGo(numero, texto) { if (numero != false) window.open(`https://api.whatsapp.com/send?phone=55${numero}&text=${window.encodeURIComponent(texto)}`); }

class cardapioItem {
  nome;
  valor;
  ingredientes;
}

class pedido {
  quantidade;
  nome;
  valorUN;
  valor() { return (this.valorUN * this.quantidade); }
}


let pop = id("pop");
pop.style.display = "none";

let ldp = id("listaDePedidos");

let ids = 0;
let itens = [];
let itensPedidos = [];
let itensPedidosLista = "";

id("btnPedir").addEventListener("click", () => {
  let popSD = pop.style.display;
  if (popSD == "block") {
    pop.style.display = "none";
  } else if (popSD == "none") {
    pop.style.display = "block";
    pop.style.left = ((document.body.offsetWidth / 2) - pop.offsetWidth / 2) + "px";
    pop.style.top = ((document.body.offsetHeight / 2) - pop.offsetHeight / 2) + "px";
  }
});

id("btnPedirAgr").addEventListener("click", () => { WhatsAppGo(numero, itensPedidosLista); });


function pedidosAtl() {
  itensPedidosLista = "";
  for (let i = 0; i < itensPedidos.length; i++) {
    itensPedidosLista += `*${itensPedidos[i].quantidade}* - ${itensPedidos[i].nome} | *R$${itensPedidos[i].valor()}*\n`;
  }
  ldp.innerHTML = "";
  for (let i = 0; i < itensPedidos.length; i++) {
    ldp.insertAdjacentHTML("beforeend", `
      <li>
        <p><b>${itensPedidos[i].quantidade}</b>-${itensPedidos[i].nome} <b>R$${itensPedidos[i].valor()}</b></p>
      </li>
    `);
  }
}

function addPedido(qnt, nome, valor) {
  let jaAdd = false;
  let pos;
  for (let i = 0; i < itensPedidos.length; i++) {
    if (itensPedidos[i].nome == nome) {
      jaAdd = true;
      pos = i;
    }
  }
  if (jaAdd == false) {
    let novo = new pedido();
    novo.quantidade = qnt;
    novo.nome = nome;
    novo.valorUN = valor;
    itensPedidos.push(novo);
  } else if (jaAdd == true) {
    itensPedidos[pos].quantidade++;
  }
  pedidosAtl();
}

function rmvPedido(iten, nome) {
  let pos;
  for (let i = 0; i < itensPedidos.length; i++) {
    if (itensPedidos[i].nome == nome) {
      pos = i;
    }
  }
  if (itensPedidos[pos].quantidade == 1) {
    itensPedidos.splice(iten, iten + 1);
  } else if (itensPedidos[pos].quantidade > 1) {
    itensPedidos[pos].quantidade--;
  }
  pedidosAtl();
}

function soma(e, total, pos, nome, valor) {
  let value = e.value;
  e.value = parseInt(value) + 1;
  addPedido(parseFloat(e.value), nome, valor);
  total.innerText = "Total R$" + (parseFloat(itens[pos].valor) * e.value);
}

function subtrai(e, total, pos, nome) {
  let value = e.value;
  if (value > 0) {
    e.value = parseInt(value) - 1;
    rmvPedido(parseInt(e.value), nome);
    total.innerText = "Total R$" + (parseFloat(itens[pos].valor) * e.value)
  }
}

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
        <button onClick="subtrai(item${ids}, total${ids}, ${ids}, '${nome}')">-</button>
        <input type="number" value="0" id="item${ids}">
        <button onClick="soma(item${ids}, total${ids}, ${ids}, '${nome}', '${valor}')">+</button>
      </div>
      <h5 id="total${ids}">Total R$0</h5>
    </div>
  </li>
  `);
  ids++;
}