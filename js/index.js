// Can I make jquery work? I'm scared.

console.log("Congratulations. You got it to read the JS file.")

$(".icon").on({
  
  mouseenter: function (){

    $(this).children(".small-icon").css("display", "none"); 
    $(this).children(".large-icon").css("display", "block");
  },

  mouseleave: function (){

    $(this).children(".large-icon").css("display", "none"); 
    $(this).children(".small-icon").css("display", "block");
  },

  click:function (){
    console.log("placeholder event for next move")
  }
});