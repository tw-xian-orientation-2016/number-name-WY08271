function splitNumber(number) {
    var upsideNumber = number.split("").reverse().join("");
    var threeDigits = upsideNumber.match(/.{3}|.+$/g);

    for (var i = 0; i < threeDigits.length; i++) {
        threeDigits[i] = threeDigits[i].split("").reverse().join("");
    }

    return threeDigits;
}

function translateThreeDigits(threeDigits) {

}

function translateOne(oneDigit) {
    var lessTen = lessTenNumber();

    return lessTen[oneDigit];
}