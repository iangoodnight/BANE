$(document).ready(function() {
  // For Debugging
  console.log("Directory Ready!");

  const row = $("tr");

  row.click(function() {
  	var employeeId = parseInt(this.id.split('-')[1]);
  	findPeople(employeeId);
  });

  function findPeople(employeeId) {
    var url = "/api/people/" + employeeId;
    $.get(url)
    .then(function(res) {
    	$('#employee-details').modal();
      alert(JSON.stringify(res));
    })
  }

});