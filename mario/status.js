
const mario = new Image();
mario.src="./mario/mario.png";

const marioBuff0 = {
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

const marioBuff1 = {
    framesAndando: [
        {
            x:10,       y:180,      w:42-10,         h:239-180
        },
        
        {
            x:75,       y:180,      w:108-75,        h:239-180
        }
    ],

    framesPulando: [
        {
            x:141,       y:180,      w:176-141,        h:239-180
        },
        
        {
            x:206,       y:182,      w:241-206,       h:239-182
        }
    ],

    framesFalecendo: [
        {
            x:925,      y:105,      w:961-925,      h:141-105
        }
    ]
}

const marioBuff2 = {
    framesAndando: [
        {
            x:12,       y:354,      w:42-12,         h:413-354
        },
        
        {
            x:75,       y:354,      w:110-75,        h:413-354
        }
    ],

    framesPulando: [
        {
            x:141,       y:357,      w:176-141,        h:413-357
        },
        
        {
            x:206,       y:357,      w:241-206,       h:413-357
        }
    ],

    framesFalecendo: [
        {
            x:925,      y:105,      w:961-925,      h:141-105
        }
    ]
}


export default {
    img:mario               ,
    x: 250, y: 480          ,//500
    h: 36 , w: 30           ,
    
    //constrole
    ultimaDirecao : "direita",
    
    camera:{
        x:0,
        y:0
    },

    //estado
    bufado: 0               ,
    vivo  : true            ,
    vel   : 2.5             ,

    //direções
    direita :false          ,
    esquerda:false          ,
    suspenso :false         ,
    gravidade: 0            ,

    //frames
    frames: [marioBuff0, marioBuff1, marioBuff2]
}