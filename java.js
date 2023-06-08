function validateForm() {
    // Validate name
    var fname = document.getElementById("fname").value;
    var namePattern = /^[A-Za-z\s]+$/;
    if (!namePattern.test(fname)) {
      alert("Please enter a valid name.");
      return false;
    }
  
    // Validate date of birth
    var dob = document.getElementById("age").value;
    if (dob === "") {
      alert("Please enter your date of birth.");
      return false;
    }
  
    // Validate gender
    var gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
      alert("Please select your gender.");
      return false;
    }
  
    // Validate address
    var address = document.getElementById("address").value;
    if (address === "") {
      alert("Please enter your address.");
      return false;
    }
  
    // Validate phone number
    var phone = document.getElementById("phoneno").value;
    var phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return false;
    }
  
    // Validate languages known
    var languages = document.getElementsByName("language");
    var selectedLanguages = Array.from(languages).filter(function (language) {
      return language.checked;
    });
    if (selectedLanguages.length === 0) {
      alert("Please select at least one language known.");
      return false;
    }
  
    // Validate expert in
    var techlang = document.getElementById("techlang").value;
    if (techlang === "") {
      alert("Please select your expertise.");
      return false;
    }
  
    // Validate resume
    var resume = document.getElementById("file").value;
    if (resume === "") {
      alert("Please upload your resume.");
      return false;
    }
  
    // Validate qualification
    var qualification = document.getElementById("qualification").value;
    if (qualification === "") {
      alert("Please select your qualification.");
      return false;
    }
  
    // Validate joining date
    var joinDate = document.getElementById("join").value;
    if (joinDate === "") {
      alert("Please enter your joining date.");
      return false;
    }
  
    // Validate task start time
    var taskStartTime = document.getElementById("datetime").value;
    if (taskStartTime === "") {
      alert("Please enter the task start time.");
      return false;
    }
  
    // Calculate age
    var today = new Date();
    var dobDate = new Date(dob);
    var age = today.getFullYear() - dobDate.getFullYear();
    var monthDiff = today.getMonth() - dobDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobDate.getDate())) {
      age--;
    }
  
    // Calculate experience
    var joinDateObj = new Date(joinDate);
    var experienceYears = today.getFullYear() - joinDateObj.getFullYear();
    var experienceMonths = today.getMonth() - joinDateObj.getMonth();
    if (
      experienceMonths < 0 ||
      (experienceMonths === 0 && today.getDate() < joinDateObj.getDate())
    ) {
      experienceYears--;
      experienceMonths += 12;
    }
  
    // Calculate task time
    var taskStartTimeObj = new Date(taskStartTime);
    var taskTimeMs = Math.abs(today - taskStartTimeObj);
    var taskHours = Math.floor(taskTimeMs / (1000 * 60  *60));
    var taskMinutes = Math.floor((taskTimeMs / (1000 * 60)) % 60);
    
  
    // Display the form values on a new page
    var formValues = {
      Name: name,
      Age: age,
      Gender: gender.value,
      Address: address,
      "Phone Number": phone,
      "Languages Known": getSelectedLanguages(),
      "Expert In": techlang,
      "Upload Resume": resume,
      Qualification: qualification,
      "Joining Date": joinDate,
      "Task Started At": taskStartTime,
      Experience: experienceYears + " years " + experienceMonths + " months",
      "Task Time": taskHours + " hours " + taskMinutes + " minutes",
    };
  
    var formValuesPage = window.open("", "_blank");
    var html = "<html><body><table>";
    for (var key in formValues) {
      html +=
        "<tr><td><strong>" +
        key +
        "</strong></td><td>" +
        formValues[key] +
        "</td></tr>";
    }
    html += "</table></body></html>";
  
    formValuesPage.document.open();
    formValuesPage.document.write(html);
    formValuesPage.document.close();
  
    return true;
  }
  
  function getSelectedLanguages() {
    var languages = document.getElementsByName("language");
    var selectedLanguages = Array.from(languages).filter(function (language) {
      return language.checked;
    }).map(function (language) {
      return language.value;
    });
    return selectedLanguages.join(", ");
  }