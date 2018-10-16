function fillArraySumAndAvg() {

    var scores = [];

    var sum = 0;
    for (var index = 0; index < 18; index++) {
        let s = getRandomNumber();
        scores.push(s);
        sum += s;
    }
    var avg = (sum / scores.length).toFixed(2);
    console.log(scores, sum, avg);

    var par = 0;
    var overUnder = "";
    if (sum == 72) {
        overUnder = "You scored PAR."
    } else if (sum < 72) {
        par = 72 - sum;
        overUnder = "You scored " + par + " UNDER PAR !!!"
    } else if (sum > 72) {
        par = sum - 72;
        if (par < 10) {
            overUnder = "You scored " + par + " Over PAR."
        } else {
            overUnder = "You scored " + par + " Over PAR. GO GET SOME LESSONS !!!"
        }
    }

    $("#holes").text(scores.join(", "));
    $("#sum").val(sum);
    $("#avg").val(avg);
    $("#overUnder").text(overUnder);
}

function getRandomNumber() {
    return Math.floor((Math.random() * 7) + 1);
}