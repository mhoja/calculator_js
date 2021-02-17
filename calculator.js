const screen = document.getElementById('Output');
const operand1 = document.getElementById('operand1');
const operand2= document.getElementById('operand2');
const operator = document.getElementById('operator');
const error1 = document.getElementById('error1');
const error2 = document.getElementById('error2');

const validator= () =>{
   
        if (operand1.value === '') {
         
            error1.innerHTML = "enter operand1";
            
        }
        else if (!(/^[0-9]*$/.test(operand1.value))) {
    
            error1.innerHTML = "You entered invalid number";
        }

        else if ((/^[0-9]*$/.test(operand1.value)) ) {
    
            error1.innerHTML = " ";
           
        }
       
        
        else{
            error1.innerHTML = "";
        }
        screen.innerHTML = operand1.value + ' ' + operator.value + ' ' + operand2.value;
}

function computation()  {
   
    const operand_one = parseFloat(operand1.value);
    const operand_two = parseFloat(operand2.value);
    
    // const display = screen.innerHTML = operand1.value + ' ' + operator.value + ' ' + operand2.value;
    if(operator.value === "+" ){
          
        const answer = operand_one + operand_two;
        screen.innerHTML = operand1.value + ' ' + operator.value + ' ' + operand2.value +" = " + answer;
    }
    else if(operator.value === "-" ){
          
        const answer = operand_one  - operand_two;
        screen.innerHTML = operand1.value + ' ' + operator.value + ' ' + operand2.value +" = " + answer;
    }
    else if(operator.value === "*" ){
          
        const answer = operand_one  *  operand_two;
        screen.innerHTML = operand1.value + ' ' + operator.value + ' ' + operand2.value +" = " + answer;
    }
    if(operator.value === "/" ){
          
        const answer = operand_one / operand_two;
        screen.innerHTML = operand1.value + ' ' + operator.value + ' ' + operand2.value +" = " + answer;
    }
}