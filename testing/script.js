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












    // Assignment Code
    var generateBtn = document.querySelector("#generate");

    // Add event listener to generate button
    generateBtn.addEventListener("click", generatePassword);

    //On Btn Press User is prompted

    function generatePassword() {

        //Prompt ask user the lenght of password, least 8 and max 128
        var length = prompt("How many characters will your password be? Enter a number between 8 and 128");

        //Prompt ask user what type of password they would like letters,numbers,symbols,upper or lower?
        var charLow = confirm("Would you like lowercase characters?");
        var charUpp = confirm("Would you like uppercase characters?");
        var charNum = confirm("Would you like numeric characters?");
        var charSpe = confirm("Would you like special characters?");
        var charSet = "";
        // var charType = charType.toLowerCase()

        if (length) {
            alert("Password Length: " + length);
        }

        if (charLow === "true") {
            charSet = "abcdefghijklmnopqrstuvwxyz";
            alert("Lowercase: " + charLow);
        }

        if (charUpp === "true") {
            charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            alert("Uppercase: " + charUpp);
        }

        if (charNum === "true") {
            charSet = "0123456789";
            alert("Numeric: " + charNum);
        }

        if (charSpe === "true") {
            charSet = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
            alert("Special: " + charSpe);
        }

        console.log(length);
        console.log(charSpe);
        console.log(charNum);
        console.log(charUpp);
        console.log(charLow);


        var retVal = "";
        for (var i = 0; i < length; i++) {
          //picks a character within charSet at index of random number
          retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
        }
        return retVal;
    }


    // alert(generatePassword());



    // Write password to the #password input
    function writePassword() {
        var password = generatePassword();
        var passwordText = document.querySelector("#password");

        passwordText.value = password;

    }
