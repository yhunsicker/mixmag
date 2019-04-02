

document.querySelectorAll(".logo").forEach(logo => logo.addEventListener('click', showhide));

function showhide() {
var quoteselect = document.getElementById("quote-toggle");
  console.log(quoteselect)
  quoteselect.classList.toggle('visible');
}




