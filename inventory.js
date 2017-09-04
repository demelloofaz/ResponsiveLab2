var myCars = [];

myCars[0] = {name:"Racy Ford Shelby Cobra", price: "$90,000"};
myCars[1] = {name:"Classic Ford F150 Pickup", price: "$40,000"};
myCars[2] = {name:"All American Chevy Corvette", price: "$50,000"};
myCars[3] = {name:"Vintage Muscle Chevy Camaro Super Sport", price: "$38,000"};
myCars[4] = {name:"Awesome 1960 Cadillac", price: "$32,000"};
myCars[5] = {name:"Pink VW Bug Convertible", price: "$25,000"};

function mySearchFunction() {
  // Declare variables
  var input, filter, table, tr, td, i;
  input = $(".searchbox").val();
  filter = input.toUpperCase();
  table = document.getElementById("carTableBody");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
// need a create table function down here...
function drawTable() {
   var holder ="";

   for (var i = 0; i < myCars.length; i++)
   {
      // construct a row for the table
      holder += "<tr id='row"  + i +"'>";
      holder += "<td>"+  myCars[i].name + "</td>";
      holder += "<td>" + myCars[i].price+ "</td>";
      holder += "</tr>";
   }

   $("#carTableBody").html(holder);
}

drawTable();
