// Encoder
/*
  Random shuffle an array of characters
  Take a string from user input
  Generate random number, num of char to shuffle by, and a letter "u" or "d" (up or down)
  Shuffle each character in the string
  Put encoder key (i.e. "3u") in the first two chars
  Hide the shuffled characters string in every nth index (the encoder key num) in the string; append remaining characters at the end of the string OR use dummy characters to keep number at every index
    - if n > 10, set n = n - 10

  Hide key in the xth index, where x = the constant in the encoder key
  Keep length of original string in the beginning so as to aid in decoding (optional)
*/

var ascii =
    " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";

function encode(str) {
    let chars = ascii.split("");
    const shuffled = shuffle(chars);
    chars = "";
    for (var i = 0; i < shuffled.length; i++) {
        chars += shuffled[i];
    }

    var inc = Math.floor(Math.random() * ascii.length);
    inc = inc == 3 ? 2 : inc; // invalidate 3 as an inc value to prevent 
    var ud = Math.floor(Math.random() * 2);
    ud = ud == 1 ? "u" : "d";

    // Go through each character of str and shift them either up or down by inc
    // str = str.split("");
    let encoded = "";
    for (var j = 0; j < str.length; j++) {
        var storeInc = 0;
        var incChanged = false;
        var index = chars.indexOf(str[j]);
        if (index + inc > chars.length) {
            index = (index + inc) - chars.length;
            storeInc = inc;
            incChanged = true;
            inc = 0;
        } else if (index - inc < 0) {
            index = chars.length + (index - inc);
            storeInc = inc;
            incChanged = true;
            inc = 0;
        }
        // console.log(index + inc);
        if (ud == "u") encoded += chars[index + inc];
        else encoded += chars[index - inc];

        if (incChanged) inc = storeInc
        else inc = inc;
    }

    // Adding key to string
    // If inc > 10 set inc to Math.floor(inc / 10)
    inc = inc == 3 ? 2 : inc; // invalidate 3 as an inc value to prevent 
    if (inc > 10) inc = Math.floor(inc / 10);

    var output = "";
    var final = "";

    // Add "key" to beginning
    output += inc.toString() + str.length.toString() + ud + encoded;
    console.warn("Key: " + output);
    output = output.split("");

    for (var a = 0; a < chars.length; a++) {
        output.splice(a * inc, 0, chars[a]);
    }

    for (var b = 0; b < output.length; b++) {
        final += output[b];
    }

    console.log(final);
    return encoded;
}

function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex]
        ];
    }

    return array;
}