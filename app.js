"use strict";

function topFunction(){

  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//ToDo Pragya: Trying to implement re-usable footer
// $(document).ready(function(){
//   $('#footer').load('components/footer.html');
// });


//make header Navbar stick to top on scoll-down
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById("nav-top").classList.add('fixed-top');
        // add padding top to show content behind navbar
        var navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById("nav-top").classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 


//validation for contact enquiry page: Email required:
function validateEmail() {
  var x = document.getElementById('email').value;
  console.log("validation, x=", x);
  if (x == null || x == "") {
    document.getElementById('errorMessageEmail').style.display = "block";
    document.getElementById('errorMessageEmail').innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>'+"Email must not be blank";
  } else {
    document.getElementById('errorMessageEmail').style.display = "none";
  }
}

function validateMessage() {
  var x = document.getElementById('emailMessage').value;
  console.log("validation, x=", x);
  if (x == null || x == "") {
    document.getElementById('errorMessageTxt').style.display = "block";
    document.getElementById('errorMessageTxt').innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>'+"Message must not be blank";
  } else {
    document.getElementById('errorMessageTxt').style.display = "none";
  }
}



