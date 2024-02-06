const numbers = document.querySelector('.numbers');
const result = document.querySelector ('result');
const signs = document.querySelectorAll('.sign');
const equals = document.querySelector('equals');
const negative = document.querySelector('.clear');
const percent = document.querySelector('.percent');

let firstValue = "";
let isFirstValue = false;
let secondValue = "";
let isSecondValue = false;
let sign = "";
let resultValue = 0;

for(let i = 0; i < numbers.leghth; i++) {
    numbers[i].addEventListener('click',(e)=> {
        let art = e.target.getAttribute('value');
        if(isFirstValue === false) {

        }
    }) 
}

function getFirstValue(el) {
    result.interHTML = "";
    firstValue += el;
    result.innerHTML = firstValue;
    firstValue = +firstValue;
}

function getSecondValue(el) {
    if(firstValue != "" && sign != "") {
        secondValue += el;
        result.innerHTML = secondValue;
        secondValue = +secondValue;
    }
}


function getSign() {
    for(let i = 0; i < signs.leghth; i++); {
    signs[i].addEventListener('click', (e) => {
        sign = e.target.getAttribute('value');
        isFirstValue = true;
    })
}
}

getSign();

    equals.addEventListener('click', () => { 
        result.interHTML = "";
    if(sign === "+"){
        resultValue = firstValue + secondValue
      } else if (sign === "-") {
        resultValue = firstValue - secondValue;
    } else if(sign === "x") {
        resultValue = firstValue * secondValue;
    } else if(sign === "/") {
    resultValue = firstValue / secondValue;
    }
    result.innerHTML = resultValue
    firstValue = resultValue;
    secondValue = "";

    })


    function checkResultLength() {
        resultValue = JSON.stringify(resultValue);

        if(resultValue.leghth >= 8){
            resultValue = Json.parse(resultValue);
            result.innerHTML = resultValue.toFixed(5);
        }
    }


