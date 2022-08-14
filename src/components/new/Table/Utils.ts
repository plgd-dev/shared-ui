// Case insensitive sort function
export const compareIgnoreCase = (a: any, b: any) => a.localeCompare(b, 'en', { numeric: true, sensitivity: 'base' })
