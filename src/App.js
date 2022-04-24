import React from 'react';
//import { useState } from 'react';
import './App.css';
import signin from './api/signin';
import logout from './api/signout';

import { fetchData } from './api/fetchData';
import DisplayGroups from './api/DisplayGroups';
import DisplaySkills from './api/DisplaySkills';
import DisplayStudents from './api/DisplayStudents';
import DisplaySignoffs from './api/DisplaySignoffs';

function App() {

  const login = async (e) => {
    signin();
    const groups = await fetchData('getgroups');
    const skills = await fetchData('getskills');
    const students = await fetchData('getstudents');
  }

  const getGroups = async (e) => {
    const data = await fetchData('getgroups');
    DisplayGroups(data);
  }

  const getSkills = async (e) => {
    const data = await fetchData('getskills');
    DisplaySkills(data);
  }

  const getStudents = async (e) => {
    const data = await fetchData('getstudents');
    DisplayStudents(data);
  }

  const getSignoffs = async (e) => {
    const data = await fetchData('getsignoffs');
    DisplaySignoffs(data);
  }

  return (
    <ul>
      <li>
        <div className="ClinicalSkills" id="header">
          <div id='top'>
            <header className="App-header">
              <form id='user' name='user'>
                <label htmlFor='email'>Email Address: </label>
                <input type="text" className="email" placeholder="user@domain.com" id="email" />
                <br></br><label htmlFor='password'>Password: </label>
                <input type="password" className="password" id="password" />
              </form>
              <form id='buttons'>
                <input type="button" className='signin control'   onClick={login}      value="Log In" />
                <input type="button" className='signout control'  onClick={logout}      value="Log Out" />
                <input type="button" className="skills control"   onClick={getSkills}   value="Skills" />
                <input type="button" className="groups control"   onClick={getGroups}   value="Groups" />
                <input type="button" className="students control" onClick={getStudents} value="Students" />
                <input type="button" className='signoffs control' onClick={getSignoffs} value="Signoffs" />
              </form>
            </header>
          </div>
        </div>
      </li>
      <li>
        <div className='signoffs' id='signoffs'></div>
      </li>
      <li>
        <div className="datatable" id="datatable"></div>      
      </li>
    </ul>
  );
}


export default App;
