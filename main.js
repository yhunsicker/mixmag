
document.querySelectorAll(".logo").forEach(logo => logo.addEventListener('click', showhide));

function showhide() {
  var quoteselect = document.getElementById("quote-toggle");
  console.log(quoteselect)
  quoteselect.classList.toggle('visible');
}

document.getElementById('next').addEventListener('click', slide);
document.getElementById('prev').addEventListener('click', slide);

function slide() {
  document.querySelectorAll(".slide").forEach(slide => {
    slide.classList.toggle('hidden');

  });
}
