import React from 'react';
//import { useState } from 'react';
import './App.css';
import signin from './api/signin';
import logout from './api/signout';
import signoffStudent from './api/SignoffStudent';

import { getCookie } from "./api/getCookie";
import { fetchData } from './api/fetchData';

import DisplayGroups from './api/DisplayGroups';
import DisplaySkills from './api/DisplaySkills';
import DisplayStudents from './api/DisplayStudents';
import DisplaySignoffs from './api/DisplaySignoffs';

function App() {

  const login = async (e) => {
    document.getElementById('signoffs').innerHTML='';
    document.getElementById('datatable').innerHTML='';
    var role = getCookie('role');
    if (role === 'student') {
      document.getElementById('students').disabled = true;
    }
    if (role === 'instructor' || role === 'admin') {
      document.getElementById('students').disabled = false;
    }
    signin();
  }

  const getGroups = async (e) => {
    document.getElementById('signoffs').innerHTML='';
    const data = await fetchData('getgroups');
    DisplayGroups(data);
  }

  const getSkills = async (e) => {
    document.getElementById('signoffs').innerHTML='';
    const data = await fetchData('getskills');
    DisplaySkills(data);
  }

  const getStudents = async (e) => {
    document.getElementById('signoffs').innerHTML='';
    var role = getCookie('role');
    if (role === 'instructor' || role === 'admin'){
      const data = await fetchData('getstudents');
      DisplayStudents(data);
    }
  }

  const getSignoffs = async (e) => {
    const data = await fetchData('getsignoffs');
    DisplaySignoffs(data);
    document.getElementById('signoffs').innerHTML='';
    var role = getCookie('role');
    if (role === 'instructor' || role === 'admin') {   
      const skills = await fetchData('getskills');
      const students = await fetchData('getstudents');

      var studentselect = document.createElement('select');
      var skillselect = document.createElement('select');
      var typeselect = document.createElement('select');

      studentselect.name = 'studentselect';
      studentselect.id = 'studentselect';
      skillselect.name = 'skillselect';
      skillselect.id = 'skillselect';
      typeselect.name = 'typeselect';
      typeselect.id = 'typeselect';

      for (var i=0; i<students.length; i++) {
        var option = document.createElement('option');
        option.value = students[i].Id;
        option.text = students[i].Firstname + ' ' + students[i].Lastname;
        studentselect.appendChild(option);
      }
      var studentlabel = document.createElement('label');
      studentlabel.innerHTML = 'Select Student: ';
      studentlabel.htmlFor = 'studentselect';
      document.getElementById('signoffs').appendChild(studentlabel).appendChild(studentselect);

      for (i=0; i<skills.length; i++){
        option = document.createElement('option');
        option.value = skills[i].Id;
        option.text = skills[i].Skillname;
        skillselect.appendChild(option);
      }
      var skilllabel = document.createElement('label');
      skilllabel.innerHTML = ' Select Skill: ';
      skilllabel.htmlFor = 'skillselect';
      document.getElementById('signoffs').appendChild(skilllabel).appendChild(skillselect);

      var tmpOption = document.createElement('option');
      tmpOption.value = 'lab';
      tmpOption.text = 'lab';
      typeselect.appendChild(tmpOption);
      tmpOption = document.createElement('option');
      tmpOption.value = 'clinical';
      tmpOption.text = 'clinical';
      typeselect.appendChild(tmpOption);
      var typelabel = document.createElement('label');
      typelabel.innerHTML = ' Signoff Type: ';
      typelabel.htmlFor = 'typeselect';
      document.getElementById('signoffs').appendChild(typelabel).appendChild(typeselect);

      var submitsignoff = document.createElement('input');
      submitsignoff.type = 'button';
      submitsignoff.onclick = signoffStudent;
      submitsignoff.value = 'Signoff Student';
      document.getElementById('signoffs').appendChild(submitsignoff);
    }
  }

  return (
    <ul>
      <li>
        <div className='ClinicalSkills' id='header'>
          <div id='top'>
            <header className='App-header'>
              <form id='user' name='user'>
                <label htmlFor='email'>Email Address: </label>
                <input type='text' className='email' placeholder='user@domain.com' id='email' />
                <br></br><label htmlFor='password'>Password: </label>
                <input type='password' className='password' id='password' />
              </form>
              <form id='buttons'>
                <input type='button' className='signin control'   onClick={login}       value='Log In' />
                <input type='button' className='signout control'  onClick={logout}      value='Log Out' />
                <input type='button' className='skills control'   onClick={getSkills}   value='Skills' />
                <input type='button' className='groups control'   onClick={getGroups}   value='Groups' />
                <input type='button' className='signoffs control' onClick={getSignoffs} value='Signoffs' />
                <input type='button' className='students control' onClick={getStudents} value='Students' id='students' />
              </form>
            </header>
          </div>
        </div>
      </li>
      <li>
        <div className='signoffs' id='signoffs'></div>
      </li>
      <li>
        <div className='datatable' id='datatable'></div>      
      </li>
    </ul>
  );
}


export default App;
