$(document).ready(function () {

    // Refs
    var size = 5;
    var numberList = [];
    var userList = [];
    var numberGuessed = [];


    // Random Number
    while (numberList.length < size) {
        var number = getRandomNumber(1, 99);

        // Check unique number on list
        if (!numberList.includes(number)) {
            numberList.push(number);
        }
    }

    // Alert 
    alert("Read the following numbers carefully to try to win: " + numberList);

    // Timer 
    setTimeout(function () {

        // Ask numbers 
        while (userList.length < size) {
            var userNumber = parseInt(prompt("Enter a number " + (userList.length + 1) + " of " + size));

            // Validation
            if (userNumber < 0 || userNumber > 99 || isNaN(userNumber)) {
                var userNumber = parseInt(prompt("Sorry, value you entered is not valid. Enter a number " + (userList.length + 1) + " of " + size));
            } else if (userList.includes(userNumber)) {
                var userNumber = parseInt(prompt("Sorry, value you entered is not valid. Enter a number " + (userList.length + 1) + " of " + size));
            } else (userList.push(userNumber));
        }

        // Guessed numbers
        for (var i = 0; i < userList.length; i++) {

            if (numberList.includes(userList[i])) {
                numberGuessed.push(userList[i]);
            }
        }

        // Feedback
        // Random numbers
        console.log("Numbers to guess were: " + numberList);
        // User numbers
        console.log("Numbers you entered are: " + userList);
        // Result
        console.log("You have guessed " + numberGuessed.length + " out of " + numberList.length);
    }, 30000);
});

/**********
UTILITIES
**********/
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};