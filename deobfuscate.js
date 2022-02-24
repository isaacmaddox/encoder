function decode(str) {
    var de = str.split("");
    var shift = parseInt(str[0]);
    var dir = str[1];
    de.splice(0, 2);
    var ascii = de.splice(de.length - 95, de.length);
    let final = "";
    for (var i = 0; i < de.length; i++) {
        var ind = ascii.indexOf(de[i]);
        var newInd = 0;
        if (dir == "u") newInd = ind - shift
        else newInd = ind + shift;
        if (newInd > ascii.length - 1) {
            newInd = newInd - ascii.length;
        } else if (newInd < 0) {
            newInd = ascii.length + newInd;
        }
        final += ascii[newInd];
    }
    console.log(final);
}