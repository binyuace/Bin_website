

var movement = 0;
var timesModel = false;
var isHumanTimes = false;
var board = [];
var humanModel = false;
var gameover = false;
for (var j = 0; j < 9; j++) {
	board[j] = 0;
}
var button1 =  document.getElementById('timesButton');
var button2 =  document.getElementById('circleButton');
var button3 =  document.getElementById('resetButton');
var start = document.getElementById('startPage');
var beforeStart = document.getElementById('modelPage');
var grids = document.getElementsByClassName("grid");
// set the model of cirlce or times for human
function timesPress() {
	timesModel = true;
	isHumanTimes = true;
	start.style.display ="none";
	button3.style.display = 'block';
	if (!humanModel){
		timesModel = false;
		aimove();	
	}
	
}
function circlePress(){
	timesModel = false;
	isHumanTimes = false;
	start.style.display ="none";
	button3.style.display = 'block';
	if (!humanModel){
		timesModel = true;
		aimove();	
	}
}
function humanPress() {
	humanModel = true;
	gameover = false;
	start.style.display = "block";
	beforeStart.style.display = "none";

}
function aiPress() {
	humanModel = false;
	start.style.display = "block";
	gameover = false;
	beforeStart.style.display = "none";
}
// Check if win or lose;
function checkBoard() {

	for (var w = 0; w < 3; w++) {
		if (board[w]+board[w+3]+board[w+6]==3 || board[3*w]+board[3*w+1]+board[3*w+2]==3 || board[0]+board[4]+board[8]==3 || board[2]+board[4]+board[6]==3) {
			var info = isHumanTimes?"You Win, unbelieveble":'You lose'
			if (confirm(info+', continue?') == true) {
   					reset();
   					return;
				} else {
    				return;
				}	
		}
		if (board[w]+board[w+3]+board[w+6]==30 || board[3*w]+board[3*w+1]+board[3*w+2]==30 || board[0]+board[4]+board[8]==30 || board[2]+board[4]+board[6]==30) {
			var info = !isHumanTimes?"You Win, unbelieveble":'You lose'
			if (confirm(info+', continue?') == true) {
   					reset();
   					return;
				} else {
    				return;
				}	
		}
	}
	for (var v = 0; v < 9; v++) {
		if (board[v] === 0){
			return;
		}  
		else if (v === 8) {
				var info = 'Draw, continue?'
				if (confirm(info) == true) {
   					reset();
   					return;
				} else {
					gameover = false;
    				return;
				}	
		}
	}
}
// Add action to the click
for (var i = 0; i < grids.length; i++) {
	grids[i].onclick = function() {
		
		var pressedGrid = this.getAttributeNode('value').value;
		if(board[pressedGrid] === 0) {
			timesModel?this.innerHTML = '&times;':this.innerHTML = '&#x25EF;';
			timesModel? board[pressedGrid] = 1:board[pressedGrid] = 10;
			movement++;
			timesModel = !timesModel;			
			console.log(movement,board);
			setTimeout(function(){
				checkBoard();
				if(!gameover) {
					setTimeout(function(){
						aimove();
						setTimeout(function(){checkBoard();}, 20);
					}, 200);
				
					
			}
			}, 20);

			
		}

		 
	}
}

// Ready for AI

function aimove() {

	var whichgrid = movewhere();
	timesModel?grids[whichgrid].innerHTML = '&times;':grids[whichgrid].innerHTML = '&#x25EF;';
	timesModel? board[whichgrid] = 1:board[whichgrid] = 10;
	movement++;
	timesModel = !timesModel;
	console.log(movement,board);   
}
function movewhere() {
	// var movement = 0;
	// var timesModel = false;
	// var isHumanTimes = false;
	// var board = [];
	// var humanModel = false;
	// var gameover = false;
	var aiturn = true;
	
	theboard = minimax(board,aiturn)[1];
	for (var i in board) {
		if (board[i] !== theboard[i]) {
			return i;
		}
	
	}
	// else {
	// 	for (var i in board) {
	// 		if (board[i] === 0) {
	// 			return i;
	// 		}
	// 	}
	// }
	


}
function finalscore(gameboard) {
	for (var w = 0; w < 3; w++) {
		if (gameboard[w]+gameboard[w+3]+gameboard[w+6]==3 || gameboard[3*w]+gameboard[3*w+1]+gameboard[3*w+2]==3 || gameboard[0]+gameboard[4]+gameboard[8]==3 || gameboard[2]+gameboard[4]+gameboard[6]==3) {
			return isHumanTimes? -10:10;
		}
		else if (gameboard[w]+gameboard[w+3]+gameboard[w+6]==30 || gameboard[3*w]+gameboard[3*w+1]+gameboard[3*w+2]==30 || gameboard[0]+gameboard[4]+gameboard[8]==30 || gameboard[2]+gameboard[4]+gameboard[6]==30) {
			return isHumanTimes? 10:-10;
		}
	}
	for (var b in gameboard) {
		if (gameboard[b] === 0) {
			return -100;
		}
	}
	return 0;
}
function minimax(gameboard,aiturn){
	if(finalscore(gameboard) !== -100)  {
		return [finalscore(gameboard),gameboard];
	}
	var scores = [];
	var moves = [];
	for (var i in board) {
		if (gameboard[i] === 0) {
			var newboard = gameboard.slice();
			if(isHumanTimes) {
				newboard[i] = aiturn?10:1;
			}
			else {
				newboard[i] = aiturn?1:10;
			}
			scores.push(minimax(newboard,!aiturn)[0]);
			// console.log(scores);
			moves.push(newboard);
		}
	}
	// console.log(scores);
	if (aiturn) {
		var maxindex = indexOfMax(scores);
		bestmove = moves[maxindex];
		return [scores[maxindex],bestmove];
	}else {
		var minindex = indexOfMin(scores);
		bestmove = moves[minindex];
		return [scores[minindex],bestmove];
	}

}
function indexOfMax(arr) {
    if (arr.length === 0) {
        return -1;
    }

    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;
}
function indexOfMin(arr) {
    if (arr.length === 0) {
        return -1;
    }

    var min = arr[0];
    var minIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            minIndex = i;
            min = arr[i];
        }
    }

    return minIndex;
}









function reset(){
	for (var i = 0; i < grids.length; i++) {
		grids[i].innerHTML = '';
		board[i] = 0;
	}
	movement = 0
	gameover = true;
	start.style.display = 'none';
	button3.style.display = 'none';
	beforeStart.style.display = "block";
}


