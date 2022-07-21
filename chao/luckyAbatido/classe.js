export default class luckyAbatido{
    
    static array = [];

    static x = 81      ;
    static y = 0       ;
    static w = 118 - 81;
    static h = 36      ;

    static size  = 35  ;
    static nome  = "luckyAbatido" ;

    constructor( x , y ){

        this.x = x;
        this.y = y;
        this.etapaAnimacao = 0;
        
        //animação básica para que o bloco suba e desça rapidamento
        this.animar =
            () => { 
                if( this.y > y - 5 && this.etapaAnimacao === 0) {
                    this.y--;
                    return;
                }
                else if( this.etapaAnimacao === 0 ) {
                    this.etapaAnimacao++; 
                    return;
                }

                if( this.y < y && this.etapaAnimacao === 1) {
                    this.y++;
                    return;
                }
                else if( this.etapaAnimacao === 1 ) {
                    this.etapaAnimacao++; 
                    return;
                }

                else { this.animar = null; this.etapaAnimacao = null}
            }
        
    }

}