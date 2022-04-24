import { getCookie } from "./getCookie";

function DisplaySignoffs(data){
    var role = getCookie('role');
    var table;
    if (role == 'student') {
        table = `<table id='skilltable' class='table striped-table'>
        <thead>
        <th>ID</th>
        <th>Signoff Type</th>
        <th>Signoff Date</th>
        <th>Inst. Last Name</th>
        <th>Inst. First Name</th>
        <th>Skill</th>
        <th>Group</th>
        </thead>
        <tbody>`;
        for (var i=0; i<data.length; i++){
            table += "<tr>";
            var it = data[i];
            table += "<td>" + it.Id + "</td>";
            table += "<td>" + it.Signofftype + "</td>";
            table += "<td>" + it.Signoffdate + "</td>";
            table += "<td>" + it.Ilastname + "</td>";
            table += "<td>" + it.Ifirstname + "</td>";
            table += "<td>" + it.Skillname + "</td>";
            table += "<td>" + it.Groupname + "</td>";
            table += "</tr>";
        }
    }

    if (role == 'instructor') {
        table = `<table id='skilltable' class='table striped-table'>
        <thead>
        <th>ID</th>
        <th>Signoff Type</th>
        <th>Signoff Date</th>
        <th>Stud. Last Name</th>
        <th>Stud. First Name</th>
        <th>Inst. Last Name</th>
        <th>Inst. First Name</th>
        <th>Skill</th>
        <th>Group</th>
        </thead>
        <tbody>`;
        for (var i=0; i<data.length; i++){
            table += "<tr>";
            var it = data[i];
            table += "<td>" + it.Id + "</td>";
            table += "<td>" + it.Signofftype + "</td>";
            table += "<td>" + it.Signoffdate + "</td>";
            table += "<td>" + it.Slastname + "</td>";
            table += "<td>" + it.Sfirstname + "</td>";
            table += "<td>" + it.Ilastname + "</td>";
            table += "<td>" + it.Ifirstname + "</td>";
            table += "<td>" + it.Skillname + "</td>";
            table += "<td>" + it.Groupname + "</td>";
            table += "</tr>";
        }
    }

    table += "</tbody></table>"
    const datatable = document.getElementById('datatable');
    datatable.innerHTML = table;    
}

 export default DisplaySignoffs;