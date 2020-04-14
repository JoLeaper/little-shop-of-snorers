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
    questions++;
    if (questions > 25) {
        location.replace('../result-page/result-page.html');
    }
});


// while (questions < 25) {
        // selectButton.addEventListener('click', () => {
        // questions++;
        // });


// }
// generateChoices(arrayClone);
// selectButton.addEventListener('click', () => {

// });
































// generateChoices(arrayClone);
// selectButton.addEventListener('click', () => {
//         const selection = document.querySelector('input:checked');
//         // arrayClone[0].timesChosen++;
//         arrayClone.forEach((element) => {
//         if (element.id === selection.value) {
//                         element.timesChosen++;
//                 }
//         })
//         // let stringyArray = JSON.stringify(arrayClone);
//         // localStorage.setItem('CURRENT-USER-DATA', stringyArray);
//         // questions--;
//         // location.reload();

//         let stringyArray = JSON.stringify(arrayClone);
//         localStorage.setItem('CURRENT-USER-DATA', stringyArray);
//         location.reload();
// });

        // selectButton.addEventListener('click', () => {
        //         const selection = document.querySelector('input[type=radio]:checked');
        //         arrayClone.forEach((element) => {
        //         if (element.id === selection.value) {
        //                 element.timesChosen++;
        //         }
        //         questions--;
        //         });
        // });




// selectButton.addEventListener('click', () => {
//     // radio button selector
//     const selection = document.querySelector('input[type=radio]:checked');

//     let userSelection = selection.value;
    
// });

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