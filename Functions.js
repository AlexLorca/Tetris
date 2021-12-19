// Functions related to the board

function boardFill (x, y, size){
    let alter = 0;
    drawborder()
    for (let i = 0; i < x; i++){
        alter++;
        for (let j = 0; j < y; j++){
            if (alter % 2 === 0){
                drawSquare(i* size + marginSide, j * size + marginTop, size, colorBoardDark)
                alter++;
            }
            else {
                drawSquare(i* size + marginSide, j * size + marginTop, size, colorBoardlight)
                alter++;
            }
            drawGrid(i* size + marginSide, j * size + marginTop, size)

        };
    };
};

function drawborder(){
    let boardSize = 320;
    ctx.fillStyle = "#191919"
    ctx.fillRect(0 , 0, boardSize, marginSide)
    ctx.fillRect(boardSize - marginSide, 0, marginSide, canvas.height)
    ctx.fillRect(0, 0, marginSide, canvas.height)
    ctx.fillRect(0, canvas.height - marginSide, boardSize, marginSide)
}

function drawGrid (x, y, size){
    ctx.fillRect (x , y, size, 1);
    ctx.fillRect (x , y, 1, size);
}
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

// Generic square draw
function drawSquare(x, y, size, color){
    ctx.fillStyle = color;
    ctx.fillRect (x, y, size, size);
}   


function randonPiece(){
    return Math.floor(Math.random()*5)
}
function createRandonPiece(){
    const randon = randonPiece();
    const newpiece = new Pieces(testepiece[randon][0], testepiece[randon][1])
    newpiece.draw();
}