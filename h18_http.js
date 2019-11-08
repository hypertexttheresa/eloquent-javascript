/**
 * https://eloquentjavascript.net/18_http.html#i_uaWwL8WGXf
 * Send requests to fetch all three formats of this resource.
 */

fetch('https://eloquentjavascript.net/author', { headers: { Accept: 'application/rainbows+unicorns' } })
	.then(response => response.text())
	.then(text => console.log(text));

/**
 * https://eloquentjavascript.net/18_http.html#i_wTXvIH5Wds
 * Build an interface that allows people to type and run pieces of JavaScript code.
 */

let button = document.querySelector('#button');
button.addEventListener('click', runCode);
let runCode = function (event) {
	let outputField = document.querySelector('#output');
	try {
		let code = document.querySelector('#code').value;
		let codeRunner = Function(code);
		let output = codeRunner(code);
		outputField.textContent = output;
	} catch (e) {
		outputField.textContent = e.message;
	}
}

/**
 * https://eloquentjavascript.net/18_http.html#i_XyKQVmCbTN
 * Implement Conway's game of life using whichever data structure you find appropriate
 */


class GameOfLife {
	constructor(size = 5, randomStartMatrix = true) {
		this.size = size;
		let matrix = this.getStartMatrix(size, randomStartMatrix);
		this.setMatrixAsCheckBoxes(matrix);
		document.querySelector('#next').addEventListener('click', this.nextGeneration.bind(this));
	}

	getStartMatrix(size, random) {
		let matrix = [];
		for (let i = 0; i < size; i += 1) {
			let row = [];
			for (let j = 0; j < size; j += 1) {
				let cell = Math.random() >= 0.5;
				if (!random) {
					cell = false;
				}
				row.push(cell)
			}
			matrix.push(row);
		}

		return matrix;
	}

	setMatrixAsCheckBoxes(matrix) {
		let grid = document.querySelector('#grid');
		grid.innerHTML = '';
		let table = document.createElement('table');
		for (let row of matrix) {
			let tableRow = document.createElement('tr');
			for (let cell of row) {
				let tableCell = document.createElement('td');
				let checkbox = document.createElement('input');
				checkbox.type = 'checkbox';
				checkbox.checked = cell;
				tableCell.appendChild(checkbox);
				tableRow.appendChild(tableCell);
			}
			table.appendChild(tableRow);
		}
		grid.appendChild(table);
	}

	nextGeneration() {
		let matrix = this.getMatrixFromCheckBoxes();
		let newMatrix = this.calculateNewMatrix(matrix);

		this.setMatrixAsCheckBoxes(newMatrix);
	}

	getMatrixFromCheckBoxes() {
		let checkboxes = document.querySelectorAll('input[type=checkbox]');
		let matrix = [];
		for (let i = 0; i < this.size; i += 1) {
			let row = [];
			for (let j = 0; j < this.size; j += 1) {
				let cell = 0;
				row.push(cell)
			}
			matrix.push(row);
		}

		let i = 0;
		let j = 0;
		for (let checkbox of checkboxes) {
			matrix[i][j] = checkbox.checked;
			j += 1;
			if (j % this.size === 0) {
				j = 0;
				i += 1;
			}
		}

		return matrix;
	}

	calculateNewMatrix(matrix) {
		let originalMatrix = matrix.slice();
		let newMatrix = [];
		for (let i = 0; i < this.size; i += 1) {
			let newRow = [];
			for (let j = 0; j < this.size; j += 1) {
				let newCell = originalMatrix[i][j];
				let neighbours = this.checkAmountOfNeighbours(originalMatrix, i, j);
				if (newCell && (neighbours < 2 || neighbours > 3)) {
					newCell = false;
				}
				if (!newCell && neighbours === 3) {
					newCell = true;
				}

				newRow.push(newCell);
			}
			newMatrix.push(newRow)
		}

		return newMatrix;
	}

	checkAmountOfNeighbours(matrix, coordY, coordX) {
		let neighbours = 4;


		return neighbours;

	}
}

let GameOfLife = new GameOfLife();
