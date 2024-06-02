import { Carro } from './Carro.js';
import { Controles } from './Controles.js';
import { Cenario } from './cenario/Cenario.js';
import { MostradorDeTempo } from './MostradorDeTempo.js';
import { Menu } from './menu/Menu.js';
import { init } from './menu/loading.js';
import { MonitorarPerformance } from "./MonitorarPerformance.js";

new MonitorarPerformance();

const carroElemento = document.querySelector('.carro');
const cenarioElemento = document.querySelector('.cenario');
const carro = new Carro(carroElemento);
const cenario = new Cenario(cenarioElemento);
new Controles(carro,cenario);
const mostradorDeTempo = new MostradorDeTempo(cenario);

const mainContainer = document.querySelector('#main-container');
const menu = new Menu(mainContainer);

document.addEventListener('visibilitychange', function(){
    menu.init()
    cenario.menu()
});


init();
mostradorDeTempo.iniciar()