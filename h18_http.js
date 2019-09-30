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
	constructor(size = 5) {
		this.size = size;
		this.matrix = this.getStartMatrix(size);
		this.getMatrixAsCheckBoxes();
		document.querySelector('#next').addEventListener('click', this.nextGeneration.bind(this));
	}

	getStartMatrix(size) {
		let matrix = [];
		for (let i = 0; i < size; i += 1) {
			let row = [];
			for (let j = 0; j < size; j += 1) {
				let cell = Math.round(Math.random());
				row.push(cell)
			}
			matrix.push(row);
		}

		return matrix;
	}

	getMatrixAsCheckBoxes() {
		let grid = document.querySelector('#grid');
		grid.innerHTML = '';
		let table = document.createElement('table');
		for (let row of this.matrix) {
			let tableRow = document.createElement('tr');
			for (let column of row) {
				let tableCell = document.createElement('td');
				let checkbox = document.createElement('input');
				checkbox.type = 'checkbox';
				checkbox.checked = column;
				tableCell.appendChild(checkbox);
				tableRow.appendChild(tableCell);
			}
			table.appendChild(tableRow);
		}
		grid.appendChild(table);
	}

	nextGeneration() {
		let matrix = this.getMatrixFromCheckBoxes();
		this.matrix = this.calculateNewMatrix(matrix);

		this.getMatrixAsCheckBoxes();
	}

	calculateNewMatrix(matrix) {
		let originalMatrix = matrix;
		for (let i = 0; i < this.size; i += 1) {
			for (let j = 0; j < this.size; j += 1) {
				let neighbours = this.checkAmountOfNeighbours(originalMatrix, i, j);
				if (matrix[i][j] == true && (neighbours < 2 || neighbours > 3)) {
					matrix[i][j] = 0;
				}
				if (!matrix[i][j] && neighbours === 3) {
					matrix[i][j] = 1;
				}
			}
		}

		return matrix;
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

	checkAmountOfNeighbours(matrix, y, x) {
		let neighbours = 0;
		for (let i = -1; i < 2; i += 1) {
			for (let j = -1; j < 2; j += 1) {
				y = y + i;
				x = x + j;
				if (i === j && i === 0) {
					if (x < 0 || y < 0) {
						continue;
					}
				}

				// TO DO

			}
		}

		return neighbours;
	}
}

let GameOfLife = new GameOfLife();
