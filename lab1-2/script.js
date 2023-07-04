window.onload = function(){ 

    /*История*/
    blockResult = document.querySelector(".history");



    let a = ''
    let b = ''
    let expressionResult = ''
    let selectedOperation = null
    let waitingForSecondOperand = false



    // окно вывода результата
    outputElement = document.getElementById("result")
    
    // список объектов кнопок циферблата (id которых начинается с btn_digit_)
    digitButtons = document.querySelectorAll('[id ^= "btn_digit_"]')
    
    function onDigitButtonClicked(digit) {
        if (!selectedOperation) {
            if ((digit != '.') || (digit == '.' && !a.includes(digit))) { 
                a += digit
            }
            outputElement.innerHTML = a
        } else {
            if ((digit != '.') || (digit == '.' && !b.includes(digit))) { 
                b += digit
                outputElement.innerHTML = b        
            }
        }
    }
    
    // устанавка колбек-функций на кнопки циферблата по событию нажатия
    digitButtons.forEach(button => {
        button.onclick = function() {
            const digitValue = button.innerHTML
            onDigitButtonClicked(digitValue)
        }
    });
    
    let currentOperation = null

    
    // установка колбек-функций для кнопок операций
    document.getElementById("btn_op_mult").onclick = function() { 
        if (a === '') return
        if (b === ''){
            selectedOperation = 'x'
            currentOperation = 'x'
        } else {
            switch(currentOperation) { 
                case 'x':
                    expressionResult = (+a) * (+b)
                    break;
                case '+':
                    expressionResult = (+a) + (+b)
                    break;
                case '-':
                    expressionResult = (+a) - (+b)
                    break;
                case '/':
                    expressionResult = (+a) / (+b)
                    break;
            }
            let res = a + selectedOperation + b + " = " + expressionResult
            blockResult.innerHTML = res;
            a = expressionResult
            b = ''
            outputElement.innerHTML = expressionResult
            
        }
        
    }
    document.getElementById("btn_op_plus").onclick = function() { 
        if (a === '') return
        if (b === ''){
            selectedOperation = '+'
            currentOperation = '+'
        } else {
            switch(currentOperation) { 
                case 'x':
                    expressionResult = (+a) * (+b)
                    break;
                case '+':
                    expressionResult = (+a) + (+b)
                    break;
                case '-':
                    expressionResult = (+a) - (+b)
                    break;
                case '/':
                    expressionResult = (+a) / (+b)
                    break;
            }
            let res = a + selectedOperation + b + " = " + expressionResult
            blockResult.innerHTML = res;
            a = expressionResult
            b = ''
            outputElement.innerHTML = expressionResult
            
        }
    }
    document.getElementById("btn_op_minus").onclick = function() { 
        if (a === '') return
        if (b === ''){
            selectedOperation = '-'
            currentOperation = '-'
        } else {
            switch(currentOperation) { 
                case 'x':
                    expressionResult = (+a) * (+b)
                    break;
                case '+':
                    expressionResult = (+a) + (+b)
                    break;
                case '-':
                    expressionResult = (+a) - (+b)
                    break;
                case '/':
                    expressionResult = (+a) / (+b)
                    break;
            }
            let res = a + selectedOperation + b + " = " + expressionResult
            blockResult.innerHTML = res;
            a = expressionResult
            b = ''
            outputElement.innerHTML = expressionResult
            
        }
    }
    document.getElementById("btn_op_div").onclick = function() { 
        if (a === '') return
        if (b === ''){
            selectedOperation = '/'
            currentOperation = '/'
        } else {
            switch(currentsOperation) { 
                case 'x':
                    expressionResult = (+a) * (+b)
                    break;
                case '+':
                    expressionResult = (+a) + (+b)
                    break;
                case '-':
                    expressionResult = (+a) - (+b)
                    break;
                case '/':
                    expressionResult = (+a) / (+b)
                    break;
            }
            let res = a + selectedOperation + b + " = " + expressionResult
            blockResult.innerHTML = res;
            a = expressionResult
            b = ''
            outputElement.innerHTML = expressionResult
            
        }
    }
    
    // кнопка очищения
    document.getElementById("btn_op_clear").onclick = function() { 
        a = ''
        b = ''
        selectedOperation = ''
        expressionResult = ''
        outputElement.innerHTML = 0
        blockResult.innerHTML = ""
        waitingForSecondOperand = false
    }
    
    // кнопка расчёта результата
    document.getElementById("btn_op_equal").onclick = function() { 
        if (a === '' || b === '' || !selectedOperation)
            return
            
        switch(selectedOperation) { 
            case 'x':
                expressionResult = (+a) * (+b)
                break;
            case '+':
                expressionResult = (+a) + (+b)
                break;
            case '-':
                expressionResult = (+a) - (+b)
                break;
            case '/':
                expressionResult = (+a) / (+b)
                break;
        }
        
        //Тут код
        let res = a + selectedOperation + b + " = " + expressionResult
        blockResult.innerHTML = res;



        a = expressionResult.toString()
        b = ''
        selectedOperation = null
    
        outputElement.innerHTML = a
    }
    };