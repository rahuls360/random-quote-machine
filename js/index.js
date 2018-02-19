
$(document).ready(function(){
  
  $.getJSON("https://random-quote-generator.herokuapp.com/api/quotes/", function(json){
    var html="";
    $("#next").on('click',function(){
      var rand = Math.floor(Math.random() * 81);
       obj = json[rand];
                     
                var quote= obj.quote;
                var author = obj.author;
      
                $(".quote").html(quote);
      console.log(quote);
                $(".author").html(author);
                
                });
    });
  
  $('#share').on("click",function(){
    var quote = document.querySelector(".quote").textContent;
    var link = 'https://twitter.com/intent/tweet?text='+ encodeURIComponent(quote) + "&via=rahuls360";
    console.log("HI");
      console.log(link);
      window.open(link);
  });
});