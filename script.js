

// jquery validation

$(document).ready(function () {
  console.log("hi")
  $("#myForm").validate({
    rules: {
      fname: "required",
      lname: "required",
      dob: "required",
      jd:"required",
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
      jd: "Please enter your joining date ",
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
    submitHandler: function (form) {

      alert("Form submitted successfully!");

    }

  });
});

// printing details

function validateform() {

  const fname = document.getElementById('fname').value;
  const lname = document.getElementById('lname').value;
  const email = document.getElementById('email').value;
  const dob = document.getElementById('dob').value;
  const Address = document.getElementById('Address').value;
  const citychoice = document.getElementById('city-choice').value;
  const gender = document.getElementById('gender').value;
  const languages = document.getElementById('l1').value;
  const interest = document.getElementById('interest').value;
  const ointerest = document.getElementById('otherInterest').value;
  const myfile = document.getElementById('myfile').value;
  const jd = document.getElementById('jd').value;
  var currentYear = new Date().getFullYear();
  var birthYear = new Date(dob).getFullYear();
  var calculatedAge = currentYear - birthYear;

  var joinYear = new Date(jd).getFullYear();
    var calculatedExperience = currentYear - joinYear;
    
document.write("FORM DETAILS"+'<br>'+'<br>')
  document.write("Name: ", fname + '<br>'  + '<br>'+ "lname: ", lname + '<br>'  + '<br>'+ "Email: ", email + '<br>' + "dob: ", dob + '<br>' + '<br>' + "Address: ", Address + '<br>'  + '<br>'+ "city: ", citychoice + '<br>' + '<br>' + "gender: ", gender + '<br>' + '<br>'+ "languages known: ", languages + '<br>' + '<br>' + "Interest : ", interest + '<br>' + '<br>'+ "other Interest : ", ointerest + '<br>'  + '<br>'+ "calculated age: ", calculatedAge +"years"+ '<br>' + '<br>' + "Resume: ", myfile+ '<br>' + '<br>'+ "joining date : ", jd + '<br>' + '<br>' + "Experience : ",calculatedExperience +"years"+ '<br>'  )
document.write()
}







