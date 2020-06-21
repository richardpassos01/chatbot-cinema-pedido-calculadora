let responseCount = 0;
let persistMovieName = '';
let selectedMiddleEntrance = false;
let middleEntranceQuantity = 0;
let fullEntranceQuantity = 0;
let middleEntranceTotalValue = 0;
let fullEntranceTotalValue = 0;
let totalValue = 0;
let finishOperation = false;

function moviesFunction() {
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
            nextResponseText = `Seja bem vindo ao nosso cinema ${currentQuestionSendByUserTxt.value},
              digite o nome do filme que gostaria de assistir. Nosso sistema possui todos filmes existentes e inexistentes do mundo`;
        }

        if (responseCount === 1) {
            persistMovieName = currentQuestionSendByUserTxt.value;

            nextResponseText = `O filme ${persistMovieName} está disponivel em cartaz. Vamos definir os valores dos ingressos,
            Antes de tudo, você irá comprar Meias Entradas para essa seção?
            Digite 1 para SIM e 2 para NÃO`;
        }

        if (responseCount === 2) {
            if(curentQuestionSendByUsetNumber === 1 ) {
                selectedMiddleEntrance = true;
                
                nextResponseText = `A meia entrada custa 10.00R$.
                    Digite quantas deseja comprar, por ex 1, 2, 3...`;

            } else {
                nextResponseText = `A entrada inteira custa 20.00R$.
                    Digite quantas deseja comprar, por ex 1, 2, 3...`;
            }
        }

        if(responseCount === 3) {
            if(selectedMiddleEntrance) {
                middleEntranceTotalValue = 10.00 * curentQuestionSendByUsetNumber;
                middleEntranceQuantity = curentQuestionSendByUsetNumber;

                nextResponseText = `O valor total de ${curentQuestionSendByUsetNumber} meia(s) entrada(s) é
                    ${middleEntranceTotalValue} R$. Digite 1 se deseja comprar entradas inteiras 
                    ou 2 se deseja finalizar a compra`;
            } else {
                fullEntranceTotalValue = 20.00 * curentQuestionSendByUsetNumber;
                fullEntranceQuantity = curentQuestionSendByUsetNumber;

                nextResponseText = `O valor total de ${curentQuestionSendByUsetNumber} entrada(s) inteira(s) é
                ${fullEntranceTotalValue} R$. Digite OK para visualizar os dados de pagamento`;
            }
        }

        if(responseCount === 4) {
            if(selectedMiddleEntrance) {

                if(curentQuestionSendByUsetNumber === 1) {
                    nextResponseText = `A entrada inteira custa 20.00R$.
                        Digite quantas deseja comprar, por ex 1, 2, 3...`;

                } else {
                    finishOperation = true;
                    nextResponseText = `Parabéns,
                        você efetuou a compra de ${middleEntranceQuantity} meia(s) entrada(s) 
                        no valor de ${middleEntranceTotalValue} R$.
                        Efetue o pagamento do BOLETO: xxxxxxxxxxxxxxxxxxxxxxx FAVORECIDO: XXXXXXX CNPJ: XXXXXXXXX
                        Em seguida, leve o comprovante até o caixa do cinema e retire-o.
                        Lembrando que os Assentos são livres.
                        `;
                }

            } else {
                finishOperation = true;
                nextResponseText = `Parabéns,
                    você efetuou a compra de ${fullEntranceQuantity} entrada(s) inteira(s) 
                    no valor de ${fullEntranceTotalValue} R$.
                    Efetue o pagamento do BOLETO: xxxxxxxxxxxxxxxxxxxxxxx FAVORECIDO: XXXXXXX CNPJ: XXXXXXXXX
                    Em seguida, leve o comprovante até o caixa do cinema e retire-o.
                    Lembrando que os Assentos são livres.
                    `;
            }
        }

      
        if(responseCount === 5) {
            if(selectedMiddleEntrance && !finishOperation) {
                fullEntranceTotalValue = 20.00 * curentQuestionSendByUsetNumber;
                fullEntranceQuantity = curentQuestionSendByUsetNumber;

                nextResponseText = `O valor total de ${curentQuestionSendByUsetNumber} entrada(s) inteira(s) é
                ${fullEntranceTotalValue} R$. Digite OK para visualizar os dados de pagamento`;
            } else {
                finishOperation = true;
                nextResponseText = 'Obrigado pela preferência :D';
            }
        }

           
        if(responseCount === 6) {
            if(selectedMiddleEntrance && !finishOperation) {
                finishOperation = true;

                totalValue = middleEntranceTotalValue + fullEntranceTotalValue;

                nextResponseText = `Parabéns,
                    você efetuou a compra de ${middleEntranceQuantity} meia(s) entrada(s) 
                    no valor de ${middleEntranceTotalValue} R$ e ${fullEntranceQuantity} entrada(s) inteira(s) 
                    no valor de ${fullEntranceTotalValue} R$.
                    O total da sua compra é de ${totalValue} R$.
                    Efetue o pagamento do BOLETO: xxxxxxxxxxxxxxxxxxxxxxx FAVORECIDO: XXXXXXX CNPJ: XXXXXXXXX
                    Em seguida, leve o comprovante até o caixa do cinema e retire-o.
                    Lembrando que os Assentos são livres.
                    `;
            } else {
                finishOperation = true;
                nextResponseText = 'Obrigado pela preferência :D';
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
