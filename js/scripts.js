let x = document.querySelector('.x')
let o = document.querySelector('.o')
let boxes = document.querySelectorAll('.box')
let buttons = document.querySelectorAll('#buttons-container button')
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
function checkWinConditional(){
    let b1box = document.getElementById('block-1')
    let b2box = document.getElementById('block-2')
    let b3box = document.getElementById('block-3')
    let b4box = document.getElementById('block-4')
    let b5box = document.getElementById('block-5')
    let b6box = document.getElementById('block-6')
    let b7box = document.getElementById('block-7')
    let b8box = document.getElementById('block-8')
    let b9box = document.getElementById('block-9')


    //HORIZONTAIS
    if(b1box.childNodes.length > 0 && b2box.childNodes.length > 0 && b3box.childNodes.length >0){
        let b1Child = b1box.childNodes[0].className
        let b2Child = b2box.childNodes[0].className
        let b3Child = b3box.childNodes[0].className
        if(b1Child == 'x' && b2Child == 'x' && b3Child == 'x'){
            //x ganhou
            console.log('o X ganhou')
        }else if(b1Child == 'o' && b2Child == 'o' && b3Child == 'o'){
            //o ganhou
            console.log('o O ganhou')
        }
    }

    if(b4box.childNodes.length > 0 && b5box.childNodes.length > 0 && b6box.childNodes.length > 0){
        let b4Child = b4box.childNodes[0].className
        let b5Child = b5box.childNodes[0].className
        let b6Child = b6box.childNodes[0].className
        if(b4Child == 'x' && b5Child == 'x' && b6Child == 'x'){
            //x ganhou
            console.log('x ganhou')
        }else if(b4Child == 'o' && b5Child == 'o' && b6Child == 'o'){
            //o ganhou
            console.log('o ganhou')
        }
    }


    if(b7box.childNodes.length > 0 && b8box.childNodes.length > 0 && b9box.childNodes.length > 0){
        let b7Child = b7box.childNodes[0].className
        let b8Child = b8box.childNodes[0].className
        let b9Child = b9box.childNodes[0].className
        if(b7Child == 'x' && b8Child == 'x' && b9Child == 'x'){
            //x ganhou
            console.log('x ganhou')
        }else if(b7Child == 'o' && b8Child == 'o' && b9Child == 'o'){
            //o ganhou
            console.log('o ganhou')
        }
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