import { Carro } from './Carro.js';
import { Controles } from './Controles.js';
import { Cenario } from './cenario/Cenario.js';
import { MostradorDeTempo } from './MostradorDeTempo.js';
import { Menu } from './menu/Menu.js';
import { init } from './menu/loading.js';
import { MonitorarPerformance } from "./MonitorarPerformance.js";
import { Obstaculo } from './Obstaculo.js';
import { RegistarSW } from "./RegistrarSw.js";
//new RegistarSW();
new MonitorarPerformance();

const mainContainer = document.querySelector('#main-container');
const menu = new Menu(mainContainer);

const carroElemento = document.querySelector('.carro');
const cenarioElemento = document.querySelector('.cenario');
const carro = new Carro(carroElemento);
const cenario = new Cenario(cenarioElemento);
new Controles(carro,cenario);
const mostradorDeTempo = new MostradorDeTempo(cenario);
const obstaculo = new Obstaculo(cenario, carro);


document.addEventListener('visibilitychange', function(){
    menu.init()
    cenario.menu()
});
document.getElementById('restart-button').addEventListener('click', () => {
    location.reload(); 
  });
  

init();
mostradorDeTempo.iniciar()
obstaculo.iniciar();