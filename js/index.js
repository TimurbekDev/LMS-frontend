import { login } from "./utils/auth.services.js";

document.getElementById('login-btn').addEventListener('click', async function (event) {
    event.preventDefault();
  
    const email = document.getElementById('user-email').value;
    const password = document.getElementById('user-password').value;
  
    const loginData = {
      email: email,
      password: password
    };
    
    const res = await login(loginData)
    console.log(res);
    

    if(res.message == 'Ok'){
      window.location.href = '../pages/seller.html'
    }
    
    document.getElementById('error').style.display = 'flex'
});
  