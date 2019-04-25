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
    	console.log(res)
    	let person = res.person[0];
    	var newResult = "<h3>" + person.firstName + " " + person.lastName + "</h3>" +
    									"<h5>" + person.department + "<h5>" +
    									"<h5>" + person.location + "<h5>" +
    									person["Email"] ? "<span class='text-muted'>" + person["Email"].email + "</span>"  :
    										"<hr />" ;
    									// person["Extension"].ext ? "<span class='text-muted'>ext: " + person["Extension"].ext + "</span>" :
    									// 	"<hr />";
    	console.log(newResult);
    	$('#employee-results').append(newResult);							
     	$('#employee-details').modal();
      // alert(JSON.stringify(res));
    })
  }

});