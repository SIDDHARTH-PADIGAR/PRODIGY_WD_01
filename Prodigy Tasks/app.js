window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").style.background = "#222";
  } else {
    document.getElementById("navbar").style.background = "#333";
  }
}
