var ascii =
    " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
function encode(str) {
    var chars = ascii.split("");
    chars = shuffle(chars);
    let shift = Math.floor(Math.random() * 9);
    shift = shift == 0 ? 2 : shift;
    let ud = Math.floor(Math.random() * 2) == 1 ? "u" : "d";
    let final = shift.toString() + ud;
    for (var i = 0; i < str.length; i++) {
        var ind = chars.indexOf(str[i]);
        if (ud == "u") newInd = ind + shift
        else if (ud == "d") newInd = ind - shift;
        if (newInd > chars.length) {
            newInd = newInd - chars.length;
        } else if (newInd < 0) {
            newInd = chars.length + newInd;
        }
        final += chars[newInd];
    }
    for (var j = 0; j < chars.length; j++) {
        final += chars[j];
    }
    console.log(final);
}
function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

var array = ["Isaac", "Steph"];
var result = [];

function arrencode(str) {
    for (var e = 0; e < str.length; e++) {
        var chars = ascii.split("");
        chars = shuffle(chars);
        let shift = Math.floor(Math.random() * 9);
        shift = shift == 0 ? 2 : shift;
        let ud = Math.floor(Math.random() * 2) == 1 ? "u" : "d";
        let final = shift.toString() + ud;
        for (var i = 0; i < str[e].length; i++) {
            var ind = chars.indexOf(str[e][i]);
            if (ud == "u") newInd = ind + shift
            else if (ud == "d") newInd = ind - shift;
            if (newInd > chars.length) {
                newInd = newInd - chars.length;
            } else if (newInd < 0) {
                newInd = chars.length + newInd;
            }
            final += chars[newInd];
        }
        for (var j = 0; j < chars.length; j++) {
            final += chars[j];
        }
        console.error(final);
        navigator.clipboard.writeText(final);
    }
}
arrencode(array);