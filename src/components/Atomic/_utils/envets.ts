export const hasEventBlocker = (event: any, attribute: string, maxLevel = 10) => {
    if (event.target.getAttribute(attribute)) {
        return true
    }

    let level = 1
    let e = event.target

    while (level <= maxLevel) {
        e = e.parentElement

        if (!e) {
            return false
        }

        if (e.getAttribute(attribute)) {
            return true
        }
        level++
    }

    return false
}
