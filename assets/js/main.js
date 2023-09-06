
var item = document.getElementById("MAIN");

  window.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) item.scrollLeft += 100;
    else item.scrollLeft -= 100;
  });

  