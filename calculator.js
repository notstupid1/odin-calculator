const btn_num_0 = document.querySelector('#num-0');
const btn_num_1 = document.querySelector('#num-1');
const btn_num_2 = document.querySelector('#num-2');
const btn_num_3 = document.querySelector('#num-3');
const btn_num_4 = document.querySelector('#num-4');
const btn_num_5 = document.querySelector('#num-5');
const btn_num_6 = document.querySelector('#num-6');
const btn_num_7 = document.querySelector('#num-7');
const btn_num_8 = document.querySelector('#num-8');
const btn_num_9 = document.querySelector('#num-9');

const btn_num_equal = document.querySelector('#op-eq');
const btn_num_decimal = document.querySelector('#decimal');

const btn_deconste = document.querySelector('#deconste');
const btn_clear = document.querySelector('#clear');

const btn_num_add = document.querySelector('#op-add');
const btn_num_sub = document.querySelector('#op-sub');
const btn_num_mul = document.querySelector('#op-mul');
const btn_num_div = document.querySelector('#op-div');
const btn_num_exponent = document.querySelector('#exponent');
const btn_num_root = document.querySelector('#root');

const answer = document.querySelector('#answer');
const total_answer = document.querySelector('#total-answer');


btn_num_0.addEventListener('click', () => {buildNumber(0)});
btn_num_1.addEventListener('click', () => {buildNumber(1)});
btn_num_2.addEventListener('click', () => {buildNumber(2)});
btn_num_3.addEventListener('click', () => {buildNumber(3)});
btn_num_4.addEventListener('click', () => {buildNumber(4)});
btn_num_5.addEventListener('click', () => {buildNumber(5)});
btn_num_6.addEventListener('click', () => {buildNumber(6)});
btn_num_7.addEventListener('click', () => {buildNumber(7)});
btn_num_8.addEventListener('click', () => {buildNumber(8)});
btn_num_9.addEventListener('click', () => {buildNumber(9)});
btn_num_decimal.addEventListener('click', () => {buildNumber('decimal')});

btn_num_add.addEventListener('click', () => {performAddition()});
btn_num_sub.addEventListener('click', () => {performSubraction()});
btn_num_mul.addEventListener('click', () => {performMultiplication()});
btn_num_div.addEventListener('click', () => {performDivision()});

btn_clear.addEventListener('click', () => clear());

let built_number = 0;
let number_string = '';
let isDecimal = false;

function buildNumber(num) {
    if (num === 'decimal') {
        if(number_string.length == 0) number_string += '0.';
        else number_string += '.';

        isDecimal = true;
        btn_num_decimal.removeEventListener;
    }
    else {
        number_string += num;
    }
    displayNumber(number_string);
}

function parseNumber() {
    if(isDecimal) {
        built_number = parseFloat(number_string);
    } else {
        built_number = parseInt(number_string);
    }
}

let TotalResult = 0;
function performAddition() {
    parseNumber();
    TotalResult += built_number;
    number_string = '';
    displayNumber('');
    displayTotal('Ans: ' + TotalResult);
}

function clear() {
    TotalResult = 0;
    number_string = '';
    built_number = 0;
    let isDecimal = false;
    displayNumber('');
    displayTotal('');
}

function displayNumber(string) {
    answer.textContent = string;
}

function displayTotal(num) {
    total_answer.textContent = num;
}