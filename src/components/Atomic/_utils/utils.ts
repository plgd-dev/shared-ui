export const setProperty = (obj: any, path: string, value: any): any => {
    const [head, ...rest] = path.split('.')

    return {
        ...obj,
        [head]: rest.length ? setProperty(obj[head], rest.join('.'), value) : value,
    }
}

export const getObjectKeyPath = (obj: any, currentPath = ''): string => {
    const delimiter = currentPath !== '' ? '.' : ''
    let matchingPath = ''

    if (!obj || typeof obj !== 'object') return ''

    for (const key of Object.keys(obj)) {
        if (typeof obj[key] !== 'object' && obj[key] === true) {
            matchingPath = `${currentPath}${delimiter}${key}`
        } else {
            matchingPath = getObjectKeyPath(obj[key], `${currentPath}${delimiter}${key}`)
        }

        if (matchingPath) break
    }

    return matchingPath
}
