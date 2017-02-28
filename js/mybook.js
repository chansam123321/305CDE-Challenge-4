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
  var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ Input +"&format=json&callback=?";
       $.ajax({
     url: url,
     type: 'GET',
     contentType: "application/json; charset=utf-8",
     async: false,
         dataType: "json",
         success: function(data, status, jqXHR) {
           console.log(data);
           $("#OutputDiv").html();
           for(var i=0;i<data[1].length;i++){
             $("#OutputDiv").prepend("<div><div class='Output'><a href="+data[3][i]+"><h2>" + data[1][i]+ "</h2>" + "<p>" + data[2][i] + "</p></a></div></div>");
           }

         }
   })
}
