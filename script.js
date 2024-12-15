const displayBox = document.querySelector(".display"),
     displayInput = document.querySelector(".display-input"),
     displayResult = document.querySelector(".display-result"),
     buttons = document.querySelectorAll("button"),
     operators = ["%", "÷", "×", "-", "+"]
let input = "",
    result = "";

    //main function to handle calculator logic
    const calculator = btnValue => {
        input += btnValue;

        //Update display
        displayInput.value = input;
        displayResult.value = result;
    }

