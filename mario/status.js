
const mario = new Image();
mario.src="./mario/mario.png";

export default {
    img:mario               ,
    x:100, y:450            ,
    w:0  , h:0              ,
    
    //constrole
    ultimaDirecao : "direita",
    
    camera:{
        x:0,
        y:0
    },

    //estado
    bufado: 0               ,
    vivo  : true            ,
    vel   : 2               ,

    //direções
    direita :false          ,
    esquerda:false          ,
    suspenso :false         ,
    gravidade: 0            ,

    //frames
    framesAndando: [
        {
            x:13,       y:17,      w:40-13,         h:51-17
        },
        
        {
            x:74,       y:17,      w:108-74,        h:53-17
        }
    ],

    framesPulando: [
        {
            x:9,        y:105,      w:45-9,         h:141-105
        },
        
        {
            x:74,       y:105,      w:110-74,       h:141-105
        },

        {
            x:205,      y:17,       w:241-205,      h:53-17
        }
    ],

    framesFalecendo: [
        {
            x:925,      y:105,      w:961-925,      h:141-105
        }
    ]
}