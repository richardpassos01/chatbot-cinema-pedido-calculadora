let responseCount = 0;
let finishOperation = false;
let fullName = '';

function myOrder() {
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
            fullName = currentQuestionSendByUserTxt.value;

            nextResponseText = `Olá ${fullName},
              digite o código de rastreio do seu pedido para analisarmos a situação:`;
        }

        if (responseCount === 1) {
            if(curentQuestionSendByUsetNumber === 1000 ) {
                nextResponseText = `${fullName}. Seu pedido foi surrupiado por contrabandistas coreanos, lamentamos muito`;

            } else if (curentQuestionSendByUsetNumber === 1001 ) {
                nextResponseText = `${fullName}. Seu pedido será entregue em 100908 dias uteis`;
                
            } else if (curentQuestionSendByUsetNumber === 1002 ) {
                nextResponseText = `${fullName}. Seu pedido já foi entregue, porém para outra pessoa,
                    lamentamos muito, para que isso não ocorra novamente, pedimos que não compre conosco novamente :D`;
                
            } else if (curentQuestionSendByUsetNumber === 1003 ) {
                nextResponseText = `${fullName}. Nosso motoboy comeu o seu pedido, sentimos muito`;

            } else {
                nextResponseText = 'Produto não encontrado'
            }
        }

        if (responseCount === 2) { 
            finishOperation = true;
            nextResponseText = 'Já te respondemos, aceite a realidade :('
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
