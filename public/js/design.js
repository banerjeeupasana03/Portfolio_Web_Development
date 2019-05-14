function DesignPageFunctionality() {
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

  function displayImage(pos) {
    var designDisplayDiv = document.getElementById("design_vectors");
    var image = "<img src='" + imageArray[pos].image + "' class='image-dim' />";
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
      if (i >= imageArray.length) {
        i = imageArray.length - 1;
      }
      if (i < 0) {
        i = 0;
      }
      displayImage(i);
    });

    buttonLeft.addEventListener("click", function() {
      i = i - 1;
      if (i >= imageArray.length) {
        i = imageArray.length - 1;
      }
      if (i < 0) {
        i = 0;
      }
      displayImage(i);
    });
  }
  carousel();
}
