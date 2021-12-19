const canvas = document.getElementById('tetris');
const ctx = canvas.getContext('2d');

const column = 14;
const row = 10;
const square = 30;

const colorBoardlight = "#33333333";
const colorBoardDark =  "#99999999";

const marginSide = 10;
const marginTop = 50;

boardFill(row, column, square);
