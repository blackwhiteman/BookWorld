
    function setup(){
        var p = createCanvas(400, 400);
        
      p.parent("#div3");
    }
    var bob = 40;
    function draw(){
      background(0, 0, 0);
        fill(200, 20, 20);
        ellipse(bob, 200, 50, 50);
      bob = bob + 1;
      if(bob > 390 ){
        bob = 40;
      }
    }
   
$("#review1").hide();

$("#link1").click(function(e){
  e.preventDefault();
  $("#review1").slideDown();
  $('html, body').animate({
        scrollTop: 1000
    }, 2000);
  
})

$("#review1").click(function(e){
  e.preventDefault();
  $(this).slideUp();
  $('html, body').animate({
        scrollTop: 0
    }, 2000);
});