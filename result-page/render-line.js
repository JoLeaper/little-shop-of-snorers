export const renderLine = (resultObject) => {
    const tr = document.createElement('tr');
    const itemName = document.createElement('td');
    const timesSeen = document.createElement('td');
    const timesSelected = document.createElement('td');

    itemName.textContent = resultObject.name;
    timesSeen.textContent = resultObject.numAppearances;
    timesSelected.textContent = resultObject.numSelected;

    tr.append(itemName, timesSeen, timesSelected);
    return tr;
};         