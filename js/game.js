let x = document.querySelector('.x')
let o = document.querySelector('.o')
let boxes = document.querySelectorAll('.box')

let messageContainer = document.querySelector('#message')
let messageText = document.querySelector('#message p')
let secondPlayer;

//Contador de Jogadas
let player1 = 0
let player2 = 0

//Adicionando evento de click aos boxes
for (let i = 0; i < boxes.length; i++) {

    //Quando alguem clica na box
    boxes[i].addEventListener('click', function () {
        let el = quemJoga(player1, player2)
        if (this.childNodes.length == 0) {
            let cloneEL = el.cloneNode(true)
            this.appendChild(cloneEL)

            //Computa a Jogada
            if (player1 == player2) {
                player1++
            } else {
                player2++
            }

            checkWinConditional()
        }
    })
}







//FUNÇÃO PRA VER QUEM GANHA
function checkWinConditional() {
    let b1box = document.querySelector('#block-1')
    let b2box = document.getElementById('block-2')
    let b3box = document.getElementById('block-3')
    let b4box = document.getElementById('block-4')
    let b5box = document.getElementById('block-5')
    let b6box = document.getElementById('block-6')
    let b7box = document.getElementById('block-7')
    let b8box = document.getElementById('block-8')
    let b9box = document.getElementById('block-9')


    //HORIZONTAIS
    if (b1box.childNodes.length > 0 && b2box.childNodes.length > 0 && b3box.childNodes.length > 0) {
        let b1Child = b1box.childNodes[0].className
        let b2Child = b2box.childNodes[0].className
        let b3Child = b3box.childNodes[0].className
        if (b1Child == 'x' && b2Child == 'x' && b3Child == 'x') {
            //x ganhou
            declareWinner('x')
        } else if (b1Child == 'o' && b2Child == 'o' && b3Child == 'o') {
            //o ganhou
            declareWinner('o')
        }
    }
    if (b4box.childNodes.length > 0 && b5box.childNodes.length > 0 && b6box.childNodes.length > 0) {
        let b4Child = b4box.childNodes[0].className
        let b5Child = b5box.childNodes[0].className
        let b6Child = b6box.childNodes[0].className
        if (b4Child == 'x' && b5Child == 'x' && b6Child == 'x') {
            //x ganhou
            declareWinner('x')
        } else if (b4Child == 'o' && b5Child == 'o' && b6Child == 'o') {
            //o ganhou
            declareWinner('o')
        }
    }
    if (b7box.childNodes.length > 0 && b8box.childNodes.length > 0 && b9box.childNodes.length > 0) {
        let b7Child = b7box.childNodes[0].className
        let b8Child = b8box.childNodes[0].className
        let b9Child = b9box.childNodes[0].className
        if (b7Child == 'x' && b8Child == 'x' && b9Child == 'x') {
            //x ganhou
            declareWinner('x')
        } else if (b7Child == 'o' && b8Child == 'o' && b9Child == 'o') {
            //o ganhou
            declareWinner('o')
        }
    }

    //VERTICAIS
    if (b1box.childNodes.length > 0 && b4box.childNodes.length > 0 && b7box.childNodes.length > 0) {
        let b1Child = b1box.childNodes[0].className
        let b4Child = b4box.childNodes[0].className
        let b7Child = b7box.childNodes[0].className
        if (b1Child == 'x' && b4Child == 'x' && b7Child == 'x') {
            declareWinner('x')
        } else if (b1Child == 'o' && b4Child == 'o' && b7Child == 'o') {
            declareWinner('o')
        }
    }
    if (b2box.childNodes.length > 0 && b5box.childNodes.length > 0 && b8box.childNodes.length > 0) {
        let b2Child = b2box.childNodes[0].className
        let b5Child = b5box.childNodes[0].className
        let b8Child = b8box.childNodes[0].className
        if (b2Child == 'x' && b5Child == 'x' && b8Child == 'x') {
            declareWinner('x')
        } else if (b2Child == 'o' && b5Child == 'o' && b8Child == 'o') {
            declareWinner('o')
        }
    }
    if (b3box.childNodes.length > 0 && b6box.childNodes.length > 0 && b9box.childNodes.length > 0) {
        let b3Child = b3box.childNodes[0].className
        let b6Child = b6box.childNodes[0].className
        let b9Child = b9box.childNodes[0].className
        if (b3Child == 'x' && b6Child == 'x' && b9Child == 'x') {
            declareWinner('x')
        } else if (b3Child == 'o' && b6Child == 'o' && b9Child == 'o') {
            declareWinner('o')
        }
    }

    //DIAGONAIS
    if (b1box.childNodes.length > 0 && b5box.childNodes.length > 0 && b9box.childNodes.length > 0) {
        let b1Child = b1box.childNodes[0].className
        let b5Child = b5box.childNodes[0].className
        let b9Child = b9box.childNodes[0].className
        if (b1Child == 'x' && b5Child == 'x' && b9Child == 'x') {
            declareWinner('x')
        } else if (b1Child == 'o' && b5Child == 'o' && b9Child == 'o') {
            declareWinner('o')
        }
    }
    if (b7box.childNodes.length > 0 && b5box.childNodes.length > 0 && b3box.childNodes.length > 0) {
        let b7Child = b7box.childNodes[0].className
        let b5Child = b5box.childNodes[0].className
        let b3Child = b3box.childNodes[0].className
        if (b7Child == 'x' && b5Child == 'x' && b3Child == 'x') {
            declareWinner('x')
        } else if (b7Child == 'o' && b5Child == 'o' && b3Child == 'o') {
            declareWinner('o')
        }
    }

    //GALOU
    let counter = 0
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].childNodes[0] != undefined) {
            counter++
        }
    }
    if (counter == 9) {
        declareWinner()
    }

}


//FUNÇÃO PRA VER QUEM É A VEZ DE JOGAR
function quemJoga(player1, player2) {
    if (player1 == player2) {
        //x
        el = x
    } else {
        //o
        el = o
    }

    return el
}

//FUNÇÃO LIMPO O JOGO, DECLARA O VENCEDOR E ATUALIZA O PLACAR
function declareWinner(winner) {
    let score1 = document.querySelector('#scoreboard-1')
    let score2 = document.querySelector('#scoreboard-2')
    let msg = ''

    if (winner == 'x') {
        score1.textContent = parseInt(score1.textContent) + 1
        msg = 'O jogador 1 venceu'
    } else if (winner == 'o') {
        score2.textContent = parseInt(score2.textContent) + 1
        msg = 'O jogador 2 venceu'
    } else {
        msg = 'GALOU'
    }

    messageText.innerHTML = msg
    messageContainer.classList.remove('hide')

    //esconde mensagem
    setTimeout(function(){
        messageContainer.classList.add('hide')
    },1000)

    
    player1 = 0
    player2 = 0

    //remove as marcações no tabuleiro
    let boxToRemove = document.querySelectorAll('.box div')
    for(let i = 0; i < boxToRemove.length; i++){
        boxToRemove[i].parentNode.removeChild(boxToRemove[i])
    }
}