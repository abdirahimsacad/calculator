// Good Luck! You got this 💪🏾
// Write your code here.

function calculator (num1 , num2 , operator){
    if (operator === "+"){
     return num1 + num2
    }
    
    else if (operator==="-"){
        return num1 - num2
    }
    else if (operator === "*"){
        return num1 * num2
    }
    
    else if (operator === "/"){
        return num1 / num2
    }
    else {
        return "invalid operator"
    }
    }
     console.log(calculator(4,6 , "+"))
     console.log(calculator(4,6 , "-"))
     console.log(calculator(4,6 , "*"))
     console.log(calculator(4,6 , "/"))
     console.log(calculator(4,6 ,  ""))

     