function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
  
  
    if (name === "" || email === "" || subject === "") {
      document.getElementById("output").innerHTML = "<p id='error'>All fields are required.</p>";
      return;
    }
  
  
    var formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("subject", subject);
  
    
    fetch("submit.php", {
      method: "POST",
      body: formData
    })
    .then(response => response.text())
    .then(data => {
      document.getElementById("output").innerHTML = data;
      document.getElementById("myForm").reset(); // Reset the form after successful submission
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
  