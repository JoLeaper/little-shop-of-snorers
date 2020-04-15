import { checkArray } from './check-results.js';

export const addToResult = (object) => {
    const stringyResultsArray = localStorage.getItem('RESULTS');
    const parsedResultsArray = JSON.parse(stringyResultsArray);

    if (checkArray(parsedResultsArray, object) === true) {
        for (let i = 0; i < parsedResultsArray.length; i++) {
            if (parsedResultsArray[i].name === object.name) {
                parsedResultsArray[i].numAppearances++;
            }
        }
    } else {
        const newResult = {
            name: object.name,
            numAppearances: 1,
            numSelected: 0,
        };
        parsedResultsArray.push(newResult);
    }
    const newStringyResultsArray = JSON.stringify(parsedResultsArray);
    localStorage.setItem('RESULTS', newStringyResultsArray);
};