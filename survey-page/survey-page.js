import rawSurveyOptions from '../data/rawSurveyOptions.js';
import { generateChoices } from './generate-choices.js';
import { incrementChoice } from './increment-choice.js';

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

    if (questions > 25) {
        location.replace('../result-page/result-page.html');
    }
});