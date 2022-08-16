// CÓDIGO CARTÕES ROBO  

const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar'); 
const cartoes = document.querySelectorAll('.robo-cor');
let cartaoAtual = 0;

function esconderCartaoSelecionado() {
  const cartaoSelecionado = document.querySelector('.selecionado');
  cartaoSelecionado.classList.remove('selecionado'); 
}

function mostrarCartao(indiceCartao) {
  cartoes[indiceCartao].classList.add('selecionado'); 
}

btnAvancar.addEventListener('click', function(){
  if(cartaoAtual === cartoes.length -1) {
    cartaoAtual = -1;
  } 

  esconderCartaoSelecionado();

  cartaoAtual++; 
  mostrarCartao(cartaoAtual); 
});


btnVoltar.addEventListener('click', function(){
  if(cartaoAtual === 0) {
    cartaoAtual = cartoes.length;
  };

  esconderCartaoSelecionado();

  cartaoAtual--; 
  mostrarCartao(cartaoAtual); 
});

//  CÓDIGO ESTATÍSTICAS

const subtrair = document.querySelector("#subtrair");
const somar = document.querySelector("#somar");

const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach( (elemento) => {
  elemento.addEventListener("click", (evento) => {
    manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
    atualizaEstatisticas(evento.target.dataset.peca);
  })
})

function manipulaDados(operacao, controle) {
  const peca = controle.querySelector("[data-contador]");

  if(operacao === "-") {
    peca.value = parseInt(peca.value) -1;
  } else {
    peca.value = parseInt(peca.value) +1;
  }
}

function atualizaEstatisticas(peca) {
  estatisticas.forEach( (elemento) => {
    elemento.textContent = parseInt(elemento.textContent) + pecas[peca] [elemento.dataset.estatistica];
  })
}
