const input = document.querySelector('input');
const passwords = ['jedEN', 'DwA', "TrzY"];
const messeges = ['super', 'działa', 'To też jest poprawne'];
const div = document.querySelector('.messege');
const showMessege = function (e) {
    let inputText = e.target.value;
    inputText = inputText.toLowerCase();
    // const newPasswords = []
    for (let i = 0; i < passwords.length; i++) {
        // newPasswords[i] = passwords[i].toLowerCase();
        passwords.splice(i, 1, passwords[i].toLowerCase());
        if (inputText === passwords[i]) {
            div.textContent = messeges[i];
            div.style.backgroundColor = 'green';
            e.target.value = "";
            return
        } else {
            div.style.backgroundColor = 'red';
            div.textContent = "To hasło nie jest prawidłowe";
        }
    }
    console.log(passwords);
};
input.addEventListener('input', showMessege);