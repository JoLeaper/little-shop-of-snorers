export const incrementChoice = (value) => {
    const stringyResultsArray = localStorage.getItem('RESULTS');
    const parsedResultsArray = JSON.parse(stringyResultsArray);
    for (let i = 0; i < parsedResultsArray.length; i++) {
        if (parsedResultsArray[i].name === value) {
            parsedResultsArray[i].numSelected++;
            break;
        }
    }
    const newStringyResultsArray = JSON.stringify(parsedResultsArray);
    localStorage.setItem('RESULTS', newStringyResultsArray);
};