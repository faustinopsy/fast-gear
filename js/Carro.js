export class Carro {
  constructor(elemento) {
    this.carro = elemento;
    this.posicaoX = window.innerWidth / 2 - this.carro.clientWidth / 2;
    this.updatePosition();
  }

  updatePosition() {
    this.carro.style.left = `${this.posicaoX}px`;
  }

  moverParaEsquerda(velocidade) {
    if(velocidade < 1) return true
    const estrada = document.getElementById('estrada');
    const estradaRect = estrada.getBoundingClientRect();
    const carroRect = this.carro.getBoundingClientRect();
    if (carroRect.left > estradaRect.left ) {
      this.posicaoX -= 10;
      if (this.posicaoX < estradaRect.left) this.posicaoX = estradaRect.left;
      this.updatePosition();
    }
  }

  moverParaDireita(velocidade) {
    if(velocidade < 1) return true
    const estrada = document.getElementById('estrada');
    const estradaRect = estrada.getBoundingClientRect();
    const carroRect = this.carro.getBoundingClientRect();
    
    if (carroRect.right < estradaRect.right) {
      this.posicaoX += 10;
      if (this.posicaoX + carroRect.width > estradaRect.right) {
        this.posicaoX = estradaRect.right - carroRect.width;
      }
      this.updatePosition();
    }
  }

}
