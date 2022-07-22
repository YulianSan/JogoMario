import coletouMoeda from '../mapas/placar/coletou/moeda.js'

const moeda = new Image();
moeda.src = "./moeda/moeda.png";

export default class Moeda{
    static array = [];
    static h = 37*2/3;
    static w = 31*2/3;
    static img = moeda;
    
    constructor(x, y){
        coletouMoeda();

        this.x = x;
        this.y = y;
        this.w = Moeda.w;//n é static pq ele sera alterado

        this.etapaAnimacao = 0;
        this.giroDeFrente= true;

        this.animar = 
            () =>{
                if( this.w > 0 && this.giroDeFrente){
                    this.w -= 3;
                }
                else this.giroDeFrente = false

                if( this.w < Moeda.w && !this.giroDeFrente){
                    this.w += 3;
                }
                else this.giroDeFrente = true

                if( this.y > y - 60 && this.etapaAnimacao === 0){
                    this.y-= 2.5;
                    return;
                }
                else if ( this.etapaAnimacao === 0){
                    this.etapaAnimacao++; 
                    return;
                }

                if (this.y < y && this.etapaAnimacao == 1){
                    this.y+= 2.5;
                    return;
                }
                else {
                    this.animar = null; 
                    this.etapaAnimacao = null;
                    
                    let i = Moeda.array.findIndex( v =>{
                        return v.x === this.x && v.y == this.y // procura a moeda que é o this,
                        // eu faço procurando pelas propriedade x e y
                    });
                    
                    Moeda.array.splice( i,1 );//deleta essa moeda depois de terminar sua animação
                }

            }
    }
}