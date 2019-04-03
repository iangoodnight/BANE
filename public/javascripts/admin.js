$(document).ready(function() {
  // For Debugging
  console.log("Admin Ready!");
  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var usernameInput = $("input#username-input");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      username: usernameInput.val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.username || !userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.username, userData.email, userData.password);
    usernameInput.val("")
    emailInput.val("");
    passwordInput.val("");
  });

  // Does a post to the signup route. If succesful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(username, email, password) {
    // console.log('username: ' + username + ' email: ' + email + ' password: ' + password);
    $.post("/api/admin", {
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
