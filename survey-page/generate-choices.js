import { randomSelect, checkIfUsed } from '../utilities/utilities.js';
import { addToResult } from './add-to-results.js';

const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');

const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');

let options = [option1, option2, option3];
let images = [image1, image2, image3];

// initializes an empty array to hold the options.
const lastRoundOptions = [];
const choicesToString = JSON.stringify(lastRoundOptions);
localStorage.setItem('PREVIOUS-DUPS', choicesToString);

export const generateChoices = (array) => {
    // create variable to hold the options so that there are no duplicate choices.
    const currentRoundOptions = [];
    
    // grabs last round's options from local storage
    let stringyChoices = localStorage.getItem('PREVIOUS-DUPS');
    let parsedPreviousOptions = JSON.parse(stringyChoices);

    for (let i = 0; i < 3; i++) {
        let number = randomSelect();

        // passes in the options from the current round AND last round to ensure
        // there are no duplicate options and no item appears consecutively
        if (checkIfUsed(number, parsedPreviousOptions, currentRoundOptions) === true) {
            i--;
        } else {
            addToResult(array[number]);
            options[i].value = array[number].name;
            images[i].src = array[number].image;
            currentRoundOptions.splice(i, 1, number);
        }
    }

    // creates a clone of the current rounds options
    // and stores the options that were given in the current round to localStorage.
    parsedPreviousOptions = [...currentRoundOptions];
    let alreadySelectedOptions = JSON.stringify(parsedPreviousOptions);
    localStorage.setItem('PREVIOUS-DUPS', alreadySelectedOptions);
};