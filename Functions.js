function boardFill (x, y, size){
    let alter = 0;

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
            drawGrid (i* size + marginSide, j * size + marginTop, size);
        };
    };
};

function drawSquare(x, y, size, color){
    ctx.fillStyle = color;
    ctx.fillRect (x, y, size, size);
}   
function drawGrid (x, y, size){
        ctx.fillRect (x , y, size, 1);
        ctx.fillRect (x , y, 1, size);
}