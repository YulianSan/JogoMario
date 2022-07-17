export default class Mapa{
    
    constructor(funcLoop = [], funcInicio = []){
        this.loop = [...funcLoop];
        this.inicio = [...funcInicio];
    }

    funcoesLoop() {
        this.loop.forEach( v =>{
            if( typeof v === 'function')
                v();
        })
    }

    funcoesInicio() {
        this.inicio.forEach( v =>{
            if( typeof v === 'function')
                v();
        })
    }
}