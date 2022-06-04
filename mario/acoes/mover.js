var mario;
var movimentos ={
    ArrowUp    : ()=>{ mario.direcao = 0  },
    ArrowDown  : ()=>{ mario.direcao = 0  },
    ArrowLeft  : ()=>{ mario.direcao = 1  },
    ArrowRight : ()=>{ mario.direcao = -1 },
    Parar      : ()=>{ mario.direcao = 0  }
}

export default function mover(status,chave){
    mario = status;
    movimentos[chave]
        ? movimentos[chave]()
        : console.log("n existe");
}

// ArrowDown
// teclado.js:4 ArrowLeft
// teclado.js:4 ArrowRight