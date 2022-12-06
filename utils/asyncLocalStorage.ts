
const setItem = (key: string, value: string): Promise<void> => {
    return Promise.resolve().then(() => localStorage.set(key, value));
}

const getItem = async (key: string): Promise<string> => {
    return Promise.resolve().then(() => localStorage.getItem(key) ?? "");
}


const asyncLocalStorage = {
    setItem,
    getItem,
}


export default asyncLocalStorage;