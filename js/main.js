document.addEventListener("DOMContentLoaded", setTimeout);
setTimeout(click, 10000);

function click() {
  var a = document.getElementById("cssload");
  var reg_button = document.getElementById("reg_b");
  var sig_button = document.getElementById("sig_b");
  var reg = document.getElementById("reg");
  var sig = document.getElementById("sig");

  a.setAttribute("class", "fade");
  setTimeout(a.setAttribute("class", "hidden"), 800);

  sig_button.onclick = function() {
    reg.removeAttribute("class", "hidden");
    sig.setAttribute("class", "hidden");
  };
  reg_button.onclick = function() {
    reg.setAttribute("class", "hidden");
    sig.removeAttribute("class", "hidden");
  };
}

$(".wrap").slick({
  vertical: true,
  verticalSwiping: true,
  infinite: false,
  prevArrow: "",
  nextArrow:
    '<span class="scroll-btn">\
    <a href="#">\
        <span class="mouse">\
            <span>\
            </span>\
        </span>\
        <p>drag me</p>\
    </a>\
</span>'
});
