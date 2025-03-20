document.addEventListener("DOMContentLoaded", () => {

    const passwordField = document.getElementById("password");

    const lengthSlider = document.getElementById("length");

    const lengthValue = document.getElementById("lengthValue");

    const uppercaseCheckbox = document.getElementById("uppercase");

    const numbersCheckbox = document.getElementById("numbers");

    const symbolsCheckbox = document.getElementById("symbols");

    const generateBtn = document.getElementById("generateBtn");

    const copyBtn = document.getElementById("copyBtn");

    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";

    const numberChars = "0123456789";

    const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?/";

    function generatePassword() {

        let length = parseInt(lengthSlider.value);
      
