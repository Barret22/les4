

let numOrStr = prompt('input number or string');
console.log(numOrStr)

switch (numOrStr) {
    case "Cansel":
        result = (numOrStr === null);
        break;
    case "Empty String":
        result = ( numOrStr.trim() === '' );
        break;
    case "number is Ba_NaN":
        result = ( isNaN( +numOrStr ));
        break;
        console.log(`Результат:${ result}`);
}


