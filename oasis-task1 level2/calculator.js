
let inputBox = document.getElementById('inputBox')
let buttons = document.querySelectorAll('button')

let string = ''

buttons.forEach(element =>{
    element.addEventListener('click', (b)=>{
        if(b.target.innerText == '='){
         string = string == '' ? '0': string;
         try{
            string = String(eval(string))
         inputBox.value = string;
         }
         catch(error){
            inputBox.value = "Error(Press AC)"
         }
        }
        else if(b.target.innerText == 'AC'){
            string = ''
            inputBox.value = string;
        }
        else if(b.target.innerText == 'DEL'){
            string = string.substring(0,string.length-1)
            inputBox.value = string;
        }
        else if(b.target.id == 'plusMinus'){
            string = String(-eval(string))
            inputBox.value = string;
        }
        else{
            string += b.target.innerText
            inputBox.value = string
        }
    })
})









/*let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }

        else if(e.target.innerHTML == 'DE'){
            string = string.substring(0,string.length-1);
            input.value = string;
        }

        else{
            string +=e.target.innerHTML;
            input.value = string;
        }
    })
})

*/


