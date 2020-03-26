const input = document.getElementById('password');
const div = document.querySelector('.messege');
// const password = 'user';
// const messege = "Twoje hasło jest poprawne :)";
const passwords = ['user', 'ninja', 'rajd'];
const messeges = ['Wbisałeś hasło user', 'Wpisałeś hasło ninja', 'Wpisałeś hasło rajd'];
input.addEventListener('input', (e) => {
    // Dla jednego hasła
    // if (e.target.value === password) {
    //     div.textContent = messege;
    //     e.target.value = '';
    //     div.style.backgroundColor = "green";
    // } else {
    //     div.textContent = "Twoje hasło jest nieprawidłowe, spróbuj jeszcze raz!"
    //     div.style.backgroundColor = "red";
    // }

    // Dla wielu haseł
    let inputText = e.target.value;
    if (inputText !== "") {
        div.style.backgroundColor = "red";
        div.textContent = "Twoje hasło jest nieprawidłowe, spróbuj jeszcze raz!";
    } else {
        div.style.backgroundColor = "white";
        div.textContent = "";
    }
    passwords.forEach(function (password, index) {
        if (password === inputText) {
            div.textContent = messeges[index];
            e.target.value = '';
            // console.log('dziala');
            div.style.backgroundColor = "green";
        }
    })

})