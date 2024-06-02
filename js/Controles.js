export class Controles {
  constructor(carro, cenario) {
    this.carro = carro;
    this.cenario = cenario;
    this.init();
    this.intervaloBreak = null;
    this.intervaloAceleracao = null;
    this.acelerando = false;
    this.freiando = false;
  }

  init() {
    this.criarBotoes();
    this.adicionarEventos();
    this.cenario.iniciar();
  }

  criarBotoes() {
    const controleContainer = document.querySelector('.controle');

    this.botaoEsquerda = this.criarBotao('', 'esquerda');
    this.botaoDireita = this.criarBotao('', 'direita');
    this.botaoAcelerar = this.criarBotao('Acelerar', 'acelerar');
    this.botaoFrear = this.criarBotao('Frear', 'frear');

    controleContainer.appendChild(this.botaoEsquerda);
    controleContainer.appendChild(this.botaoDireita);
    controleContainer.appendChild(this.botaoFrear);
    controleContainer.appendChild(this.botaoAcelerar);
    
  }

  criarBotao(texto, id) {
    const botao = document.createElement('button');
    botao.textContent = texto;
    botao.id = id;
    return botao;
  }

  adicionarEventos() {
    this.botaoEsquerda.addEventListener('click', () => this.carro.moverParaEsquerda(this.cenario.velocidade));
    this.botaoDireita.addEventListener('click', () => this.carro.moverParaDireita(this.cenario.velocidade));
    this.botaoAcelerar.addEventListener('mousedown', () => this.startAccelerating());
    this.botaoAcelerar.addEventListener('mouseup', () => this.stopAccelerating());
    this.botaoFrear.addEventListener('mousedown', () => this.startBraking());
    this.botaoFrear.addEventListener('mouseup', () => this.stopBraking());

    document.addEventListener('keydown', (event) => {
      switch (event.key) {
        case 'ArrowRight':
        case 'd':
          this.carro.moverParaDireita(this.cenario.velocidade);
          break;
        case 'ArrowLeft':
        case 'a':
          this.carro.moverParaEsquerda(this.cenario.velocidade);
          break;
        case 'w':
          if (!this.acelerando) {
            this.startAccelerating();
            this.acelerando = true;
          }
          if(this.cenario.velocidade<=0){
            this.cenario.iniciar();
          }
          break;
        case 's':
          if (!this.freiando) {
            this.startBraking();
            this.freiando = true;
          }
          break;
      }
    });

    document.addEventListener('keyup', (event) => {
      switch (event.key) {
        case 'w':
          this.stopAccelerating();
          this.acelerando = false;
          break;
        case 's':
          this.stopBraking();
          this.freiando = false;
          break;
      }
    });
  }

  startAccelerating() {
    this.intervaloAceleracao = setInterval(() => {
      this.cenario.acelerar();
    }, 100);
  }

  stopAccelerating() {
    clearInterval(this.intervaloAceleracao);
  }

  startBraking() {
    this.intervaloBreak = setInterval(() => {
      this.cenario.frear();
    }, 100);
  }

  stopBraking() {
    clearInterval(this.intervaloBreak);
  }
}
