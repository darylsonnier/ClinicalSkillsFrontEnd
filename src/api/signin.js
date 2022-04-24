import { refreshToken } from './refreshToken';
async function signin(){
  let email = document.getElementById('email');
  let password = document.getElementById('password');
  let formData = new FormData();
  formData.append('Email', email.value); // 'sonnierd3916@uhcl.edu');
  formData.append('Password', password.value); //'trustno1');
  
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
  window.interval = setInterval(refreshToken, 280000);
}

export default signin;