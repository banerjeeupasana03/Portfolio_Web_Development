function DevelopmentPageFunctionality() {
  function displayGif(pos) {
    var devDisplayDiv = document.getElementById("development_gifs");
    var image =
      "<img src='" + developmentProjects[pos].image + "' class='image-dim' />";
    devDisplayDiv.style.opacity = 0;
    setTimeout(function() {
      devDisplayDiv.innerHTML = image;
      devDisplayDiv.style.opacity = 1;
    }, 1000);
  }

  function carousel() {
    var i = 0;
    var buttonLeft = document.getElementById("btn_left");
    var buttonRight = document.getElementById("btn_right");
    displayGif(i);

    buttonRight.addEventListener("click", function() {
      i = i + 1;
      if (i >= developmentProjects.length) {
        i = developmentProjects.length - 1;
      }
      if (i < 0) {
        i = 0;
      }
      displayGif(i);
    });

    buttonLeft.addEventListener("click", function() {
      i = i - 1;
      if (i >= developmentProjects.length) {
        i = developmentProjects.length - 1;
      }
      if (i < 0) {
        i = 0;
      }
      displayGif(i);
    });
  }
  carousel();
}
