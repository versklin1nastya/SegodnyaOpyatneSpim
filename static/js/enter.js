const enterForm = document.getElementById('enter-form'); 

enterForm.addEventListener('submit', function(event) { 
    event.location.href = '/templates/Mainpage.html'; 

    const login = enterForm.elements.login.value; 
    const password = enterForm.elements.password.value; 
    const email = enterForm.elements.email.value; 

    const userData = JSON.parse(localStorage.getItem('userData')); 

    if (userData && userData.login === login && userData.password === password && userData.email === email) { 
        alert('Вы успешно вошли!'); 
    } else { 
        alert('Ошибка авторизации'); 
    } 
});