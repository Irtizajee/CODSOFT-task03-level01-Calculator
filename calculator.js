let input = document.getElementById('input');
let output = document.getElementById('output');
let num = document.querySelectorAll('.num');
let add = document.getElementById('add')
let sub = document.getElementById('sub')
let divd = document.getElementById('divd')
let mult = document.getElementById('mult')
let clear = document.getElementById('clear');
let inputClear = document.getElementById('inputClear');
let allClear = document.getElementById('allClear');
let signDiv = document.getElementById('sign');
add.onclick = mainFunc(add.value)
sub.onclick = mainFunc(sub.value);
divd.onclick = mainFunc(divd.value);
mult.onclick = mainFunc(mult.value);
let save = '';
let sign = '';

clear.onclick = ()=>{
    input.value = input.value.substr(0 , input.value.length - 1);
}

inputClear.onclick = ()=>{
    input.value = '';
}

allClear.onclick = ()=>{
    save = '';
    output.innerHTML = '';
    input.value = '';
    signDiv.innerHTML = '';
}

function mainFunc(valBtn) {
    return () => {
        if (input.value != '') {
            save == '' ? save = input.value : calFunc(valBtn)
            output.innerHTML = save
            input.value = ''
        }
        else {
            input.value = ''
        }
        sign = valBtn
        signDiv.innerHTML = sign
        output.innerHTML.length > 8 ? output.style.fontSize = '30px' :output.style.fontSize = '70px' 
    
    }
}

function calFunc(btnSign) {

    switch (btnSign) {
        case '+':
            output.innerHTML = parseInt(save) + parseInt(input.value)
            break
        case '-':
            output.innerHTML = parseInt(save) - parseInt(input.value)
            break;
        case '/':
            output.innerHTML = parseInt(save) / parseInt(input.value)
            break;
        case 'X':
            output.innerHTML = parseInt(save) * parseInt(input.value)
            break;
    }

    save = output.innerHTML
    input.value = ''
}

function equal() {
    if(save == '')
    {
        save == ''
    }
    else{
        input.value != '' ? calFunc(sign) : input.value = input.value
    }
}

function inputValues(values){
    return ()=>{
        input.value += values
    }
}
for (const numb of num) {
    numb.addEventListener('click' , inputValues(numb.value))
}
