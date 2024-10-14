export const stringHelpers = {
    clearStringMask: (val: string) => {
        if (!val) return ''
        val = val.replace(/%20/g, '')
        val = val.replace(/\D+ /g, '')
        val = val.replace(/-/g, '')
        val = val.replace(/([+]*)/g, '')
        val = val.replace(/([()]*)/g, '')
        return val
    },

    clearString: (val: string) => {
        if (!val) return ''
        return val.replace(/\D+/g, '')
    },

    transformMoneyValue: (val: string | number | undefined | null, div = ',') => {
        if (!val) {
            if (val === 0) return '0'
            return ''
        }

        let newString = String(val)
        const indexOfDots = newString.indexOf('.')
        let tail = ' ₽'

        if (indexOfDots != -1) {
            tail = div + newString.substring(indexOfDots + 1)
            newString = newString.substring(0, indexOfDots)
        }

        let temp: Array<string> = []
        let array = Array.from(newString)
        let iterator = 0

        for (let i = array.length - 1; i >= 0; i--) {
            if (iterator % 3 == 0) {
                temp.push(' ')
            }
            temp.push(array[i])
            iterator++
        }

        return temp.reverse().join('').trim() + tail
    },

    monthDeclination: (num: any) => {
        if (!num) {
            if (num === 0) return '0'
            return ''
        }

        if (num % 10 === 1 && num % 100 !== 11) {
            return num + ' месяц'
        } else if (
            [2, 3, 4].includes(num % 10) &&
            ![12, 13, 14].includes(num % 100)
        ) {
            return num + ' месяца'
        } else {
            return num + ' месяцев'
        }
    },

    phoneNormalize: (phone: string | null) => {
        if (typeof phone === 'string') {
            // На случай, если в сторе уже заформаченный телефон
            if (phone.includes('+')) return phone
            return `+${phone?.slice(0, 1)} ${phone?.slice(1, 4)} ${phone?.slice(
                4,
                7
            )} ${phone?.slice(7, 9)} ${phone?.slice(9)}`
        } else {
            return '-'
        }
    },

    phoneNormalizeSecondVariant: (phone: string | null | undefined) => {
        if (typeof phone === 'string') {
            // Удаляем все символы, кроме цифр
            const numericPhone = phone.replace(/\D/g, '')

            // Проверяем, что номер имеет минимальную длину
            if (numericPhone.length >= 10) {
                // Форматируем номер
                return `+${numericPhone.slice(0, 1)} ${numericPhone.slice(
                    1,
                    4
                )} ${numericPhone.slice(4)}`
            } else {
                return '-'
            }
        } else {
            return '-'
        }
    },

    transformRegNumber: (reg: string | null | undefined) => {
        if (!reg) {
            return
        }

        return `${reg.slice(0, 1)} ${reg.slice(1, 4)} ${reg.slice(
            4,
            6
        )} ${reg.slice(6)}`
    },

    decodeUrlQueryString: (str: string | null) => {
        if (!str) {
            return
        }
        return decodeURIComponent((str + '').replace(/\+/g, '%20'))
    },

    getDaysWithNoun: (days: number | `${number}`): string => {
        if (days.toString().length > 1) {
            const twoTailDigits = days.toString().slice(-2)

            if (
                twoTailDigits === '11' ||
                twoTailDigits === '12' ||
                twoTailDigits === '13' ||
                twoTailDigits === '14'
            ) {
                return `${days} дней`
            }
        }

        const oneTailDigit = days.toString().slice(-1)

        if (oneTailDigit === '1') {
            return `${days} день`
        }
        if (oneTailDigit === '2' || oneTailDigit === '3' || oneTailDigit === '4') {
            return `${days} дня`
        }

        return `${days} дней`
    },

    addZeroToNumber: (number: number | string): string => {
        return Number(number) <= 9 ? '0' + number : String(number)
    }
}

export const declinationFromTheNumber = (
    number: number,
    one: string,
    two: string,
    five: string
) => {
    let n = Math.abs(number)
    n %= 100
    if (n >= 5 && n <= 20) {
        return five
    }
    n %= 10
    if (n === 1) {
        return one
    }
    if (n >= 2 && n <= 4) {
        return two
    }
    return five
}

export const onPastePhoneNumberHandler = (e: any) => {
    const value: string = e.clipboardData.getData('text/plain')

    if (value) {
        const symbolsToDelete = [' ']
        const formattedValue = Array.from(value)
            .filter(
                char => !symbolsToDelete.includes(char) && !Number.isNaN(Number(char))
            )
            .join('')
        if (formattedValue.length == 11) {
            e.target.value = formattedValue.substring(1)
        }
    }
}

export const firstLetterUpperCase = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

export const normalizeFullNameFromUppercase = (full_name: string | null) => {
    // full_name:"КУЗЕВАНОВ АЛЕКСАНДР ИГОРЕВИЧ"
    if (!full_name)
        return {
            last_name: '',
            first_name: '',
            middle_name: ''
        }

    const lowerCase = full_name.toLowerCase()
    const last_name = firstLetterUpperCase(lowerCase.split(' ')[0])
    const first_name = firstLetterUpperCase(lowerCase.split(' ')[1])
    const middle_name = firstLetterUpperCase(lowerCase.split(' ')[2])

    return {
        last_name,
        first_name,
        middle_name
    }
}