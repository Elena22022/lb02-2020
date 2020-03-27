// Example starter JavaScript for disabling form submissions if there are invalid fields

(function() {
  "use strict";

  window.addEventListener(
    "load",
    function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");

      // Loop over them and prevent submission
      Array.prototype.filter.call(forms, function(form) {
        form.addEventListener(
          "submit",
          function(event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();
var Request;
function getInputs() {
  let surname = document.getElementById("firstName").value;
  let lastname = document.getElementById("lastName").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  var response = {
    surname,
    lastname,
    phone,
    email,
    message
  };
  this.Request = response;
  console.log(this.Request);
  generateMail();
}

function generateMail() {
  if (
    Request.surname === "" ||
    Request.lastname === "" ||
    Request.email === ""
  ) {
    alert("Pleas fill all in");
  } else {
    var mail =
      "mailto:elena.schmid@swisscom.com" +
      "?subject=" +
      Request.email +
      "&body=" +
      "You have one Request from" +
      " " +
      Request.surname +
      " " +
      Request.lastname +
      "%0D%0A" +
      "%0D%0A" +
      Request.message +
      "%0D%0A" +
      "%0D%0A" +
      "Kind Regards" +
      "%0D%0A" +
      Request.surname;
    var a = document.createElement("a");
    a.href = mail;
    a.click();
  }
}

$(function() {
  $("#radio-1").checkboxradio();
  $("#radio-2").checkboxradio();
  $("#radio-2").checkboxradio();
  $("#FIELD").controlgroup();
});
