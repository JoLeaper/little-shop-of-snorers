import rawSurveyOptions from '../data/rawSurveyOptions.js';
import { randomSelect } from '../utilities/utilities.js';
import { generateChoices } from '../survey-page/generate-choices.js';

// const option1 = document.getElementById('option1');
// const option2 = document.getElementById('option2');
// const option3 = document.getElementById('option3');

// const image1 = document.getElementById('image1');
// const image2 = document.getElementById('image2');
// const image3 = document.getElementById('image3');

const selectButton = document.getElementById('select-button');

generateChoices();

// let i = randomSelect();
// image1.src = rawSurveyOptions[i].image;
// i = randomSelect();
// image2.src = rawSurveyOptions[i].image;
// i = randomSelect();
// image3.src = rawSurveyOptions[i].image;



// generateChoices

// 1. generate three choices
//         a. display three options without displaying the same option as buttons
//                 i. create a random number between 0 and 19 using randomSelect
//                 ii. use the number as an index 
//                 iii. use alreadySelected function to see if the option was already generated.
//                 iiii. repeat three times

// 2. track number of times viewed and selected
//      a. two separate counters.
//      b. one that increments everytime an object shows up on screen, one that increments everytime an object is picked
//      c. 

// for (let i = 25; i > 0; i--) {
        // for (let j = 0; j < 2; j++)
        // generateChoices
//     // display three options without them being duplicates
//         display buttons
//        -generate a random number between 0 and 24 (randomSelect
//        -make image1.src = rawSurveyOptions[i].image
//        -repeat for image2
       //   -check to see if ID of image2 has already been used. if yes, roll again. if no, keep.
       // -repeat for image3
       //    -check to see if IDs for image3 have already been used.
       //
//     // 
// }

// selectButton.addEventListener('click', () => {
//     // radio button selector
//     const selection = document.querySelector('input[type=radio]:checked');

//     let userSelection = selection.value;
    
// });