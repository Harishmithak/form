// jquery validation

$(document).ready(function() {
console.log("hi")
  $("#myForm").validate({
    rules: {
      fname: "required",
      lname: "required",
      dob: "required",
      email: {
        required: true,
        email: true
      },
      Address: "required",
      "city-choice": "required",
      gender: "required",
      "languages": {
        required: true,
        minlength: 1
      },
      interest: "required",
      myfile: "required"
    },
    messages: {
      fname: "Please enter your first name",
      lname: "Please enter your last name",
      dob: "Please enter your date of birth",
      email: {
        required: "Please enter your email address",
        email: "Please enter a valid email address"
      },
      Address: "Please enter your address",
      "city-choice": "Please choose a city",
      gender: "Please select your gender",
      "languages": "Please select at least one language",
      interest: "Please select your area of interest",
      myfile: "Please select a file"
    },
    submitHandler: function(form) {
      // Display an alert message after successful validation
      alert("Form submitted successfully!");
     

      // Uncomment the line below to submit the form programmatically
      //  form.submit();
    }

  });
});



//javascript validation

// function validateForm() {
    // var fname = document.getElementById("fname").value;
    // console.log(fname)
    // document.getElementById("details").innerHTML=fname;

    // var lname = document.getElementById("lname").value;
    // var dob = document.getElementById("dob").value;
    // var email = document.getElementById("email").value;
    // var address = document.getElementById("Address").value;




//     var isValid = true;

//     if (fname=== '') {
//       document.getElementById('fnameError').textContent = 'Please enter your first name';
//       isValid = false;
//     }
//     else {
//         document.getElementById('fnameError').textContent = '';
//       }

//     if (lname === '') {
//       document.getElementById('lnameError').textContent = 'Please enter your last name';
//       isValid = false;
//     }
//     else {
//         document.getElementById('lnameError').textContent = '';
//       }

//     if (dob === '') {
//       document.getElementById('dobError').textContent = 'Please enter your date of birth';
//       isValid = false;
//     }
//     else {
//         document.getElementById('dobError').textContent = '';
//       }

//     if (email=== '') {
//       document.getElementById('emailError').textContent = 'Please enter email';
//       isValid = false;
//     }
//     else if(email!=='[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}'){
//         document.getElementById('emailError').textContent = 'Please enter valid email';
//       }
//       else {
//         document.getElementById('emailError').textContent = '';
//       }

//     if (address=== '') {
//       document.getElementById('addressError').textContent = 'Please enter your address';
//       isValid = false;
//     }
//     else {
//         document.getElementById('addressError').textContent = '';
//       }

//     if (!isValid) {
//       return false; // Form is not valid
//     }
//   }



function validateform() {

  const fname = document.getElementById('fname').value;
  const lname = document.getElementById('lname').value;
  const email = document.getElementById('email').value;
  const dob = document.getElementById('dob').value;
  const Address = document.getElementById('Address').value;
  const myfile = document.getElementById('myfile').value;
 
 // if (!name || !email || !password || !confirmPassword || !date || !gender || !country) {
   //   document.getElementById("error").innerHTML = "Please Fill All The Fields"
  //}
 // else {
      document.write("Name: ", fname + '<br>' + "lname: ", lname + '<br>'+ "Email: ", email + '<br>'+"dob: ", dob + '<br>'+"Address: ", Address + '<br>')

 // }
}