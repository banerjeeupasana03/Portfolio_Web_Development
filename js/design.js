function DesignPageFunctionality() {
  function displayImage(pos) {
    var designDisplayDiv = document.getElementById("design_vectors");
    var image =
      "<img src='" + designProjects[pos].image + "' class='image-dim' />";
    designDisplayDiv.style.opacity = 0;
    setTimeout(function() {
      designDisplayDiv.innerHTML = image;
      designDisplayDiv.style.opacity = 1;
    }, 1000);
  }

  function carousel() {
    var i = 0;
    var buttonLeft = document.getElementById("btn_left");
    var buttonRight = document.getElementById("btn_right");
    displayImage(i);

    buttonRight.addEventListener("click", function() {
      i = i + 1;
      if (i >= designProjects.length) {
        i = designProjects.length - 1;
      }
      if (i < 0) {
        i = 0;
      }
      displayImage(i);
    });

    buttonLeft.addEventListener("click", function() {
      i = i - 1;
      if (i >= designProjects.length) {
        i = designProjects.length - 1;
      }
      if (i < 0) {
        i = 0;
      }
      displayImage(i);
    });
  }
  carousel();
}
