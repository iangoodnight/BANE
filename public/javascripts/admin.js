$(document).ready(function() {
  // For Debugging
  console.log("Admin Ready!");
  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var employeeIdInput = $("input#employeeId-input");
  var lastNameInput = $("input#lastName-input");
  var usernameInput = $("input#username-input");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");

  employeeIdInput.keyup(function(e) {
    console.log(e);
    findPeople(employeeIdInput.val().trim());
    console.log(employeeIdInput.val().trim());
  });

  function findPeople(employeeId) {
    var url = "/api/people/" + employeeId;
    $.get(url)
    .then(function(res) {
      console.log(res);
    })
  }

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      firstName: firstNameInput.val().trim(),
      lastName: lastNameInput.val().trim(),
      username: usernameInput.val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };
    console.log(userData);

    if (!userData.firstName || !userData.lastName || !userData.username || !userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.firstName, userData.lastName, userData.username, userData.email, userData.password);
    firstNameInput.val("");
    lastNameInput.val("");
    usernameInput.val("");
    emailInput.val("");
    passwordInput.val("");
  });

  // Does a post to the signup route. If succesful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(firstName, lastName, username, email, password) {
    console.log('firstName: ' + firstName + ' lastName: ' + lastName + 'username: ' + username + ' email: ' + email + ' password: ' + password);
    $.post("/api/admin", {
      firstName: firstName,
      lastName: lastName,
      username: username,
      email: email,
      password: password
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
