
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('submitButton');
const togglePassword = document.getElementById('togglePassword');
const errorMessage = document.getElementById('errorMessage');


loginForm.addEventListener('submit', function (e) {
  e.preventDefault(); 

  const username = usernameInput.value.trim();
  const password = passwordInput.value;

 
  if (!username || !password) {
    errorMessage.textContent = 'Пожалуйста, заполните все поля.';
    errorMessage.style.display = 'block';
  } else {
    errorMessage.style.display = 'none';
    
    console.log('Имя пользователя:', username);
    console.log('Пароль:', password);
  }
});


togglePassword.addEventListener('change', function () {
  passwordInput.type = this.checked ? 'text' : 'password';
});
