export function isSameMonth(date, month, year) {
    const dateParsed = new Date(date)
    const monthParsed = dateParsed.getMonth()
    const yearParsed = dateParsed.getFullYear()

    if (monthParsed === month && yearParsed === year) {
        return true
    } else {
        return false
    }
}