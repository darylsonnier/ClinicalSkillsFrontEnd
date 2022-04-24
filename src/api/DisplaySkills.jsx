function DisplaySkills(data){
  var table;
  table = "<table id='skilltable' class='table striped-table'><thead><th>ID</th><th>Skill Name</th><th>Group ID</th><th>Group Name</th><th>Enabled</th></thead><tbody>"
  for (var i=0; i<data.length; i++){
    table += "<tr>";
    var it = data[i];
    table += "<td>" + it.Id + "</td>";
    table += "<td>" + it.Skillname + "</td>";
    table += "<td>" + it.Groupid + "</td>";
    table += "<td>" + it.Groupname + "</td>";
    table += "<td>" + it.Enabled + "</td>";
    table += "</tr>";
  }
  table += "</tbody></table>"
  const datatable = document.getElementById('datatable');
  datatable.innerHTML = table;
}
export default DisplaySkills;