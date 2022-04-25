function DisplayContacts(data){
  var table;
  table = `<table id='skilltable' class='table striped-table'>
    <thead>
    <th>ID</th>
    <th>Role</th>
    <th>Last Name</th>
    <th>First Name</th>
    <th>Email</th>
    <th>Cohort</th>
    </thead>
    <tbody>`
    for (var i=0; i<data.length; i++){
    table += "<tr>";
    var it = data[i];
    table += "<td>" + it.Id + "</td>";
    table += "<td>" + it.Userrole + "</td>";
    table += "<td>" + it.Lastname + "</td>";
    table += "<td>" + it.Firstname + "</td>";
    table += "<td>" + it.Email + "</td>";
    table += "<td>" + it.Cohort + "</td>";
    table += "</tr>";
  }
  table += "</tbody></table>"
  const datatable = document.getElementById('datatable');
  datatable.innerHTML = table;
}
export default DisplayContacts;