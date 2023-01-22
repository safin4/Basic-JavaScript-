// biggestnames =>
function biggestNames (names) {
    var larger = names[0];
    for (var i = 0; i < names.length; i++) {
        var element = names[i];
        if (element.length > larger.length) {
            larger = element;
        }
    }
    return larger;
}


// smallernames =>
function smallerNames (names) {
    var larger = names[0];
    for (var i = 0; i < names.length; i++) {
        var element = names[i];
        if (element.length < larger.length) {
            larger = element;
        }
    }
    return larger;
}

var names = ["Safin", "Rana", "Ray", "Jubayer", "Sabbir"];
var bigOutput = biggestNames(names);
var smallOutput = smallerNames(names);
console.log(bigOutput, smallOutput);
