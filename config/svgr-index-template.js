// index-template.js
const path = require('path')

function defaultIndexTemplate(filePaths) {
    const files = []

    const exportEntries = filePaths.map(({ path: filePath }) => {
        const basename = path.basename(filePath, path.extname(filePath))
        const exportName = /^\d/.test(basename) ? `Svg${basename}` : basename
        files.push(basename)
        return `export { default as ${exportName} } from './${basename}'`
    })

    exportEntries.push('')
    exportEntries.push(`export const Icons = ${JSON.stringify(files)}`)
    exportEntries.push('')
    exportEntries.push(`export const IconsRaw = ${JSON.stringify(filePaths.map(({ originalPath }) => originalPath.split('/').pop().split('.')[0]))}`)

    return exportEntries.join('\n')
}

module.exports = defaultIndexTemplate
