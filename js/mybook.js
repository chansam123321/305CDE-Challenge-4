document.getElementById('Query').onkeypress = searchPrep;

function searchPrep() {
	console.log('search');
	var text = document.getElementById('Query').value;
	if (text.length > 2) {
		console.log('start search');
		search(text);
	}
}
function search(text) {
  var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ text +"&format=json&callback=?";
       $.ajax({
     url: url,
     type: 'GET',
     contentType: "application/json; charset=utf-8",
     async: false,
         dataType: "json",
         success: function(data, status, jqXHR) {
           console.log(data);
           $("#Suggestions”").html();
           for(var i=0;i<data[1].length;i++){
             $("#Suggestions”").prepend("<div><div class='well'><a href="+data[3][i]+"><h2>" + data[1][i]+ "</h2>" + "<p>" + data[2][i] + "</p></a></div></div>");
           }

         }
   })
}
/*
function search(text) {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", 'https://en.wikipedia.org/w/api.php?action=opensearch&search='+text+"&format=json&callback=?", true);
	xhr.onload = function (e) {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				//console.log(xhr.responseText);
        /*
				var data = JSON.parse(xhr.responseText);
				//console.log(data.totalItems);
				var books = data.items;
				//var booklist = [];
				var table = document.getElementById('searchResults');
				table.innerHTML = '';
				for(var i=0; i<books.length; i++) {
					//booklist.push({title: books[i].volumeInfo.title});
					var row = document.createElement('tr');
					row.innerHTML = '<td>'+books[i].volumeInfo.title+'</td>';
					//console.log(books[i].id);
					//row.onclick = showDetails(books[i].id);
					table.appendChild(row);

				}*/
				//console.log(booklist);
/*
			} else {
				console.error(xhr.statusText);
			}
		}
	};
	xhr.onerror = function (e) {
		console.error(xhr.statusText);
	};
	xhr.send(null);
}
*/
