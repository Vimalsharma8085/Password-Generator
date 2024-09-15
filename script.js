
document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generate');
    const copyButton = document.getElementById('copy');
    const clearButton = document.getElementById('clear');
    const passwordField = document.getElementById('password');
    const lengthInput = document.getElementById('length');
    const lowercaseCheckbox = document.getElementById('lowercase');
    const uppercaseCheckbox = document.getElementById('uppercase');
    const numbersCheckbox = document.getElementById('numbers');
    const specialCheckbox = document.getElementById('special');

    function generatePassword() {
        const length = parseInt(lengthInput.value);
        const hasLowercase = lowercaseCheckbox.checked;
        const hasUppercase = uppercaseCheckbox.checked;
        const hasNumbers = numbersCheckbox.checked;
        const hasSpecial = specialCheckbox.checked;

        const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numberChars = '0123456789';
        const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

        let characterSet = '';
        if (hasLowercase) characterSet += lowercaseChars;
        if (hasUppercase) characterSet += uppercaseChars;
        if (hasNumbers) characterSet += numberChars;
        if (hasSpecial) characterSet += specialChars;

        if (characterSet === '') {
            alert('Please select at least one character type.');
            return;
        }

        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characterSet.length);
            password += characterSet[randomIndex];
        }

        passwordField.value = password;
    }

    function copyToClipboard() {
        passwordField.select();
        document.execCommand('copy');
        alert('Password copied to clipboard!');
    }

    function clearFields() {
        passwordField.value = '';
        
        lengthInput.value = 12;
        
        lowercaseCheckbox.checked = true;
        uppercaseCheckbox.checked = true;
        numbersCheckbox.checked = true;
        specialCheckbox.checked = true;
    }

    generateButton.addEventListener('click', generatePassword);
    copyButton.addEventListener('click', copyToClipboard);
    clearButton.addEventListener('click', clearFields);
});

