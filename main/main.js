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

function translateTwo(twoDigit) {
    var lessTwenty = lessTwentyNumber();
    var lessTen = lessTenNumber();
    var tensPlace = tensPlaceNumber();

    var tenPlace = twoDigit.charAt(0);
    var bitPlace = twoDigit.charAt(1);

    if (parseInt(tenPlace) === 1) {
        return lessTwenty[twoDigit];
    } else if (parseInt(tenPlace) === 0) {
        return lessTen[bitPlace];
    } else if (parseInt(tenPlace) === 0 || parseInt(bitPlace) === 0) {
        return '';
    }
    else {
        return tensPlace[tenPlace] + ' ' + lessTen[bitPlace];
    }
}