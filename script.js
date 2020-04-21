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
