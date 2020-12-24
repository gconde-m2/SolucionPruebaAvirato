// Guillermo Conde Magaña, prueba técnica Avirato
// Lo hago con Javascript puro, se me da mejor React, pero Vue no tengo la facilidad aún como para hacerlo en tiempo.
const player = 1;
const ia = 2;
const boardLength = 4;
const boardHeight = 4;
let empty = 0;
let board = [[x][x]]; //Suponemos que el Board ya esta completo

//LLamamos a la funcion de checkVicotry con las dimensiones del board como parametro y con el jugador que entre, ya sea 1 o 2
//Despues comprobamos en las posiciones en las que el jugador esta en el board, y devuelve la ultima posicion en la cual podría estar
function checkWin(player, board) {

    let last = []

    for (let i = 0; i < boardLength; i++) { // doble bucle para recorrer el array bidimensional

        for (let k = 0; k < boardHeight; k++) {

            if (player == board[i][k + 1] && player == board[i][k + 2] //Comprobamos de izquierda a derecha
                && player == board[i][k])
                last.push([i, k + 3])

            if (player == board[i][k] && player == board[i + 1][k] //Comprobamos de arriba a abajo
                && player == board[i + 2][k])
                last.push([i + 3, k])

            if (player == board[i][k] && player == board[i + 1][k + 1]  // Laterales
                && player == board[i + 2][k + 2])
                last.push([i + 3, k + 3])

            if (player == board[i][k] && player == board[i + 1][k - 1]
                && player == board[i + 2][k - 2])
                last.push([i + 3, k - 3])
        }
    }
    if (last != null)
        return last;
    else
        return 0
}

let iaWin = checkWin(2, board)

iaWin != 0 ? console.log("la IA podria ganar en las posiciones" + iaWin) : null;

// Te devuelve las posiciónes en la que la maquina acaba su cuatro en linea.
