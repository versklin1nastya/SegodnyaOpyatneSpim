const form = document.getElementById('login-form'); 

form.addEventListener('submit', function(event) { 
    event.location.href = '/templates/Mainpage.html'; 

    const username = form.elements.username.value;
    const surname = form.elements.surname.value;
    const login = form.elements.login.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    const userData = {
        username: username,
        surname: surname,
        login: login,
        email: email,
        password: password
    };

    localStorage.setItem('userData', JSON.stringify(userData)); 

    alert('Успешная регистрация!'); 
});