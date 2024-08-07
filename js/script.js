// Creo referenze con elementi HTML
const outputData = document.querySelector("[data-output");
const inputData = document.querySelector("[data-input]");

// Creo visualizzatore del valore del counter
const numbersP = document.createElement("p");
numbersP.innerText = "0000";
numbersP.classList.add("numbers");
outputData.appendChild(numbersP);

//Creo elementi per incremento e decremento del counter
const operators = ["+", "-"];
// Eseguo un ciclo sull'array egli operatori
for (let i = 0; i < operators.length; i++) {
	//Per ogni operatore creo un nuovo elemento "div"
	const operatorDiv = document.createElement("div");
	//e salvo il valore di ogni elemento dell'array in una variabile
	const operatorSymbol = operators[i];
	// console.log(operatorSymbol);

	//Inserisco il valore delle variabili all'interno dei "div" creati in precendenza
	operatorDiv.innerHTML += operatorSymbol;
	// Aggiungo delle classi css ai "div" che contengono gli elementi dell'array
	operatorDiv.classList.add("operators", "flex-center-element");
	//Inserisco i "div" appena creati come nodi figli, quindi all'iterno, dell'elemento HTML contraddistinto dall'attributo [data-input]
	inputData.appendChild(operatorDiv);
}
