class Pieces  {
    constructor (shape, color){
        this.shape = shape;
        this.color = color;
        this.actualAngle = Math.floor(Math.random()*4);
        this.x = 4;
        this.y = 3;
    }   

    draw(){
        let x = 100, y = 80;
        console.log(this.actualAngle)
        for(let i = 0; i <  this.shape[this.actualAngle].length; i++){
            for(let j = 0; j < this.shape[this.actualAngle].length; j++){
                if (this.shape[this.actualAngle][i][j] === 1){
                    drawSquare(((i + this.x) * square) + marginSide, ((j + this.y) * square) - marginSide, square, this.color);
                }
            }
        }
    }
}
