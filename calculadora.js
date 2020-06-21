let responseCount = 0;
let finishOperation = false;
let caclName = '';
let calcChoice = 0;
let firstNumber = 0;
let secondNumber = 0;
let total = 0;


function myCalc() {
    let currentQuestionDiv = document.getElementById(`question-${responseCount}`);
    let currentQuestionText = document.getElementById(`question-${responseCount}-text`);
    let currentQuestionSendByUserTxt = document.getElementById('text-area-value');
    let curentQuestionSendByUsetNumber = Number(currentQuestionSendByUserTxt.value);
    let nextResponseSpanIs = document.getElementById(`response-${responseCount}-text`);
    let nextResponseDiv = document.getElementById(`response-${responseCount}`);
    let nextResponseText = '';

    if(!currentQuestionSendByUserTxt.value) {
        return;
    }

    if (currentQuestionDiv && !finishOperation) {
        currentQuestionDiv.classList.remove('displayNoneClass');    // https://www.w3schools.com/howto/howto_js_remove_class.asp

        currentQuestionText.innerHTML = currentQuestionSendByUserTxt.value;

        if (responseCount === 0) {
            calcChoice = curentQuestionSendByUsetNumber;
            
            nextResponseText = 'Insira o primeiro valor';
        }

        if (responseCount === 1) { 
            firstNumber = curentQuestionSendByUsetNumber;

            nextResponseText = 'Insira o segundo valor';
        }

        if (responseCount === 2) {
            secondNumber = curentQuestionSendByUsetNumber;
            finishOperation = true;

            if(isNaN(firstNumber) || isNaN(secondNumber)) {
                nextResponseText = 'Você inseriu um número errado para o calculo';
                nextResponseSpanIs.innerHTML = nextResponseText;
                nextResponseDiv.classList.remove('displayNoneClass');
                currentQuestionSendByUserTxt.value = '';
                return;
            }

            if(calcChoice === 1) {
                caclName = 'soma';

                total = firstNumber + secondNumber;

                nextResponseText = `A ${caclName} entre ${firstNumber} e ${secondNumber} é ${total}`;

            } else if (calcChoice === 2) {
                caclName = 'subtração';

                total = firstNumber - secondNumber;

                nextResponseText = `A ${caclName} entre ${firstNumber} e ${secondNumber} é ${total}`;

            } else if (calcChoice === 3) {
                caclName = 'multiplicação';

                total = firstNumber * secondNumber;

                nextResponseText = `A ${caclName} entre ${firstNumber} e ${secondNumber} é ${total}`;

            } else if (calcChoice === 4) {
                caclName = 'divisão';

                total = firstNumber / secondNumber;

                nextResponseText = `A ${caclName} entre ${firstNumber} e ${secondNumber} é ${total}`;

            } else {
                nextResponseText = 'Operação invalida';    
            }
        }

        nextResponseSpanIs.innerHTML = nextResponseText;
        nextResponseDiv.classList.remove('displayNoneClass');
        currentQuestionSendByUserTxt.value = '';
        responseCount++;


        // scrool Page
        let messagesListDiv = document.getElementById("messages-list");
        messagesListDiv.scrollTop = messagesListDiv.scrollHeight;
    
    } else {
        let genericClass = document.getElementById('response-generic');
        let genericText = document.getElementById('response-generic-text');
        genericText.innerHTML = 'Obrigado pela preferência :D';
        genericClass.classList.remove('displayNoneClass');

        currentQuestionSendByUserTxt.value = '';
    }

    return;
}
