const outputWindow = document.querySelector("#output-window"); //display clicked button (numbers and operators) and operation need to be executed
const resultWindow = document.querySelector("#result-window"); //show the result of the operation made in outputWindow
const buttons = document.querySelectorAll(".btn");

let equation = "";
let number = "";
let dataId = "";
let dataType = "";

const buttonClicked = (e) => {
    dataType = (e.target.getAttribute("data-type"));
    dataId = (e.target.getAttribute("data-id"));

    switch (dataType) {
        case "clear":
            Clear();
            break;

            case "negative":
            Negative();
            break;

        case "operator":
            Operator();
            break;

        case "symbol":
            Symbol();
            break;

        case "equal":
            Equal();
            break;

            case "percent":
            Percent();
            break;

        default:
            Default();
            break;
    }
    };

//function clear

const Clear = () => {
	number = "";
	equation = "";
	outputWindow.innerText = "0";
    resultWindow.innerText = "";
}

//function delete one item to the right

const Negative = () => {
        outputWindow.innerText = `${number} ${dataId}`;
	    number +=` ${dataId} `;
        const negative = outputWindow.innerText;
        equation = negative;
    }

//function operator

const Operator = () => {
	equation += dataId;
    outputWindow.innerText = `${number} ${dataId}`;
    number +=`  ${dataId} `;
}

//function decimal

const Symbol = () => {
	number += dataId;
	equation += dataId;
	outputWindow.innerText = number;
}

// function equals

const Equal = () => {
	number = eval(equation);
	equation = number;
	resultWindow.innerText = number;
}

//function percent

const Percent = () => {
	number = eval(equation);
    equation = number / 100;
    outputWindow.innerText = number + "%";
    number += "%";
}

//function default display

const Default = () => {
	number += dataId;
	equation += dataId;
	outputWindow.innerText = number;
}
    
buttons.forEach(button => {
    button.addEventListener("click", buttonClicked)
});

