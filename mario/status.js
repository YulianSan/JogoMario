
const mario = new Image();
mario.src="./mario/mario.png";

export default {
    img:mario       ,
    x:100, y:450    ,
    bufado:0        ,
    direcao:0       , //mostra a direção que ele está indo: 0-> parado, 1-> esquerda, -1-> direita
}