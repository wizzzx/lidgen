import {
    arrayOfObjectsInLocalStorage,
    localStorageKeysType,
    localStorageType
} from './types'

const rawLs = window.localStorage

/**
 * @get автоматически делает JSON.parse если ключ
 * занесён в массив arrayOfObjectsInLocalStorage
 * @set автоматически делает JSON.stringify если
 * передаётся объект. Для удаления элемента из lc
 * достатончо передать null
 * @clearAll чистит весь lc
 */
class LsControllerClass {
    constructor() {}

    get<T extends localStorageKeysType>(key: T) {
        const item = rawLs.getItem(key)
        if (arrayOfObjectsInLocalStorage.includes(key) && item) {
            return JSON.parse(item) as localStorageType[T]
        } else {
            return rawLs.getItem(key) as localStorageType[T]
        }
    }
    set<T extends localStorageKeysType>(key: T, value: localStorageType[T]) {
        switch (typeof value) {
            case 'string':
            case 'number':
            case 'boolean':
                rawLs.setItem(key, String(value))
                break
            case 'object':
                rawLs.setItem(key, JSON.stringify(value))
                break
            default:
                rawLs.removeItem(key)
        }
    }
    clearAll() {
        rawLs.clear()
    }
}

export const lsController = new LsControllerClass()
