//--- 1. Creo referenze con elementi HTML
const inputData = document.querySelector("[data-input]");
const outputData = document.querySelector("[data-output");

//--- 2. Creo visualizzatore del valore del counter
function displayNumbers() {
	outputData.innerHTML = "0";
	outputData.classList.add("numbers");
}

//--- 3. Creo elementi per permettere l'incremento ed il decremento del counter
function displayOperators() {
	const operators = ["+", "-"];
	// Eseguo un ciclo sull'array degli operatori
	for (let i = 0; i < operators.length; i++) {
		// Salvo il valore di ogni elemento dell'array in una variabile
		const operatorSymbol = operators[i];
		// console.log(operatorSymbol);

		//Per ogni operatore creo un nuovo elemento "button"
		const inputButton = document.createElement("button");
		//Inserisco il valore delle variabili all'interno dei "div" appena creati
		inputButton.innerHTML += operatorSymbol;
		// Aggiungo delle classi css ai "div" che contengono gli elementi dell'array
		inputButton.classList.add("operators", "flex-center-element");
		//Inserisco i "div" appena creati come figli dell'elemento HTML contraddistinto dall'attributo [data-input]
		inputData.appendChild(inputButton);
	}
}

//La funzione seguente invoca le funzioni precedenti, mostrando a schermo i numeri e gli operatori
function displayDOMElements() {
	displayNumbers();
	displayOperators();
}

//--- 4.  Creo funzione per gestire eventi ai bottoni per l'incremento ed il decremento del counter
function setCounter() {
	// Referenze per evento di incremento e decremento
	const getOperatorsGroup = document.querySelectorAll(".operators");
	const plusOperator = getOperatorsGroup[0];
	const minusOperator = getOperatorsGroup[1];

	// Incremento del counter ++
	plusOperator.addEventListener("click", () => {
		outputData.textContent++;
		outputData.innerHTML = outputData.textContent;
	});

	// Decremento del counter --
	minusOperator.addEventListener("click", () => {
		outputData.textContent--;
		outputData.innerHTML = outputData.textContent;
	});
}

//--- 5. Creo funzione per settare il counter a '0' dopo il click sul bottone "return to zero"
function setZeroBtn() {
	// Referenze per bottone "Return to zero"
	const zeroBtn = document.querySelector("[data-btn-zero]");
	zeroBtn.addEventListener("click", () => {
		if (outputData.textContent == 0) {
			alert(
				"The number is already zero, you have to change the value of the counter."
			);
		}
		outputData.textContent = 0;
		outputData.innerHTML = outputData.textContent;
	});
}

//--- 6.Invoca ed esegui tutte le funzioni una volta che il DOM è stato caricato
document.addEventListener("DOMContentLoaded", (e) => {
	e.preventDefault();

	displayDOMElements();
	setCounter();
	setZeroBtn();

	console.log("content loaded");
});
