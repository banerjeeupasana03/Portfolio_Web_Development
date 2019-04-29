function DesignPageFunctionality() {

  // organizing all the vector graphics in a js array

  var imageArray = [
    {
      name: "vector1",
      image: "url('img/vg1.svg')"
    },
    {
      name: "vector2",
      image: "url('img/vg2.svg')"
    },
    {
      name: "vector3",
      image: "url('img/vg3.svg')"
    },
    {
      name: "vector4",
      image: "url('img/vg4.svg')"
    },
    {
      name: "vector5",
      image: "url('img/vg5.svg')"
    },
    {
      name: "vector6",
      image: "url('img/vg6.svg')"
    },
    {
      name: "vector7",
      image: "url('img/vg7.svg')"
    },
    {
      name: "vector8",
      image: "url('img/vg8.svg')"
    },
    {
      name: "vector9",
      image: "url('img/vg9.svg')"
    },
    {
      name: "vector10",
      image: "url('img/vg10.svg')"
    },
    {
      name: "vector11",
      image: "url('img/vg11.svg')"
    }
  ];

  function carousel() {
    var buttonLeft = document.getElementById('btn_left');
    var buttonRight = document.getElementById('btn_right');
    var designDisplayDiv = document.getElementById('design_vectors');
    var i = 0;

    buttonRight.addEventListener("click", function () {
      var imageDisplay = imageArray[i];
      console.log(imageDisplay);
      i = i + 1;
      
      var image = "<img src='" + imageArray[i].image + "' />"
      designDisplayDiv.innerHTML = image;
      console.log(image);
  
    });
//
//    buttonLeft.addEventListener("click", function () {
//      var imageDisplay = imageArray[i];
//      i = i - 1;
//      designDisplayDiv.innerHTML = "<img src='imageArray[i].image' /";
//      var image = "<img src='" + imageArray[i].image + "' />"
//      console.log(image);
//    });
  }
  carousel();
}
