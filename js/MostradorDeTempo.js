export class MostradorDeTempo {
    constructor(cenario) {
      this.tempo = 0;
      this.distanciaPercorrida = 0;
      this.intervaloTempo = null;
      this.cenario = cenario;
      this.mostrador = this.criarMostradores('tempo',10)
      this.km = this.criarMostradores('km',40)
      document.body.appendChild(this.mostrador);
      document.body.appendChild(this.km);
      this.atualizarMostrador();
    }
    criarMostradores(id,top){
      const mostrador = document.createElement('div');
      mostrador.id = id;
      mostrador.style.position = 'fixed';
      mostrador.style.top = `${top}px`;
      mostrador.style.left = '10px';
      mostrador.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
      mostrador.style.color = 'white';
      mostrador.style.width = '130px';
      mostrador.style.zIndex = '30';
      mostrador.style.padding = '5px';
      mostrador.style.borderRadius = '5px';
      return mostrador
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
      this.mostrador.textContent = `Tempo: ${tempoFormatado}`;
      this.km.datasetID = quilometragem
      this.km.textContent = `Quilometragem: ${quilometragem} km`;
    }
  }
  