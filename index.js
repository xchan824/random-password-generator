const characters = ["A","B","C","D","E","F","G","H","I","J",
"K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y",
"Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n",
"o","p","q","r","s","t","u","v","w","x","y","z", "0", "1",
"2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#",
"$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",
",","|",":",";","<",">",".","?","/"];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*",
                "(", ")", "_", "-", "+", "=", "{", "[", "}", "]",
                ",", "|", ":", ";", "<", ">", ".", "?", "/"];

let filteredCharacters = [];

const generateButton = document.querySelector('#generate-button');
const passwordFieldOne = document.querySelector('#password-field-one');
const passwordFieldTwo = document.querySelector('#password-field-two');
const includeNumbers = document.querySelector('#include-numbers');
const includeSymbols = document.querySelector('#include-symbols');
const notification = document.querySelector('#notification');
const copiedPassword = document.querySelector('#copied-password');


let passwordLength = document.querySelector('#password-length');

function generatePassword() {
    filteredCharacters = characters;
    // when toggle numbers is checked, run this function before running randomizePassword
    if (!includeNumbers.checked) {
        filterNumbers()
    }

    // when toggle symbols is checked, run this function before running randomizePassword
    if (!includeSymbols.checked) {
        filterSymbols()
    }

    randomizePassword();
}

function randomizePassword() {
    passwordFieldOne.value = '';
    passwordFieldTwo.value = '';

    for (let i = 0; i < passwordLength.value; i++) {
        let firstRandomNum = Math.floor(Math.random() * filteredCharacters.length);
        let secondRandomNum = Math.floor(Math.random() * filteredCharacters.length);
        passwordFieldOne.value += filteredCharacters[firstRandomNum];
        passwordFieldTwo.value += filteredCharacters[secondRandomNum];
    }
}

function filterNumbers() {
    filteredCharacters = filteredCharacters.filter(item => !numbers.includes(item))
}

function filterSymbols() {
    filteredCharacters = filteredCharacters.filter(item => !symbols.includes(item))
}

function copyPasswordOne() {
    if (passwordFieldOne.value) {
        passwordFieldOne.select();
        passwordFieldOne.setSelectionRange(0, 99999); // For mobile devices
        navigator.clipboard.writeText(passwordFieldOne.value);
        notification.textContent = "Copied ";
        copiedPassword.textContent = passwordFieldOne.value;
    }
}

function copyPasswordTwo() {
    if (passwordFieldTwo.value) {
        passwordFieldTwo.select();
        passwordFieldTwo.setSelectionRange(0, 99999); // For mobile devices
        navigator.clipboard.writeText(passwordFieldTwo.value);
        notification.textContent = "Copied ";
        copiedPassword.textContent = passwordFieldTwo.value;
    }
}