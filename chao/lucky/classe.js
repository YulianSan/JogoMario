export default class lucky{
    
    static array    = [];
    static sorteado = [];

    static x = 41      ;
    static y = 0       ;
    static w = 78 - 41 ;
    static h = 36      ;

    static size  = 35  ;
    static nome  = "lucky" ;

    constructor( x , y ){

        this.x = x;
        this.y = y;

    }

    destruir( luckyAbatido ) {
        
        luckyAbatido.array.push(
            new luckyAbatido( this.x, this.y )
        )

        let indice = lucky.array.findIndex( v => {
            return v.x === this.x;
        });
        
        if( this.sorteado ) 
            console.log("cogumelo caindo . . .");

        lucky.array.splice(indice, 1);

        return "Destruido";
    }

}