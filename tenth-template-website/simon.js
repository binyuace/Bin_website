$(document).ready(function(){


var music0 =document.createElement('audio')
$(music0).attr('src','https://s3.amazonaws.com/freecodecamp/simonSound1.mp3') 
colors = $('.color');
var music1 =document.createElement('audio')
$(music1).attr('src','https://s3.amazonaws.com/freecodecamp/simonSound2.mp3') 
colors = $('.color');
var music2 =document.createElement('audio')
$(music2).attr('src','https://s3.amazonaws.com/freecodecamp/simonSound3.mp3') 
colors = $('.color');
var music3 =document.createElement('audio')
$(music3).attr('src','https://s3.amazonaws.com/freecodecamp/simonSound4.mp3') 
colors = $('.color');

function shine(i,t) {
	switch(i){
		case 0 :
			colors.eq(0).css({'background-color':'lightgreen'});
			setTimeout(function() {colors.eq(0).css({'background-color':'darkgreen'});}, t);			
			music0.play();
			break;
		case 1:
			colors.eq(1).css({'background-color':'red'});
			setTimeout(function() {colors.eq(1).css({'background-color':'darkred'});}, t);
			music1.play();
			break;
				
		case 2:
			colors.eq(2).css({'background-color':'yellow'});
			setTimeout(function() {colors.eq(2).css({'background-color':'gold'});}, t);
			music2.play();
			break;

		case 3:
			colors.eq(3).css({'background-color':'blue'});
			setTimeout(function() {colors.eq(3).css({'background-color':'darkblue'});}, t);
			music3.play();
			break;
	}
}
var game = {
	count:0,
	sequence:[],
	strict:false,
	player:[],
	playtime:false,
	win:function(){
		this.count++;
		$('.countboard h3').text(this.count);
		const a = Math.floor(Math.random()*4);
		this.sequence.push(a);
		let shinecount = 0;
		let interval = setInterval(function(){
			shine(game.sequence[shinecount],500);
			shinecount++;
			if(shinecount === game.sequence.length){
				clearInterval(interval);
				game.playtime = true;
			}
		},800);

	},
	clear:function(){
		this.count = 0;
		this.sequence = [];
		this.playtime = false;
		$('.countboard h3').text(this.count);
	},
	lose:function(){
		if(this.strict){
			this.clear();
			const a = Math.floor(Math.random()*4);
			this.sequence.push(a);
			this.count++;
			$('.countboard h3').text(this.count);
		}
		this.player = [];
		$('#lose').show();
		setTimeout(function(){$('#lose').hide();},200);
		setTimeout(function(){$('#lose').show();},400);
		setTimeout(function(){$('#lose').hide();},600);
		this.playtime = false;
		let shinecount = 0;
		let interval = setInterval(function(){
			shine(game.sequence[shinecount],500);
			shinecount++;
			if(shinecount === game.sequence.length ){
				clearInterval(interval);
				game.playtime = true;
			}
		},800);

	},	
	check:function(btn){
		if(this.playtime) {
			shine(btn,200);
			this.player.push(btn);
			if (btn !== this.sequence[this.player.length-1]) {
				this.lose();
			} else{
				if(this.player.length === this.sequence.length){
					if(this.player.length === 20){
						this.victory();
					}else{
						this.win();
						this.player = [];
						this.playtime = false;
					}
				}
			}
		}
	},
	victory:function(){
		$('.wrong').text('You win');
		$('#lose').show();
		setTimeout(function(){$('#lose').hide();},200);
		setTimeout(function(){$('#lose').show();},400);
		setTimeout(function(){$('#lose').hide();},600);
		setTimeout(function(){$('.wrong').text('Wrong');},2000);
		setTimeout(function(){
			if (game.strict === false){
				game.strict = true;
				game.lose();
				game.strict = false;
			}else{
				$('.wrong').text('You win');
				game.lose();
				setTimeout(function(){$('.wrong').text('Wrong');},2000);
			}
		},1000);

	}

}
$('#start').click(function(){
	if( $('.firstbtn p').text() ==='start' ){ 
		game.win();
		$('.firstbtn p').text('stop');
	}else{
		game.clear();
		$('.firstbtn p').text('start');
	}

});
$('#strict').click(function(){
	if( $('.secondbtn p').text() ==='strict' ){ 
		game.strict = true;
		$('.secondbtn p').text('simple');
	}else{
		game.strict = false;
		$('.secondbtn p').text('strict');
	}	
});



for (let i = 0;i<4;i++) {
	colors.eq(i).on('click',function(){
		return game.check(i);
	});
}


















});