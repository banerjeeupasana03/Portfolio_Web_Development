function DesignPageFunctionality() {

  // organizing all the vector graphics in a js array

  var imageArray = [
    {
      name: "vector1",
      image: "img/vg1.svg"
    },
    {
      name: "vector2",
      image: "img/vg2.svg"
    },
    {
      name: "vector3",
      image: "img/vg3.svg"
    },
    {
      name: "vector4",
      image: "img/vg4.svg"
    },
    {
      name: "vector5",
      image: "img/vg5.svg"
    },
    {
      name: "vector6",
      image: "img/vg6.svg"
    },
    {
      name: "vector7",
      image: "img/vg7.svg"
    },
    {
      name: "vector8",
      image: "img/vg8.svg"
    },
    {
      name: "vector9",
      image: "img/vg9.svg"
    },
    {
      name: "vector10",
      image: "img/vg10.svg"
    },
    {
      name: "vector11",
      image: "img/vg11.svg"
    }
  ];

  function carousel() {
    var buttonLeft = document.getElementById('btn_left');
    var buttonRight = document.getElementById('btn_right');
    var designDisplayDiv = document.getElementById('design_vectors');
    
    var image = "<img src='" + imageArray[0].image + "' class='image-dim' />";
    designDisplayDiv.innerHTML = image;
    var i = 1;

    buttonRight.addEventListener("click", function () {
      var imageDisplay = imageArray[Math.abs(i)];
      i = (i + 1) % imageArray.length;
      var image = "<img src='" + imageDisplay.image + "' class='image-dim' />";
      designDisplayDiv.innerHTML = image;
    });

    buttonLeft.addEventListener("click", function () {
      var imageDisplay = imageArray[Math.abs(i)];
      i = (i - 1) % imageArray.length;
      var image = "<img src='" + imageDisplay.image + "' class='image-dim' />";
      designDisplayDiv.innerHTML = image;
    });
  }
  carousel();
}
