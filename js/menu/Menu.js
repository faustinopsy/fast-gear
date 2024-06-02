export class Menu {
    constructor(container) {
        this.container = container; 
        this.selectedCar = null; 
    }

    init() {
        this.render();
        this.afterRender();
    }

    render() {
        this.container.innerHTML = '';

        const menuHtml = `
            <div class="menu">
                <h1>Bem-vindo ao Jogo!</h1>
                <button id="inicia-game">Iniciar Jogo</button>
                <details>
                <summary id="opcao">Opções</summary>
                <div>
                    <div class="pai-menu">
                        <div id="carro1" style="background: url(../img/carros.png) -33px -17px"></div>
                        <div id="carro2" style="background: url(../img/carros.png) -146px -17px"></div>
                        <div id="carro3" style="background: url(../img/carros.png) -257px -17px"></div>
                        <div id="carro4" style="background: url(../img/carros.png) -369px -17px"></div>
                        <div id="carro5" style="background: url(../img/carros.png) -656px -238px"></div>
                        <div id="carro6" style="background: url(../img/carros.png) 148px -236px"></div>
                    </div>
                </div>
                </details>
            </div>
        `;
        this.container.innerHTML = menuHtml;
    }

    afterRender() {
        const iniciaopcaoBotao = this.container.querySelector('#inicia-game');
        const opcaoBotao = this.container.querySelector('#opcao');

        iniciaopcaoBotao.addEventListener('click', () => {
            this.iniciaJogo();
        });

        opcaoBotao.addEventListener('click', () => {
            this.mostrOpcoes();
        });

        document.querySelectorAll('.pai-menu div').forEach(item => {
            item.addEventListener('click', () => {
                document.querySelectorAll('.pai-menu div').forEach(el => el.classList.remove('selected'));
                item.classList.add('selected');
                this.selectedCar = item.id; 
            });
        });
    }

    iniciaJogo() {
        console.log('Iniciando o jogo...');
        this.container.style.display = 'none'; 
        this.updateCarImage(); 
    }

    mostrOpcoes() {
        console.log('Mostrando opções...');
    }

    updateCarImage() {
        if (this.selectedCar) {
            const carro = document.querySelector('.carro');
            carro.style.background = document.getElementById(this.selectedCar).style.background;
            
        }
    }
}
