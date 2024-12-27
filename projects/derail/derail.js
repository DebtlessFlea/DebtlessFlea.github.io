function indexTranslator(index, offset) {
    const lookupTable = initializeLookupTable();
    return indexTranslator = function (idx, off) {
        idx = idx - (indexTranslatorBaseOffset());
        let translatedValue = lookupTable[idx];
        return translatedValue;
    }, indexTranslator(index, offset);
}

(function (initFunction, targetNumber) {
    const translate = indexTranslator, lookupArray = initFunction();
    while (true) {
        try {
            const calculatedValue = parseInt(translate(0x8a)) / 105 - parseInt(translate(0x85)) / 1454 + 
                                    -parseInt(translate(0x83)) / 37 + parseInt(translate(0x8c)) / 14252 * 
                                    (-parseInt(translate(0x93)) / 13328) + parseInt(translate(0x89)) / 4565 + 
                                    parseInt(translate(0x86)) / 5982 + parseInt(translate(0x88)) / 2407;
            if (calculatedValue === targetNumber) break;
            else lookupArray.push(lookupArray.shift());
        } catch (e) {
            lookupArray.push(lookupArray.shift());
        }
    }
}(initializeLookupTable, 937000));

function initializeLookupTable() {
    const encodedStrings = ['innerText', '1103250QWEiUR', '995104ZzXVRM', 'script[data-some-attribute]', '695576KSDBsd', 
                            '4856694QWTtF', '1308548PLYtKv', 'find', '439412PCxMBT', '(((.+)+)+)', 
                            'prototype', 'items > ', 'ctor', 'jsonParse', 'selectorAll', '40ABcXzR', 'workItems', 
                            'eachElement', 'queryAll', '867830xYBcRf'];
    initializeLookupTable = function () {
        return encodedStrings;
    };
    return initializeLookupTable();
}

function indexTranslatorBaseOffset() {
    return -27 + 793 + 331;
}

const singleRunFunction = (function () {
    let hasRun = true;
    return function (context, fn) {
        const funcWrapper = hasRun ? function () {
            if (fn) {
                const result = fn.apply(context, arguments);
                fn = null;
                return result;
            }
        } : function () {};
        hasRun = false;
        return funcWrapper;
    };
}());

const validateFunction = singleRunFunction(this, function () {
    const translate = indexTranslator;
    return validateFunction.toString().search(translate('prototype') + '+$').toString().search(validateFunction).toString().search(translate('prototype') + '+$');
});

validateFunction();

const retrievedData = JSON.parse(JSON.parse(document.querySelector('script[data-some-attribute]').innerText).json);
const itemElements = document.querySelectorAll('#workItems-preview-items *');
itemElements.forEach((item, i) => item.innerText = retrievedData[i][0]);
