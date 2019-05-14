function MotionGraphicsVideoFunctionality() {
  var element = document.getElementById("video_player");
  var url = new URL(window.location.href);
  var position = parseInt(url.searchParams.get("pos"));
  var source = motionGraphicsAndAnimationProjects[position].video;
  element.innerHTML =
    '<video id="current_video" width="80%" height="60%" autoplay>' +
    '<source src="' +
    source +
    '" type="video/mp4">' +
    "</video>";
}

function PlayPauseVideo() {
  var videoElm = document.getElementById("current_video");
  if (videoElm.paused) {
    videoElm.play();
  } else {
    videoElm.pause();
  }
  return false;
}
