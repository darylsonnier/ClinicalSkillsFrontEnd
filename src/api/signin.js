import { refreshToken } from './refreshToken';
async function signin(){
  let email = document.getElementById('email');
  let password = document.getElementById('password');
  let formData = new FormData();
  formData.append('Email', email.value);
  formData.append('Password', password.value);
  
  fetch("https://demoschool.edu:9000/signin",
  {
      body: formData,
      method: "post",
      credentials: 'include',
      mode:'cors',
  }).then(response => {
    console.log(response.status);
  }).catch(err => {
    console.error('Error:' , err)
  });
  clearInterval(window.interval);
  window.interval = setInterval(refreshToken, 295000);
}

export default signin;