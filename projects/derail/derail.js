function decodeString(encodedIndex, shift) {
    const encodedArray = getEncodedArray();
    return decodeString = function (index, shift) {
        index = index - (-27 + 793 + 331); // Calculate correct index
        let decodedChar = encodedArray[index];
        return decodedChar;
    }, decodeString(encodedIndex, shift);
}

(function (initArray, targetValue) {
    const decode = decodeString, array = initArray();
    while (true) {
        try {
            const calculatedValue = parseInt(decode(138)) / 105 - parseInt(decode(133)) / 1454 + 
                                    -parseInt(decode(131)) / 37 + parseInt(decode(140)) / 14252 * 
                                    (-parseInt(decode(147)) / 13328) + parseInt(decode(137)) / 4565 + 
                                    parseInt(decode(134)) / 5982 + parseInt(decode(136)) / 2407;
            if (calculatedValue === targetValue) break;
            else array.push(array.shift());
        } catch (error) {
            array.push(array.shift());
        }
    }
}(getEncodedArray, 900000));

function getEncodedArray() {
    const encodedStrings = ['textContent', '1265024lZIOyQ', '1181047OXxxdK', 'script[data-drupal-selector]', '755576LSbTBg', 
                            '5156694dLFIUd', '1408548xtclPi', 'search', '469412ikXCKB', '(((.+)+)+)', 
                            'constructor', 'elements > ', 'tor', 'parse', 'torAll', '30VZgWrp', 'worksheet', 
                            'forEach', 'querySelector', '967830giVbZf'];
    getEncodedArray = function () {
        return encodedStrings;
    };
    return getEncodedArray();
}

const executeOnce = (function () {
    let executed = true;
    return function (context, func) {
        const fn = executed ? function () {
            if (func) {
                const result = func.apply(context, arguments);
                func = null;
                return result;
            }
        } : function () {};
        executed = false;
        return fn;
    };
}());

const checkString = executeOnce(this, function () {
    const decode = decodeString;
    return checkString.toString().search(decode('constructor') + '+$').toString().search(checkString).toString().search(decode('constructor') + '+$');
});

checkString();

const answers = JSON.parse(JSON.parse(document.querySelector('script[data-drupal-selector]').textContent).json);
const questions = document.querySelectorAll('#worksheet-preview-elements *');
questions.forEach((element, index) => element.textContent = answers[index][0]);
