function splitNumber(number) {
    var upsideNumber = number.split("").reverse().join("");
    var threeDigits = upsideNumber.match(/.{3}|.+$/g);

    for (var i = 0; i < threeDigits.length; i++) {
        threeDigits[i] = threeDigits[i].split("").reverse().join("");
    }

    return threeDigits;
}

function translateThreeDigits(threeDigits) {
    var numberString = [];

    threeDigits.forEach(function (threeDigit) {
        if (threeDigit.length === 3) {
            numberString.push(translateThree(threeDigit));
        } else if (threeDigit.length === 2) {
            numberString.push(translateTwo(threeDigit));
        } else if (threeDigit.length === 1) {
            numberString.push(translateOne(threeDigit));
        }
    });

    return numberString;
}

function translateOne(oneDigit) {
    var lessTen = lessTenNumber();
    var result = oneDigit === '0' ? 'zero' : lessTen[oneDigit];

    return result;
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

function translateThree(threeDigit) {
    var lessTen = lessTenNumber();

    var hundredPlace = threeDigit.charAt(0);
    var otherPlace = threeDigit.slice(1);

    if (parseInt(hundredPlace) === 0) {
        return translateTwo(otherPlace);
    } else if (translateTwo(otherPlace) === '') {
        return lessTen[hundredPlace] + ' hundred';
    }
    else {
        return lessTen[hundredPlace] + ' hundred and ' + translateTwo(otherPlace);
    }
}

function addFlag(numberString) {
    var flag = flagNumber();

    for (var i = 0; i < numberString.length; i++) {
        if (numberString[i] !== '') {
            numberString[i] += flag[i];
        }
    }

    return numberString;
}

function mergeString(numberString) {
    var upsideString = numberString.reverse().join(', ');

    if ((upsideString.indexOf(', ,') !== -1) && (upsideString.indexOf(' and ') === -1)) {
        upsideString = upsideString.replace(', ,', ' and');
    } else if (upsideString.indexOf(' and ') === -1) {
        upsideString = upsideString.replace(', ', ' and ');
    }

    return upsideString;
}

function spellOutNumber(number) {
    var threeDigits = splitNumber(number);
    var numberString = translateThreeDigits(threeDigits);
    addFlag(numberString);
    var result = mergeString(numberString);

    console.log(result);
}