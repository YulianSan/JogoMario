const bloco = new Image();
bloco.src = `./chao/blocos.png`;

export default {
    img: bloco,
    
    terraArray: [],
    luckyArray: [],

    terra: {
        x: 0 , y: 0 ,
        w: 39, h: 36
    },
    
    lucky: {
        x: 41,    y: 0 ,
        w: 77 - 41, h:36
    }

}