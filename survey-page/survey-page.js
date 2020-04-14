import rawSurveyOptions from '../data/rawSurveyOptions.js';
import { randomSelect } from '../utilities/utilities.js';

const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');

const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');

let i = randomSelect();
image1.src = rawSurveyOptions[i].image;
i = randomSelect();
image2.src = rawSurveyOptions[i].image;
i = randomSelect();
image3.src = rawSurveyOptions[i].image;



// for (let i = 25; i > 0; i--) {
//     // display three options without them being duplicates
//        -generate a random number between 0 and 24 (randomSelect
//        -make image1.src = rawSurveyOptions[i].image
//        -repeat for image2
       //   -check to see if ID of image2 has already been used. if yes, roll again. if no, keep.
       // -repeat for image3
       //    -check to see if IDs for image3 have already been used.
       //
//     // 
// }