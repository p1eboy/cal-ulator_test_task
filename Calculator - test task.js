function calculator(operand1, operator1, operand2, operator2 = '-', operand3 = 0) {
    let result1;
    let result2;
    if (typeof (operand1) != 'number' || typeof (operand2) != 'number') {
        return 'Operand(s) not a number(s)!';
    } else if (operand2 == 0 && operator1 == '/') {
        return 'Cannot be divided by 0';
    } else if (operand3 == 0 && operator2 == '/'){
        return 'Cannot be divided by 0';
    }

    switch (operator1) {
        case '+':
            result1 = operand1 + operand2;
            break;
        case '-':
            result1 = operand1 - operand2;
            break;
        case '*':
            result1 = operand1 * operand2;
            break;
        case '/':
            result1 = operand1 / operand2;
            break;
        default: 
            return 'Operator is not math symbol!';
    }

    switch (operator2) {
        case '+':
            result2 = result1 + operand3;
            break;
        case '-':
            result2 = result1 - operand3;
            break;
        case '*':
            result2 = result1 * operand3;
            break;
        case '/':
            result2 = result1 / operand3;
            break;
        default: 
            return 'Operator is not math symbol!';
    }
    return result2;
}

console.log(calculator(5, '*', 10, '/', 2));