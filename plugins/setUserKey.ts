export default {
    set: (key: string, data: string) => localStorage.setItem(key, JSON.stringify(data)),
    get: (key: string) => localStorage.getItem(key)
}



