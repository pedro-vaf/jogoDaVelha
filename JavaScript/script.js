let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.getElementById("message");
let messageText = document.querySelector("#message p");
let secondPlayer;

/* Contador de jogadas */
let player1 = 0;
let player2 = 0;

/* variável de controle */
let win = false;

/* Evento para saber se é 2 players ou IA */
for (let icont = 0; icont < buttons.length; icont += 1){
    buttons[icont].addEventListener("click", function(){
        secondPlayer = this.getAttribute("id");

        for (let jcont = 0; jcont < buttons.length; jcont += 1){
            buttons[jcont].style.display = "none";
        }

        setTimeout(function(){
            let container = document.querySelector("#container");
            container.classList.remove("hide");
        }, 200);
    })
}

function checkJogador(player1, player2){
    let aux = 0;
    /* Computar a jogada */
    if (player1 == player2){
        aux += 1;
    } else {
        aux += 1;
    }

    return aux;
}

function checkGanhador(){

    let b1 = document.getElementById("block-1");
    let b2 = document.getElementById("block-2");
    let b3 = document.getElementById("block-3");
    let b4 = document.getElementById("block-4");
    let b5 = document.getElementById("block-5");
    let b6 = document.getElementById("block-6");
    let b7 = document.getElementById("block-7");
    let b8 = document.getElementById("block-8");
    let b9 = document.getElementById("block-9");

    /* Horizontal - Linha de cima */
    if (b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0){
        
        let b1child = b1.childNodes[0].className;
        let b2child = b2.childNodes[0].className;
        let b3child = b3.childNodes[0].className;

        if (b1child == 'x' && b2child == 'x' && b3child == 'x'){
            declareWinner('x');
            return true;
        } else if (b1child == 'o' && b2child == 'o' && b3child == 'o') {
            declareWinner('o');
            return true;
        }
    }

    /* Horizontal - Linha do meio */
    if (b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {
        
        let b4child = b4.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b6child = b6.childNodes[0].className;

        if (b4child == 'x' && b5child == 'x' && b6child == 'x') {
            declareWinner('x');
            return true;
        } else if (b4child == 'o' && b5child == 'o' && b6child == 'o') {
            declareWinner('o');
            return true;
        }
    }

    /* Horizontal - Linha de baixo */
    if (b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {
        
        let b7child = b7.childNodes[0].className;
        let b8child = b8.childNodes[0].className;
        let b9child = b9.childNodes[0].className;

        if (b7child == 'x' && b8child == 'x' && b9child == 'x') {
            declareWinner('x');
            return true;
        } else if (b7child == 'o' && b8child == 'o' && b9child == 'o') {
            declareWinner('o');
            return true;
        }
    }
    
    /* Vertical - Linha da esquerda */
    if (b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {
        let b1child = b1.childNodes[0].className;
        let b4child = b4.childNodes[0].className;
        let b7child = b7.childNodes[0].className;

        if (b1child == 'x' && b4child == 'x' && b7child == 'x') {
            declareWinner('x');
            return true;
        } else if (b1child == 'o' && b4child == 'o' && b7child == 'o') {
            declareWinner('o');
            return true;
        }
    }

    /* Vertical - Linha do meio */
    if (b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {
        let b2child = b2.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b8child = b8.childNodes[0].className;

        if (b2child == 'x' && b5child == 'x' && b8child == 'x') {
            declareWinner('x');
            return true;
        } else if (b2child == 'o' && b5child == 'o' && b8child == 'o') {
            declareWinner('o');
            return true;
        }
    }

    /* Vertical - Linha da direita */
    if (b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b3child = b3.childNodes[0].className;
        let b6child = b6.childNodes[0].className;
        let b9child = b9.childNodes[0].className;

        if (b3child == 'x' && b6child == 'x' && b9child == 'x') {
            declareWinner('x');
            return true;
        } else if (b3child == 'o' && b6child == 'o' && b9child == 'o') {
            declareWinner('o');
            return true;
        }
    }

    /* Diagonal principal: blocos 1, 5, 9 */
    if (b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b1child = b1.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b9child = b9.childNodes[0].className;

        if (b1child == 'x' && b5child == 'x' && b9child == 'x') {
            declareWinner("x");
            return true;
        } else if (b1child == 'o' && b5child == 'o' && b9child == 'o') {
            declareWinner('o');
            return true;
        }
    }

    /* Diagonal secundária: blocos 3, 5, 7 */
    if (b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {
        let b3child = b3.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b7child = b7.childNodes[0].className;

        if (b3child == 'x' && b5child == 'x' && b7child == 'x') {
            declareWinner("x");
            return true;
        } else if (b3child == 'o' && b5child == 'o' && b7child == 'o') {
            declareWinner('o');
            return true;
        }
    }

    /* Deu velha */
    let contador = 0;
    for (let icont = 0; icont < boxes.length; icont += 1){
        if (boxes[icont].childNodes[0] != undefined){
            contador += 1;
        } 
    }

    if (contador == 9){
        declareWinner('Deu Velha');
        return true;
    }

    return false;
}


/* Adicionando o evento de click aos boxes */
for (let icont = 0; icont < boxes.length; icont += 1){

    /* Quando alguém clica na caixa */
    boxes[icont].addEventListener("click", function(){
        let temp;

        if (player1 == player2) {
            /* X */
            temp = x;
        } else {
            /* O */
            temp = o;
        }
        
        if (this.childNodes.length == 0){
            let cloneTemp = temp.cloneNode(true);
            this.appendChild(cloneTemp);

            if (player1 == player2){
                player1 += 1;
                let gameOver = checkGanhador();

                if (secondPlayer == 'ai-player' && !gameOver){
                    computerPlay(); 
                    player2 += 1;
                    checkGanhador();
                }

            } else {
                player2 += 1;
                checkGanhador();
            }
        }
    });
}

/* Limpa o jogo, declara o vencedor e atualiza o placar */
function declareWinner(winner){

    let scoreboardX = document.getElementById("scoreboard-1");
    let scoreboardO = document.getElementById("scoreboard-2");
    let msg = '';

    if(winner == 'x'){
        scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
        msg = "O jogador 1 venceu!";
    } else if (winner == 'o'){
        scoreboardO.textContent = parseInt(scoreboardO.textContent) + 1;
        msg = "O jogador 2 venceu!";
    } else if (winner == 'Deu Velha' ) { msg = "Deu Velha!"; }

    /* Exibir mensagem */
    messageText.innerHTML = msg;
    messageContainer.classList.remove("hide");

    /* Zeras as jogadas */
    player1 = 0;
    player2 = 0;

    /* Romevor X e O */
    let boxesToRemove = document.querySelectorAll(".box div");

    for (let icont = 0; icont < boxesToRemove.length; icont += 1){
        boxesToRemove[icont].parentNode.removeChild(boxesToRemove[icont]);
    }

    /* Esconder mensagem */
    setTimeout (function() {
        messageContainer.classList.add("hide");
    }, 1000);
}

/* Executar a lógica da jogada do CPU */
function computerPlay() {
    
    let cloneO = o.cloneNode(true);

    // Função auxiliar para checar combinações
    function checkWin(symbol) {
        const winCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let combo of winCombinations) {
            const [a, b, c] = combo;
            const valA = boxes[a].childNodes[0]?.className;
            const valB = boxes[b].childNodes[0]?.className;
            const valC = boxes[c].childNodes[0]?.className;

            // Tentar vencer
            if ((valA === symbol && valB === symbol && !valC) ||
                (valA === symbol && !valB && valC === symbol) ||
                (!valA && valB === symbol && valC === symbol)) {
                if (!valA) return a;
                if (!valB) return b;
                if (!valC) return c;
            }
        }

        return null;
    }

    // 1. Ver se pode vencer
    let move = checkWin("o");
    if (move !== null) {
        boxes[move].appendChild(cloneO);
        return;
    }

    // 2. Ver se precisa bloquear o jogador
    move = checkWin("x");
    if (move !== null) {
        boxes[move].appendChild(cloneO);
        return;
    }

    // 3. Tentar jogar no centro
    if (boxes[4].childNodes.length === 0) {
        boxes[4].appendChild(cloneO);
        return;
    }

    // 4. Tentar jogar em um canto
    const corners = [0, 2, 6, 8];
    for (let corner of corners) {
        if (boxes[corner].childNodes.length === 0) {
            boxes[corner].appendChild(cloneO);
            return;
        }
    }

    // 5. Qualquer espaço vazio
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].childNodes.length === 0) {
            boxes[i].appendChild(cloneO);
            return;
        }
    }
}