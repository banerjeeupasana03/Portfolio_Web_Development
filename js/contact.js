function ContactPageFunctionality() {
  var submitBtn = document.getElementById("submit");
  submitBtn.addEventListener("click", function() {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;
    var data = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      phone: phone,
      message: message
    };
    var firebaseConfig = {
      apiKey: "AIzaSyCa34TQaOb8BnF0m5KffkbbNgXVXZX4J84",
      authDomain: "portfoliowebdevelopment.firebaseapp.com",
      projectId: "portfoliowebdevelopment"
    };
    var fb = firebase.initializeApp(firebaseConfig);
    var db = fb.firestore();
    db.collection("contacts")
      .add(data)
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
    return false;
  });
}
