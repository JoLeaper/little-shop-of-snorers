export const randomSelect = () => {
    return Math.floor(Math.random() * 20);
};

export const checkIfUsed = (number, array) => {
    let used = false;
    array.forEach((numInArray) => {
        if (number === numInArray) {
            used = true;
        }
    });
    return used;
};