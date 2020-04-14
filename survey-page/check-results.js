export const checkResultsArray = (array, object) => {
    let inArray = false;
    for (let i = 0; i < array.length; i++) {
        if (array[i].name === object.name) {
            inArray = true;
        }
    }
    return inArray;
};
