// Case insensitive sort function
export const compareIgnoreCase = (a, b) => {
    let item1 = a
    let item2 = b

    const collator = new Intl.Collator('en', {
        numeric: true,
        sensitivity: 'base',
    })

    if (Array.isArray(a)) {
        item1 = item1.sort((a: any, b: any) => collator.compare(a, b)).join('|')
    }

    if (Array.isArray(b)) {
        item2 = item2.sort((a: any, b: any) => collator.compare(a, b)).join('|')
    }

    return collator.compare(item1, item2)
}
