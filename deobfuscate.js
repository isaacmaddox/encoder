// "Isaac" = {45d*wP5Y5Dz2"4f[.sowc~X9neCZ]/5B)_7N@mK`&+}MQG|0'SuJ\1tx?!UIbrO#p -R6q$FP>gDV;T8Edhi3av^l<%,kWALH=j(y:
// Key = 45dwP55D
// Extract ASCII character string (starting at index 0, then at every parseInt(string[1]) index)
// Get key (611u)

function decode(str) {
    var asciiIndex = parseInt(str[1]);
    var chars = str[0];
    var stringLength = ""; // Length of inputted string, not encoded string
    var string = str.split("");
    var keyLength = 0;

    if (string[3] !== "d" && string[3] !== "u") {
        stringLength += string[2] + string[3];
    } else {
        stringLength = string[2];
    }
    stringLength = parseInt(stringLength);

    var numOfTimesAsciiIsInKey = Math.floor(stringLength / asciiIndex);
    console.error(numOfTimesAsciiIsInKey);

    // save last index, if char is undefined, go back to index + 1
    var lastIndex = 0;
    for (var i = 1; i < 94; i++) {
        var char = "";
        lastIndex = i;
        if (i == 1) {
            char = string[asciiIndex];
            string.splice(asciiIndex, 1);
        }
        else if (i > string.length) {
            char = string[lastIndex + 1];
        } else {
            char = string[i * asciiIndex];
            string.splice(i * asciiIndex, 1);
        }
        console.log(char); // REMOVIENOVWE

        chars += char;
    }
    string.splice(0, 1);
    console.log(string);
    console.log(stringLength);

}

// #TODO: fix inc being rounded in key (dumbass).