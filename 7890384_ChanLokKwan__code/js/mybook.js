document.getElementById('InputTest').onkeypress = searchPrep;

function searchPrep() {
	console.log('search');
	var Input = document.getElementById('InputTest').value;

	if (Input.length > 2) {
		console.log('start search');
		search(Input);
	}
}
function search(Input) {


  var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ Input +"&format=json&origin=*";

  var request = new XMLHttpRequest();
  //var container = document.getElementById("OutputDiv");
  request.open('GET', url,true);
  document.getElementById('OutputDiv').innerHTML = "";
 

  request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    // Success!
    var data = JSON.parse(request.responseText);
    console.log(data);
           for(var i=0;i<data[1].length;i++){
             //$("#OutputDiv").prepend("<div><div class='Output'><a href="+data[3][i]+"><h2>" + data[1][i]+ "</h2>" + "<p>" + data[2][i] + "</p></a></div></div>");
             //document.write("<div><div class='Output'><a href="+data[3][i]+"><h2>" + data[1][i]+ "</h2>" + "<p>" + data[2][i] + "</p></a></div></div>");
             document.getElementById('OutputDiv').innerHTML   += "<div><div class='Output'><a href="+data[3][i]+"><h2>" + data[1][i]+ "</h2>" + "<p>" + data[2][i] + "</p></a></div></div>";
           }

  } else {
    // We reached our target server, but it returned an error

  }
};


request.send();
}

