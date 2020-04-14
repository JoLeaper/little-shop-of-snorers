export const randomSelect = () => {
    return Math.floor(Math.random() * 20);
};

export const checkIfUsed = (number, array1, array2) => {
    let used = false;
    array1.forEach((numInArray) => {
        if (number === numInArray) {
            used = true;
        }
    });

    array2.forEach((numInArray) => {
        if (number === numInArray) {
            used = true;
        }
    });

    return used;
};