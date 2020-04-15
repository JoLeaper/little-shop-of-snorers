import { renderLine } from './render-line.js';
const resultTable = document.getElementById('result-data');
const stringyResults = localStorage.getItem('RESULTS');
const parsedResults = JSON.parse(stringyResults);

parsedResults.forEach((element) => {
    const newLine = renderLine(element);
    resultTable.append(newLine);
});

const labels = [];
const votes = [];

parsedResults.forEach(item => {
    labels.push(item.name);
    votes.push(item.numSelected);
});

var ctx = document.getElementById('result-graph').getContext('2d');
/* eslint-disable */
var myChart = new Chart(ctx, {
/* eslint-enable */
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: '# of Votes',
            data: 
            votes,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});