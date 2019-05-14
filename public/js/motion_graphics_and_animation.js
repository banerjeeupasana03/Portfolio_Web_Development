function MotionGraphicsAndAnimationPageFunctionality() {
  function displayGif(pos) {
    var devDisplayDiv = document.getElementById(
      "motion_graphics_and_animation_gif"
    );
    var image =
      "<img src='" +
      motionGraphicsAndAnimationProjects[pos].image +
      "' class='image-dim' />";
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
      if (i >= motionGraphicsAndAnimationProjects.length) {
        i = motionGraphicsAndAnimationProjects.length - 1;
      }
      if (i < 0) {
        i = 0;
      }
      displayGif(i);
    });

    buttonLeft.addEventListener("click", function() {
      i = i - 1;
      if (i >= motionGraphicsAndAnimationProjects.length) {
        i = motionGraphicsAndAnimationProjects.length - 1;
      }
      if (i < 0) {
        i = 0;
      }
      displayGif(i);
    });
  }
  carousel();
}
