$(document).ready(function() {

	const logout = $("#logout");

	logout.click(function() {
		alert("Thanks for stopping by.");
		logoutUser();
	});

	function logoutUser() {
		$.get("/api/auth/logout")
	};
});