$("document").ready(function(){

  $(".search-icon").click(function(){
    
    $(".search").animate({opacity: '0.5'},"slow");
    
  });
  $(".wiki").click(function(){
    $(".search").animate({opacity: '1.0'},"fast");
  });
  $(".search-icon").click(function(){

    var wikiURL = "https://en.wikipedia.org/w/api.php";
    wikiURL += '?' + $.param({
        'action' : 'opensearch',
        'search' : $(".wiki").val(),
        'prop'  : 'revisions',
        'rvprop' : 'content',
        'format' : 'json',
        'limit' : "10"
    });

     $.ajax( {
        url: wikiURL,
        dataType: 'jsonp',
        
        success: function(data) {
           // alert($(".wiki").val());
           $(".results").empty();
           $(".results").append(' ');
           for(var idx = 0 ; idx<10;idx++) {
                var content = '<a class="result text-info"  target="_blank" href = "';
                content += data[3][idx];
                content += '"> <h3 style="text-decoration:none;">';
                content += data[1][idx];
                content += '</h3> <span style="text-decoration:none;">';
                content += data[2][idx];
                content += '</span> </a>';
                
                $(".results").append(content);
                 
            };


        }
    } );
    
  });
  function search(){
    alert();
  };
});















//   var url = "https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json";

//   $.post("demo_test_post.asp",
//     {
//        headers: { 'Api-User-Agent': '2514187590@qq.com/1.0' }
//     },
//     function(data, status){
//         alert("Data: " + data + "\nStatus: " + status);
//     });
//    $.ajax({
//   url: '//www.wikidata.org/w/api.php',
//   data: { action: 'query', titles:'Main%20Page',ids: '',prop:'revisions',rvprop:'content', format: 'json' },
//   dataType: 'jsonp',
//   headers: { 'Api-User-Agent': '2514187590@qq.com/1.0' },
//   success: function (x) {
//     alert('wb label'+ //   }
     
// });x.entities.Q39246.labels.en.value);
//     alert('wb description'+ x.entities.Q39246.descriptions.en.value);
