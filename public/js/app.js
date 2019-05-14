function App() {
  Header();
  if (window.location.href.match("index.html") != null) {
    ScaleImage();
  }

  if (window.location.href.match("design.html") != null) {
    DesignPageFunctionality();
  }

  if (window.location.href.match("development.html") != null) {
    DevelopmentPageFunctionality();
  }

  if (
    window.location.href.match("motion_graphics_and_animation.html") != null
  ) {
    MotionGraphicsAndAnimationPageFunctionality();
  }
}
