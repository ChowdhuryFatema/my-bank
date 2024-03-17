// log in
document.getElementById('btn-submit').addEventListener('click', function(){
    const emailfield = document.getElementById('user-email');
    const email = emailfield.value;
    const passwordfield = document.getElementById('user-password');
    const password = passwordfield.value;
    if(email === 'fatemachowdhury318@gmail.com' && password === 'secret'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Dont Match Your Email And PassWord');
    }
})

