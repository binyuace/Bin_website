$("document").ready(function(){
		
	var first = 2;
	var second = 5;
	var setdisplay = function(minutes){
		var Totaltime = minutes*1000*60;
		var timeleft = minutes*1000*60;
		var paused = true;
		var x;
		var obj = {}
		obj.start = function(){

			var startime = new Date().getTime();
			Totaltime = timeleft;
			x = setInterval(function() {
				now = new Date().getTime();
				timeleft = Totaltime- (now - startime);
				if(timeleft < 0 && working === true){
					clearInterval(x);
					obj.reset(third*10+fourth);
					alert("Done " + "You can break now!");
					obj.start();

					breaking = true;
					working = false;
					$(".doingwhat").text("Breaking");
					
				}
				if(timeleft < 0 && breaking === true){
					alert("Done " + "You can work now!");
					breaking = false;
					working = false;
					beforeWorking = true;
					$(".doingwhat").text('Working');
					clearInterval(x);
				}
				if(timeleft >= 0){show(timeleft);}
			},200);
		}
		obj.pause = function () {
			if(paused){
				obj.start();
				paused= false;
			}else {
				clearInterval(x);
				paused = true;
			}
		}
		var stop;
		obj.stop = function () {
			clearInterval(x);
			stop = true;
		}
		obj.reset = function (minu) {
			clearInterval(x);
			Totaltime = minu*1000*60;
			timeleft = minu*1000*60;
			paused = true;
		}
		function show(a) {
			minutes = Math.floor(a/(1000*60));
			seconds = Math.floor((a%(1000*60))/1000);
			var toshow = minutes+':'+ (seconds<10?"0"+seconds:''+seconds);
			if(!stop)$(".display").text(toshow);
		}
		obj.ispaused = function(){
			return paused;
		}
		show(Totaltime);
		return obj;
	}	
	var newdis = new setdisplay(first*10+second);
	// set up the display of clock first
	var beforeWorking = true;



	var working = false;
	var breaking = false;


	$(".i1").click(function(){
		first < 5 && second > 0 ? first = first+1:first=first;
		first = 5 && second == 0? first = first +1:first=first;
		if(first >6) {first=6;}
		settimer();

	});
	$(".i2").click(function(){
		if(first < 6&&second < 9){second++;}
		else {second = 0; first++;}
		settimer();
	});
	$(".i3").click(function(){
		if (first > 0) {first--;}
		settimer();
	});
	$(".i4").click(function(){
		if(second > 0 ) {	
			second--;
		}
		else if(second==0&&first!==6){second=9;}
		settimer();
	});


	var third = 0;
	var fourth = 5;

	$(".i5").click(function(){
		
		third = 1;
		fourth = 0;
		settimer();

	});
	$(".i6").click(function(){
		if(third === 0 && fourth < 9){fourth++;}
		else {third = 1; fourth = 0;}
		settimer();
	});
	$(".i7").click(function(){
		if (third > 0) {third--;}
		settimer();
	});
	$(".i8").click(function(){
		if(fourth > 0 ) {	
			fourth--;
		}
		else if(fourth==0 && third === 0){fourth=9;}
		else if(third === 1){
			third = 0;
			fourth = 9;
		}
		settimer();
	});

	function settimer() {
		$(".first").text(first);
		$(".second").text(second);
		$(".third").text(third);
		$(".fourth").text(fourth);
		if(beforeWorking) { 
			$(".display").text(first+""+second+':00');
			newdis.reset(first*10+second);
		}

	}
	

	$(".reset").click( function(){
		beforeWorking= true;
		newdis.reset(first*10+second);
		$(".display").text(first+""+second+':00');
		breaking = false;
		working = false;

	} );
	
	$(".pause").click(function() {
		if(beforeWorking){
			working = true;
		}
		beforeWorking = false;

		newdis.pause();
	});

});