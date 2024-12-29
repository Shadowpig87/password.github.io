let passwordLength = 12;
let includeLowercase = true;
let includeUppercase = true;
let includeNumbers = true;
let includeSymbols = false;

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    const lowercaseChars = "qwertyuiopasdfghjklzxcvbnm";
    const uppercaseChars = "QWERTYUIOPASDFGHJKLZXCVBNM";
    const numberChars = "1234567890";
    const symbolChars = "!@#$%^&*()_+?/><.,:;'{}[]'";

    let allowedChars = "";
    let password = "";
    if (includeLowercase) allowedChars += lowercaseChars;
    if (includeUppercase) allowedChars += uppercaseChars;
    if (includeNumbers) allowedChars += numberChars;
    if (includeSymbols) allowedChars += symbolChars;

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    return password;
}

function toggleOption(option, button) {
    if (option === "includeLowercase") includeLowercase = !includeLowercase;
    if (option === "includeUppercase") includeUppercase = !includeUppercase;
    if (option === "includeNumbers") includeNumbers = !includeNumbers;
    if (option === "includeSymbols") includeSymbols = !includeSymbols;

    button.textContent = `${button.textContent.split(':')[0]}: ${eval(option)}`;
}

document.getElementById('toggleLowercase').addEventListener('click', function() {
    toggleOption('includeLowercase', this);
});

document.getElementById('toggleUppercase').addEventListener('click', function() {
    toggleOption('includeUppercase', this);
});

document.getElementById('toggleNumbers').addEventListener('click', function() {
    toggleOption('includeNumbers', this);
});

document.getElementById('toggleSymbols').addEventListener('click', function() {
    toggleOption('includeSymbols', this);
});

document.getElementById('passwordLength').addEventListener('input', function() {
    passwordLength = parseInt(this.value) || 1; // Ensure password length is at least 1
});

const button = document.getElementById("button");
button.addEventListener("click", () => {
    const pElement = document.getElementById("p1");
    pElement.innerHTML = ""; // Clear previous passwords

    for (let i = 1; i <= 1000; i++) {
        const password = generatePassword(
            passwordLength,
            includeLowercase,
            includeUppercase,
            includeNumbers,
            includeSymbols
        );
        const passwordLine = document.createElement("p");
        passwordLine.textContent = password;
        pElement.appendChild(passwordLine);
    }
    button.remove(); // Disable the button after generating passwords
});