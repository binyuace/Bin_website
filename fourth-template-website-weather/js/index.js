var wea = "https://fcc-weather-api.glitch.me/api/current?lat=" 
var lat;
var lon;
var tempc;
if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position){
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      wea = wea+encodeURI(lat)+"&lon="+encodeURI(lon);
      $("").html("latitude: " + lat + "<br>longitude: " + position.coords.longitude);
      $.get(wea,function(data){
        $("h3").text(data.name+" "+data.sys.country)
        $("#i").html('<img src= "'+data.weather[0].icon+'">');
  $(".weather").text(data.weather[0].main);
        tempc = data.main.temp;
        tempf = tempc*1.8 +32;
        $(".temp").text(tempc);
      });
});
}
var i=0;
$(".temp-unit").click(function(){
  if(i%2==0){
    $(".temp-unit").html("&#8457;");
    tofar();
  }
    else{
      $(".temp-unit").html("&#8451;");
      tocel();
    }
  i++;
});
function tofar(){
  $(".temp").text(tempf);
};
function tocel(){
  $(".temp").text(tempc);
};