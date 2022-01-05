class Pieces  {
    constructor (shape, color){
        this.shape = shape;
        this.color = color;
        this.actualAngle = Math.floor(Math.random()*4);
        this.x = 4;
        this.y = 0;
    }   

    draw(){
        for(let i = 0; i <  this.shape[this.actualAngle].length; i++){
            for(let j = 0; j < this.shape[this.actualAngle].length; j++){
                if (this.shape[this.actualAngle][i][j] === 1 && j + this.y >= 0){
                    drawSquare((i + this.x), ((j + this.y)), square, this.color);
                }
            }
        }
    }
    undraw (){
        for(let i = 0; i <  this.shape[this.actualAngle].length; i++){
            for(let j = 0; j < this.shape[this.actualAngle].length; j++){
                if (this.shape[this.actualAngle][i][j] === 1 && j + this.y >= 0){
                    if (((j + this.y) % 2) === 0){
                        if (((i + this.x) % 2) -1 === 0){
                            drawSquare((i + this.x), ((j + this.y)), square, "white");
                            drawSquare((i + this.x), ((j + this.y)), square, colorBoardDark);
                            drawGrid((i + this.x), (j + this.y), square);
                        }
                        else {
                            drawSquare((i + this.x), ((j + this.y)), square, "white");
                            drawSquare((i + this.x), ((j + this.y)), square, colorBoardlight);
                            drawGrid((i + this.x), (j + this.y), square);
                        }
                    }
                    else{
                        if (((i + this.x) % 2) -1 != 0){
                            drawSquare((i + this.x), ((j + this.y)), square, "white");
                            drawSquare((i + this.x), ((j + this.y)), square, colorBoardDark);
                            drawGrid((i + this.x), (j + this.y), square);
                        }
                        else {
                            drawSquare((i + this.x), ((j + this.y)), square, "white");
                            drawSquare((i + this.x), ((j + this.y)), square, colorBoardlight);
                            drawGrid((i + this.x), (j + this.y), square);
                        }
                     }
                }
            }
        }
    }
}
