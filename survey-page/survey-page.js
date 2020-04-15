import rawSurveyOptions from '../data/rawSurveyOptions.js';
import { generateChoices } from './generate-choices.js';
import { incrementChoice } from './increment-choice.js';
import { initializeTotals, pushNewTotals, incrementTotalAppearances, incrementTotalSelections } from '../data/total-storage-api.js';

const selectButton = document.getElementById('select-button');
let questions = 0;
const resultsArray = [];
const stringyResultsArray = JSON.stringify(resultsArray);
localStorage.setItem('RESULTS', stringyResultsArray);

generateChoices(rawSurveyOptions);
selectButton.addEventListener('click', () => {
    const userChoice = document.querySelector('input:checked');

    incrementChoice(userChoice.value);
    generateChoices(rawSurveyOptions);

    questions++;

    if (questions > 25) {
        selectButton.disabled = true;
        const stringyResultsArray = localStorage.getItem('RESULTS');
        const parsedResultsArray = JSON.parse(stringyResultsArray);
        if (localStorage.getItem('TOTALS') === null) {
            const totalsArray = [];
            const stringyTotalsArray = JSON.stringify(totalsArray);
            localStorage.setItem('TOTALS', stringyTotalsArray);
            initializeTotals(parsedResultsArray);
        } else {
            pushNewTotals(parsedResultsArray);
            incrementTotalAppearances(parsedResultsArray);
            incrementTotalSelections(parsedResultsArray);
        }
        location.replace('../result-page/result-page.html');
    }
});