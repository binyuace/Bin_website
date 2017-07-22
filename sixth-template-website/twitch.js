$.getJSON('https://gist.githubusercontent.com/QuincyLarson/2ff6892f948d0b7118a99264fd9c1ce8/raw/e9e12f154d71cf77fc32e94e990749a7383ca2d6/Twitch%2520sample%2520API%2520responses%2520in%2520array%2520form', 
	function(data) {
  console.log(data);
  
  for(var i = 0; i < 4; i++){
  	getinfo(data[i]);
  }
});




function getinfo(json){
	var online = true;
	var	first = '<a href = "' 
	
				
	var end = '</h1></a>'
	if(json.stream === null){
		online = false;
		var second ='" class = "offline text-center"> <h1>'
		$('.results').append(first+json._links.channel+second+json.display_name+end);
		return;		
	}else{
		var second ='" class = "online text-center"> <h1>'
		$('.results').append(first+json._links.channel+second+json.stream.display_name+end);	
	}
}
$("document").ready(function(){
	$('.all').click(function(){
	$(".online").show();
	$(".offline").show();
});
$('.on-line').click(function(){
	$(".online").show();
	$(".offline").hide();
});
$('.off-line').click(function(){
	$(".online").hide();
	$(".offline").show();
});
});




































