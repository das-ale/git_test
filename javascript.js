
function add7(num1) {
    return parseInt(num1) + 7;
}

function multiply(num1, num2) {
    return parseInt(num1)*parseInt(num2);
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1); 
}

function lastLetter(word) {
    return word.charAt(word.length - 1);
}

// let add9 = (num1) => (num1) * 9;

// alert(add9(3));


let listaNumeros=[1,3,2,20,34,12,43];

let numerosOrdenados=listaNumeros.sort((a,b) => a-b);


alert(numerosOrdenados);
alert(numerosOrdenados[(numerosOrdenados.length)-3]);
