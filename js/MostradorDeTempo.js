export class MostradorDeTempo {
    constructor(cenario) {
      this.tempo = 0;
      this.distanciaPercorrida = 0;
      this.intervaloTempo = null;
      this.cenario = cenario;
      this.mostrador = document.createElement('div');
      this.mostrador.id = 'mostrador-de-tempo';
      this.mostrador.style.position = 'fixed';
      this.mostrador.style.top = '10px';
      this.mostrador.style.left = '10px';
      this.mostrador.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
      this.mostrador.style.color = 'white';
      this.mostrador.style.width = '100px';
      this.mostrador.style.zIndex = '30';
      this.mostrador.style.padding = '5px';
      this.mostrador.style.borderRadius = '5px';
      document.body.appendChild(this.mostrador);
      this.atualizarMostrador();
    }
  
    iniciar() {
      this.intervaloTempo = setInterval(() => {
        this.tempo += 1;
        this.atualizarDistancia();
        this.atualizarMostrador();
      }, 1000);
    }
  
    parar() {
      clearInterval(this.intervaloTempo);
    }
  
    atualizarDistancia() {
      const velocidadeKmPorHora = this.cenario.velocidade; 
      const velocidadeMetrosPorSegundo = velocidadeKmPorHora / 3.6;
      this.distanciaPercorrida += velocidadeMetrosPorSegundo;
    }
  
    atualizarMostrador() {
      const minutos = Math.floor(this.tempo / 60);
      const segundos = this.tempo % 60;
      const tempoFormatado = `${minutos < 10 ? '0' : ''}${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
      const quilometragem = (this.distanciaPercorrida / 1000).toFixed(2); 
      this.mostrador.textContent = `Tempo: ${tempoFormatado} | Quilometragem: ${quilometragem} km`;
    }
  }
  