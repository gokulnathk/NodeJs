var Math = require('mathjs');
var stdin = process.openStdin();
stdin.addListener("data", function(d) {
    var result = calcZero(parseInt(d));
    process.stdout.write(result.toString());
    process.exit();
});

function calcZero(input) {    
    var count = 0;    
    for (var i = 5; Math.floor(input/i) >= 1; i *= 5) {
        count += Math.floor(input/i);
    }
    return count;
}