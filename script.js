// Assignment Code
var generateBtn = document.getElementById("generate");

// Add event listener to generate button
generateBtn.onclick = function generatePassword() {
    var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var special = ["!", "@", "#", "&", "*", "/", "{", "}", "(", "%", "+", ".", "?"];
    var passwordCharacters = [];
    var passwordLength = prompt("Please enter password length");
    var includeSpecialCharacters = confirm("Include special characters?");
    var includeNumbers = confirm("Include numbers?");
    var includeLowerCharacters = confirm("Include lower characters?");
    var includeUpperCharacters = confirm("Include upper characters?");


    if (isNaN(passwordLength))
        alert("Please provide a number");
    else {
        var length = Number(passwordLength);
        if (length < 8 || length > 128)
            alert("Please enter a value between 8 and 128");
        else {
            if (includeNumbers)
                passwordCharacters.concat(number);
            if (includeUpperCharacters)
                passwordCharacters.concat(uppercase);
            if (includeLowerCharacters)
                passwordCharacters.concat(lowercase);
            if (includeSpecialCharacters)
                passwordCharacters.concat(special);

            var password = "";


            for (var i = 0; i < length; i++) {
                var index = Math.floor(Math.random() * passwordCharacters.length);
                 password += passwordCharacters[index];
                }

            alert("password is" + password);
            }
        }
    }
