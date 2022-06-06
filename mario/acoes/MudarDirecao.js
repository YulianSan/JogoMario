var mario;
var movimentos ={
    ArrowLeft  : ()=>{ mario.esquerda = true; },
    ArrowRight : ()=>{ mario.direita  = true; },
    ArrowUp    : ()=>{ 
        if(!mario.suspenso){
            mario.gravidade = -5;
            mario.suspenso  = true
        };
        
    }
}

var PararMovimentos ={
    ArrowLeft  : ()=>{ mario.esquerda  = false; },
    ArrowRight : ()=>{ mario.direita = false; }
}

export default function MudarDirecao(status,chave, ParaOuMove="m"){
    mario = status;
    if(ParaOuMove  === "m"){
        movimentos[chave]
            ? movimentos[chave]()
            : null;
        return
    }

    if(ParaOuMove  === "p"){
        PararMovimentos[chave]
            ? PararMovimentos[chave]()
            : null;
        return
    }
}