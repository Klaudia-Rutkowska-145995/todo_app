const USER_ID = 'USER_ID';

const generateID = () => {
    const s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

const getID = () => {
    return localStorage.getItem(USER_ID);
}

export const getUserID = () => {
    let ID = getID();

    if (ID === null) {
        ID = generateID();
        localStorage.setItem(USER_ID, ID);
    }

    return ID;
}