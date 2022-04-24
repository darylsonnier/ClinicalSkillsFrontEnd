function DisplayGroups(data){
  var table;
  table = "<table id='skilltable' class='table striped-table'><thead><th>ID</th><th>Name</th><th>Class</th><th>Enabled</th></thead><tbody>"
  for (var i=0; i<data.length; i++){
    table += "<tr>";
    var it = data[i];
    table += "<td>" + it.Id + "</td>";
    table += "<td>" + it.Name + "</td>";
    table += "<td>" + it.Class + "</td>";
    table += "<td>" + it.Enabled + "</td>";
    table += "</tr>";
  }
  table += "</tbody></table>"
  const datatable = document.getElementById('datatable');
  datatable.innerHTML = table;
}
export default DisplayGroups;