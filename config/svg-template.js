const comments = `
// Auto-generated file created by svgr-cli source svg-template.js
// Do not edit directly
`
const template = (variables, { tpl }) => {
    return tpl`
${comments}
${variables.imports}
${variables.interfaces}
const ${variables.componentName} = (${variables.props}) => (
  ${variables.jsx}
)
${variables.exports}
`
}

module.exports = template
