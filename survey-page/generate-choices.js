import rawSurveyOptions from '../data/rawSurveyOptions.js';
import { randomSelect, checkIfUsed } from '../utilities/utilities.js';
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');

const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');

let options = [option1, option2, option3];
let images = [image1, image2, image3];

export const generateChoices = () => {
    let choices = [];
    for (let i = 0; i < 3; i++) {
        let number = randomSelect();
        if (checkIfUsed(number, choices) === true) {
            i--;
            console.log('I am here!');
        } else {
            images[i].src = rawSurveyOptions[number].image;
            choices.push(number);
        }
    }
};
