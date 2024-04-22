// Return an array of objects which came in as a text stream of results
export const parseStreamedData = (stream: string) => {
    try {
        return stream
            ? stream
                  .trim()
                  .split('\n\n')
                  .map((a) => JSON.parse(a).result)
            : []
    } catch (e) {
        console.error(e)
        return []
    }
}

// Convert Uint8Array to text
export const binArrayToJson = (binArray: any) => new TextDecoder().decode(binArray)
