//--- 1. Creo referenze con elementi HTML
// referenze per creare elementi
const outputData = document.querySelector("[data-output");
const inputData = document.querySelector("[data-input]");

//--- 2. Creo visualizzatore del valore del counter
outputData.innerHTML = "0";
outputData.classList.add("numbers");

//--- 3. Creo elementi per permettere l'incremento ed il decremento del counter
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

//--- 4. Aggiungo eventi ai bottoni per l'incremento ed il decremento del counter
// Referenze per evento di incremento/decremento
const getOperatorsDivs = document.querySelectorAll(".operators");
const plusOperator = getOperatorsDivs[0];
const minusOperator = getOperatorsDivs[1];

let contentOutputData = parseInt(outputData.textContent);
// Incremento del counter ++
plusOperator.addEventListener("click", (e) => {
	e.preventDefault();
	contentOutputData++;
	outputData.innerHTML = contentOutputData;
});

// Decremento del counter --
minusOperator.addEventListener("click", (e) => {
	e.preventDefault();
	contentOutputData--;
	outputData.innerHTML = contentOutputData;
});

//--- 4. Creo funzione per settare il counter a '0'
// Referenze per bottone "Return to zero"
const zeroBtn = document.querySelector("[data-btn-zero]");
zeroBtn.addEventListener("click", () => {
	if (contentOutputData === 0) {
		alert(
			"The number is already zero, you have to change the value of the counter."
		);
	}
	contentOutputData = 0;
	outputData.innerHTML = contentOutputData;
});
