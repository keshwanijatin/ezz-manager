// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/*  jQuery */
//When hit submit button all input fields shake
$(function(){
   $(".button").on("click", function(){
     $("input[name=uname]").addClass("animated shake").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
     function (){
       $(this).removeClass('animated shake');
     });
   });
});

//When mouse over the doctor image tada iffect
$(function(){
   $(".avatar").on("mouseover", function(){
     $(".avatar").addClass('animated tada').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
     function (){
       $(this).removeClass('animated tada');
     });
   });
});
