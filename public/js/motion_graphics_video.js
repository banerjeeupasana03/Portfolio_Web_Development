function MotionGraphicsVideoFunctionality() {
  var element = document.getElementById("video_player");
  var url = new URL(window.location.href);
  var position = parseInt(url.searchParams.get("pos"));
  var source = motionGraphicsAndAnimationProjects[position].video;
  element.innerHTML =
    '<video width="320" height="240" autoplay>' +
    '<source src="' +
    source +
    '" type="video/mp4">' +
    "</video>";
}
