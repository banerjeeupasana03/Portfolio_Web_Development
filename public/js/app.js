function App() {
  Header();
  if (window.location.href.match("index.html") != null) {
    ScaleImage();
  }

  if (window.location.href.match("design.html") != null) {
    DesignPageFunctionality();
  }
}
