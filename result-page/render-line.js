export const renderLine = (resultObject) => {
    const tr = document.createElement('tr');
    const itemName = document.createElement('td');
    const timesSeen = document.createElement('td');
    const totalTimesSeen = document.createElement('td');
    const timesSelected = document.createElement('td');
    const totalTimesSelected = document.createElement('td');

    const stringyCurrentTotal = localStorage.getItem(`TOTALS`);
    const totalsArray = JSON.parse(stringyCurrentTotal);
    
    totalsArray.forEach((element) => {
        if (resultObject.name === element.name) {
            totalTimesSeen.textContent = element.totalAppearances;
            totalTimesSelected.textContent = element.totalSelected;

        }
    });


    itemName.textContent = resultObject.name;
    timesSeen.textContent = resultObject.numAppearances;
    timesSelected.textContent = resultObject.numSelected;

    tr.append(itemName, timesSeen, totalTimesSeen, timesSelected, totalTimesSelected);
    return tr;
};       