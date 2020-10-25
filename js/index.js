// Can I make jquery work? I'm scared.

console.log("Congratulations. You got it to read the JS file.")

$(".icon").on({
  mouseenter: function (){
    $("#contactIcon").css("display", "none");
    $("#contactExpanded").css("display", "block");
  },
  mouseleave: function (){
    $("#contactIcon").css("display", "block");
    $("#contactExpanded").css("display", "none");  
  },
  click:function (){
    console.log("placeholder for making the contact form")
  }
});