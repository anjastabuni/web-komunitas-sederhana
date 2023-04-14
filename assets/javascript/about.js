const element = document.getElementById("myBtn");
element.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("detail").innerHTML =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
}

function myFacebook() {
  window.location.href = "https://www.facebook.com/sacode.official";
}
function myInstagram() {
  window.location.href = "https://www.instagram.com/sacode.official/";
}
function myLinkedin() {
  window.location.href = "https://www.linkedin.com/company/sacode-official/";
}
