$(document).ready(function() {
  // For Debugging
  console.log("Admin Ready!");
  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var employeeIdInput = $("input#employeeId-input");
  var usernameInput = $("input#username-input");
  var passwordInput = $("input#password-input");

  employeeIdInput.keyup(function(e) {
    var inputValue = employeeIdInput.val().trim();
    if (inputValue.length === 4) {
      findPeople(inputValue);
    }
  });

  function findPeople(employeeId) {
    var url = "/api/people/" + employeeId;
    $.get(url)
    .then(function(res) {
      console.log(res);
      displayUser(res)
    })
  }

  function displayUser(userData) {
    people = userData.people;
    $("#user-space").text(people.firstName + " " + people.lastName);
  }

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      username: usernameInput.val().trim(),
      password: passwordInput.val().trim(),
      employeeId: employeeIdInput.val().trim()
    };
    console.log(userData);

    if (!userData.username || !userData.password || !userData.employeeId) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.username, userData.password, userData.employeeId);
    employeeIdInput.val("");
    usernameInput.val("");
    passwordInput.val("");
  });

  // Does a post to the signup route. If succesful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(username, password, employeeId) {
    console.log('username: ' + username + ' password: ' + password);
    $.post("/api/admin", {
      username: username,
      password: password,
      employeeId: employeeId
    })
    .then(handleResponse);
  }

  function formatErr(err) {
    return err.charAt(0).toUpperCase() + err.slice(1) + '.';  // Format our error response
  }

  function handleUserErr(err) {
    console.log(err);
    $("#alert .msg").text(formatErr(err.errors[0].message));
    $("#alert").fadeIn(500);
  }

  function handleResponse(err) {
    if (err.errors) {  // check to see if any error message is returned.
      handleUserErr(err);
    } else {
      alert('Successfully added user.');  // I'd like to replace this with a modal
      location.reload();  // reload to display new data
    } 
  }
});
