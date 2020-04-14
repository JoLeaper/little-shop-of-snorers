import { renderLine } from './render-line.js';
const resultTable = document.getElementById('result-data');
const stringyResults = localStorage.getItem('RESULTS');
const parsedResults = JSON.parse(stringyResults);

parsedResults.forEach((element) => {
    const newLine = renderLine(element);
    resultTable.append(newLine);
});