import { Carro } from '../Carro.js';
import { Menu } from './Menu.js';


const mainContainer = document.querySelector('#main-container');
const menu = new Menu(mainContainer);
menu.init();

const carroElemento = document.querySelector('.carro');
const carro = new Carro(carroElemento);

const container0 = document.querySelector(`#loading`);
const container3 = document.querySelector(`.pai-loading`);

const loading = document.querySelector(`.abertura`);
const BACKGROUND_INICIAL = `url('./img/loading.png') -270px 0px`;
const BACKGROUND_ATIVO = `url('./img/loading.png') -270px -270px`;
const POSICAO_SOMADA = 270;
const POSICAO_MAXIMA = 1200;
let posicaoY=0;
let  loop= null;

export function init(){
  loop = setInterval(iniciarAnimacao, 600);
}

export function iorix(){
  container0.style.display = 'block';
  container3.style.display = 'block';
  loading.style.background = BACKGROUND_ATIVO;
}
function pararAnimacao() {
  loading.style.background = BACKGROUND_ATIVO;
  mostrarContainer(false);
}

function mostrarContainer(show) {
  container0.style.display = show ? 'block' : 'none';
  container3.style.display = show ? 'block' : 'none';
}
function iniciarAnimacao(){
  posicaoY+=POSICAO_SOMADA;
  loading.style.background = `url('./img/loading.png') -30px -${posicaoY}px`
    if(posicaoY >= POSICAO_MAXIMA){
    clearInterval(loop);
    pararAnimacao();
    }
}
