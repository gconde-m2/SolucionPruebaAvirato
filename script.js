var player = 1; // es la IA
// creacion del board y del randomizer
var grid = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
];
for (let i = 1; i < 4; i++) {
    for (let k = 0; k < 4; k++)
        grid[i][k] = Math.floor(Math.random() * 2) + 1
}

grid = checkWin(grid);
refreshGrid();

var col0, col1, col2, col3;

col0 = 0;
col1 = 0;
col2 = 0;
col3 = 0;

function checkWin(board) {

    let last = [...board]
    
    for (let i = 1; i < 4; i++) { // doble bucle para recorrer el array bidimensional

        for (let k = 0; k < 4; k++) {

            if (i < 2) {

                if (player == board[i][k] && player == board[i + 1][k] //Comprobamos de arriba a abajo
                    && player == board[i + 2][k])
                        board[0][k] = 3

                if (player == board[i][k] && player == board[i + 1][k + 1]  // Laterales
                    && player == board[i + 2][k + 2])
                    board[0][k - 1] = 3

                if (player == board[i][k] && player == board[i + 1][k - 1]
                    && player == board[i + 2][k - 2])
                    board[0][k + 1] = 3
            }
        }
    }
        return board;
}
// seleccionamos a quien corresponde cada casilla
function selectColumn(col) {
    var rowNumber = 4;
    if (col == 0) {
        rowNumber = col0;
        col0 -= 1;
    } else if (col == 1) {
        rowNumber = col1;
        col1 -= 1;
    } else if (col == 2) {
        rowNumber = col2;
        col2 -= 1;
    } else if (col == 3) {
        rowNumber = col3;
        col3 -= 1;
    }
    if (player == 1) {
        grid[rowNumber][col] = 1;
        player = 2;
    } else {
        grid[rowNumber][col] = 2;
        player = 1;
    }

    refreshGrid();
}

// funcion para repintar todo el rato las casillas
function refreshGrid() {

    for (var row = 0; row < 4; row++) {
        for (var col = 0; col < 4; col++) {
            if(grid[row][col])
            if (grid[row][col] == 0) {
                console.log(row, col)
                document.getElementById("cell" + row + col).style.backgroundColor = "white";
            } else if (grid[row][col] == 1) { 
                document.getElementById("cell" + row + col).style.backgroundColor = "yellow";
            } else if (grid[row][col] == 2) {
                document.getElementById("cell" + row + col).style.backgroundColor = "red";
            }
            else if (grid[row][col] == 3) {
                document.getElementById("cell" + row + col).style.backgroundColor = "green";
            }
        }
    }
}
//reiniciar el juego
function resetGrid() {
    location.reload()
    return false

}   