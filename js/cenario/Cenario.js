  export class Cenario {
    constructor(elemento) {
      this.cenario = elemento;
      this.velocidade = 0;
      this.maxSpeed = 180; 
      this.minSpeed = 0; 
      this.acceleration = 2; 
      this.deceleration = 1;
      this.posicao = 0;
      this.intervaloCenario = null;
    }
  
    iniciar() {
      this.intervaloCenario = setInterval(() => {
        this.atualizaCenario();
      }, 100);
    }
  
    atualizaCenario() {
      this.posicao += this.velocidade;
      this.cenario.style.backgroundPositionY = `${this.posicao}px`;
      document.querySelector('.velocidade').style.height =  `${this.velocidade}px`;
      document.querySelector('#velocidade-numero').textContent= `${this.velocidade}`;
      const quilometragem = document.querySelector('#km')
      if(quilometragem.datasetID >= '4'){
        this.cenario.style.background = "url(../img/pista_04.png)"
        this.cenario.style.backgroundPositionY = `${this.posicao}px`;
      }
      if(quilometragem.datasetID >= '6'){
        this.cenario.style.background = "url(../img/pista_06.png)"
        this.cenario.style.backgroundPositionY = `${this.posicao}px`;
      }
      if (this.velocidade <= 0) {
        clearInterval(this.intervaloCenario);
      }
    }
  
    acelerar() {
      if (this.velocidade <= this.maxSpeed) {
        this.velocidade += this.acceleration;
      }
    }
  
    frear() {
      if (this.velocidade > this.minSpeed) {
        this.velocidade -= this.deceleration;
      } else if (this.velocidade <= 0) {
        clearInterval(this.intervaloCenario);
      }
    }
  
    pararCenario(intervaloAtual) {
      clearInterval(intervaloAtual);
      this.velocidade = 0;
    }
    menu() {
      this.velocidade = 0;
    }
  }
  