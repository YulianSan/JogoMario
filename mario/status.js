
const mario = new Image();
mario.src="./mario/mario.png";

export default {
    img:mario       ,
    x:100, y:450    ,
    bufado:0        ,
    //direções
    direita :false  ,
    esquerda:false  ,
    suspenso :false ,
    gravidade: 0    ,
}