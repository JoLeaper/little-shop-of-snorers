export const renderLine = (resultObject) => {
    const tr = document.createElement('tr');
    const itemName = document.createElement('td');
    const timesSeen = document.createElement('td');
    // const totalTimesSeen = document.createElement('td');
    const timesSelected = document.createElement('td');
    // const totalTimesSelected = document.createElement('td');

    // let totalsArray = [];

    // if (localStorage.getItem('TOTALS') === null) {
    //     // index 0 is total times seen, index 1 is total times selected
    //     totalsArray = [0, 0];
    // } else {
    //     let stringyTotals = localStorage.getItem('TOTALS');
    //     totalsArray = JSON.parse(stringyTotals);
    // }
    
    // resultObject.totalAppearances =  
    // resultObject.totalSelections = 

    // totalsArray[0] = totalsArray[0] + resultObject.numAppearances;
    // totalsArray[1] = totalsArray[1] + resultObject.numSelected;

    itemName.textContent = resultObject.name;
    timesSeen.textContent = resultObject.numAppearances;
    // totalTimesSeen.textContent = totalsArray[0];
    timesSelected.textContent = resultObject.numSelected;
    // totalTimesSelected.textContent = totalsArray[1];

    // let newStringyTotals = JSON.stringify(totalsArray);
    // localStorage.setItem('TOTALS', newStringyTotals);

    tr.append(itemName, timesSeen, timesSelected);
    return tr;
};         