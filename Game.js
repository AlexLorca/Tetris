const canvas = document.getElementById('tetris');
const ctx = canvas.getContext('2d');

const column = 14;
const row = 10;
const square = 30;

const colorBoardlight = "rgba(51, 51, 51, 0.20)";
const colorBoardDark =  "rgba(153, 153, 153, 0.60)";

const marginSide = 10;
const marginTop = 50;

const testepiece = [
    [I, "blue"],
    [Z, "yellow"],
    [O, "red    "],
    [L, "purple"],
    [T, "green"]
];

boardFill(row, column, square);
createRandonPiece();
 


