function performOperation(operator) {
    const num1 = parseFloat(document.getElementById('first-number').value);
    const num2 = parseFloat(document.getElementById('second-number').value);
    let result;
    console.log(num1, num2, operator);
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert("Division by zero is not allowed.");
                return;
            }
            result = num1 / num2;
            break;
        case '**':
            result = 1;
            for (let i = 0; i < num2; i++) {
                result *= num1;
            }
            break;
        default:
            return;
    }

    const outputElement = document.getElementById('output');
    outputElement.innerHTML = String(result);
    outputElement.className = result < 0 ? 'negative-result' : '';
}

function clearInputs() {
    document.getElementById('first-number').value = '';
    document.getElementById('second-number').value = '';
    document.getElementById('output').innerHTML = '';
}

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        document.querySelectorAll('.content').forEach(section => {
            section.classList.remove('active');
        });
        const targetId = e.target.getAttribute('href').substring(1);
        document.getElementById(targetId).classList.add('active');
    });
});