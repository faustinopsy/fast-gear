export class Obstaculo {
    constructor(cenario, carro) {
      this.cenario = cenario;
      this.carro = carro;
      this.obstaculos = [];
      this.intervaloObstaculo = null;
      this.danos= 0;
    }
  
    iniciar() {
      this.intervaloObstaculo = setInterval(() => {
        if (this.cenario.velocidade > 10) {
          this.criarObstaculo();
        }
        this.moverObstaculos();
        this.verificarColisao();
      }, 2000);
    }
  
    criarObstaculo() {
      const maxTentativas = 10;
      let tentativas = 0;
      let obstaculo;
      let obstaculoPosicao;
      let posicaoValida = false;
  
      while (tentativas < maxTentativas && !posicaoValida) {
        obstaculo = document.createElement('div');
        obstaculo.classList.add('obstaculo', 'carro');
        obstaculo.style.position = 'absolute';
        obstaculo.style.top = '-40px';
        obstaculoPosicao = 470 + Math.random() * 280;
        obstaculo.style.left = `${obstaculoPosicao}px`;
        posicaoValida = !this.verificarSobreposicao(obstaculoPosicao);
        tentativas++;
      }
  
      if (posicaoValida) {
        this.cenario.cenario.appendChild(obstaculo);
        this.obstaculos.push(obstaculo);
      }
    }
  
    verificarSobreposicao(novaPosicao) {
      return this.obstaculos.some(obstaculo => {
        const obstaculoRect = obstaculo.getBoundingClientRect();
        const novaRect = {
          left: novaPosicao,
          right: novaPosicao + 50 
        };
        return (
          novaRect.left < obstaculoRect.right &&
          novaRect.right > obstaculoRect.left
        );
      });
    }
  
    moverObstaculos() {
      this.obstaculos.forEach(obstaculo => {
        obstaculo.style.top = `${parseInt(obstaculo.style.top) + this.cenario.velocidade}px`;
        
        if (parseInt(obstaculo.style.top) > window.innerHeight) {
          obstaculo.remove();
          this.obstaculos = this.obstaculos.filter(o => o !== obstaculo);
        }
      });
    }
  
    verificarColisao() {
      const carroRect = this.carro.carro.getBoundingClientRect();
      this.obstaculos.forEach(obstaculo => {
        const obstaculoRect = obstaculo.getBoundingClientRect();
        
        if (
          carroRect.left < obstaculoRect.left + obstaculoRect.width &&
          carroRect.left + carroRect.width > obstaculoRect.left &&
          carroRect.top < obstaculoRect.top + obstaculoRect.height &&
          carroRect.height + carroRect.top > obstaculoRect.top
        ) {
          const colisaoTraseira = carroRect.top < obstaculoRect.bottom && carroRect.bottom > obstaculoRect.bottom;
          const colisaoLateral = carroRect.left < obstaculoRect.right && carroRect.right > obstaculoRect.left;
        
          if (colisaoTraseira) {
            console.log('Colisão traseira detectada');
            this.danos=this.danos+10
            document.getElementById('vida-preenchimento').style.clipPath = `inset( 0 0 ${100 - this.danos}%)`;
          } else if (colisaoLateral) {
            console.log('Colisão lateral detectada');
            this.danos=this.danos+1
            document.getElementById('vida-preenchimento').style.clipPath = `inset( 0 0 ${100 - this.danos}%)`;
          }

          if (this.danos >= 100) {
            this.mostrarGameOver();
          }

          obstaculo.remove();
          this.obstaculos = this.obstaculos.filter(o => o !== obstaculo);
        }
      });
    }
    mostrarGameOver() {
        document.getElementById('game-over').style.display = 'block';
      }
  }
  