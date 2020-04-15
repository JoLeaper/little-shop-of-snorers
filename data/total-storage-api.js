import { checkArray } from '../survey-page/check-results.js';

export const initializeTotals = (array) => {
    const stringyTotalsArray = localStorage.getItem('TOTALS');
    const parsedTotalsArray = JSON.parse(stringyTotalsArray);
    array.forEach((element) => {
        const optionTotal = {
            name: element.name,
            totalAppearances: element.numAppearances,
            totalSelected: element.numSelected
        };
        parsedTotalsArray.push(optionTotal);
    });
    const newStringyTotalsArray = JSON.stringify(parsedTotalsArray);
    localStorage.setItem('TOTALS', newStringyTotalsArray);
};

export const pushNewTotals = (parsedResultsArray) => {
    const stringyTotalsArray = localStorage.getItem('TOTALS');
    const parsedTotalsArray = JSON.parse(stringyTotalsArray);

    for (let i = 0; i < parsedResultsArray.length; i++) {
        let currentResult = parsedResultsArray[i]; 
        if (checkArray(parsedTotalsArray, currentResult) === false) {
            const newOptionTotal = {
                name: currentResult.name,
                totalAppearances: currentResult.numAppearances,
                totalSelected: currentResult.numSelected
            };
            parsedTotalsArray.push(newOptionTotal);
        }
    }

    const newStringyTotalsArray = JSON.stringify(parsedTotalsArray);
    localStorage.setItem('TOTALS', newStringyTotalsArray);
};


export const incrementTotalAppearances = (array) => {
    array.forEach((element1) => {
        const stringyTotalsArray = localStorage.getItem('TOTALS');
        const parsedTotalsArray = JSON.parse(stringyTotalsArray);
        parsedTotalsArray.forEach((element2) => {
            if (element1.name === element2.name) {
                element2.totalAppearances += element1.numAppearances;
            }
        });
        const newStringyTotalsArray = JSON.stringify(parsedTotalsArray);
        localStorage.setItem('TOTALS', newStringyTotalsArray);
    });           
};

export const incrementTotalSelections = (array) => {
    array.forEach((element1) => {
        const stringyTotalsArray = localStorage.getItem('TOTALS');
        const parsedTotalsArray = JSON.parse(stringyTotalsArray);
        parsedTotalsArray.forEach((element2) => {
            if (element1.name === element2.name) {
                element2.totalSelected += element1.numSelected;
            }
        });
        const newStringyTotalsArray = JSON.stringify(parsedTotalsArray);
        localStorage.setItem('TOTALS', newStringyTotalsArray);
    });     
};
